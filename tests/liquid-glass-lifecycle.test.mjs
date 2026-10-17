import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

// Exercise the shipped component's effect against controllable browser lifecycle events.
function mountBackground() {
  let effect;
  let intersection;
  let disconnected = false;
  let stateIndex = 0;
  const states = [];
  const element = { dataset: { motion: "paused" }, closest: () => element };
  const preference = new EventTarget();
  preference.matches = false;
  const wide = new EventTarget();
  wide.matches = true;
  const desktop = new EventTarget();
  desktop.matches = true;
  const document = new EventTarget();
  document.hidden = false;
  const loadedModule = { exports: {} };
  const source = fs.readFileSync(
    new URL(
      "../src/components/marketing/LiquidGlassBackground.tsx",
      import.meta.url,
    ),
    "utf8",
  );
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;
  vm.runInNewContext(compiled, {
    module: loadedModule,
    exports: loadedModule.exports,
    require: (name) =>
      name === "react"
        ? {
            useState: (initial) => {
              const index = stateIndex++;
              states[index] = initial;
              return [
                initial,
                (value) => {
                  states[index] = value;
                },
              ];
            },
            useRef: () => ({ current: element }),
            useEffect: (fn) => {
              effect = fn;
            },
          }
        : name === "react/jsx-runtime"
          ? { jsx: () => null, jsxs: () => null }
          : name === "next/dynamic"
            ? { default: () => () => null }
            : { default: {} },
    window: {
      matchMedia: (query) =>
        query.includes("prefers-reduced-motion")
          ? preference
          : query.includes("801")
            ? wide
            : desktop,
    },
    document,
    IntersectionObserver: class {
      constructor(callback) {
        intersection = callback;
      }
      observe() {}
      disconnect() {
        disconnected = true;
      }
    },
  });
  loadedModule.exports.default();
  const cleanup = effect();
  return {
    element,
    enabled: () => states[0],
    paused: () => states[1],
    wide,
    preference,
    document,
    cleanup,
    visible: (value) => intersection([{ isIntersecting: value }]),
    disconnected: () => disconnected,
  };
}

test("glass runs only while visible, foregrounded and motion is allowed", () => {
  const bg = mountBackground();
  assert.equal(bg.element.dataset.motion, "paused");
  assert.equal(bg.enabled(), false);
  bg.visible(true);
  assert.equal(bg.element.dataset.motion, "running");
  assert.equal(bg.enabled(), true);
  bg.document.hidden = true;
  bg.document.dispatchEvent(new Event("visibilitychange"));
  assert.equal(bg.element.dataset.motion, "paused");
  assert.equal(bg.enabled(), true);
  assert.equal(bg.paused(), true);
  bg.document.hidden = false;
  bg.document.dispatchEvent(new Event("visibilitychange"));
  assert.equal(bg.element.dataset.motion, "running");
  bg.visible(false);
  assert.equal(bg.element.dataset.motion, "paused");
  bg.visible(true);
  assert.equal(bg.element.dataset.motion, "running");
  bg.wide.matches = false;
  bg.wide.dispatchEvent(new Event("change"));
  assert.equal(bg.element.dataset.motion, "paused");
  bg.wide.matches = true;
  bg.wide.dispatchEvent(new Event("change"));
  assert.equal(bg.element.dataset.motion, "running");
  bg.preference.matches = true;
  bg.preference.dispatchEvent(new Event("change"));
  assert.equal(bg.element.dataset.motion, "paused");
  bg.document.dispatchEvent(new Event("visibilitychange"));
  assert.equal(bg.element.dataset.motion, "paused");
  assert.equal(bg.enabled(), false);
  bg.preference.matches = false;
  bg.preference.dispatchEvent(new Event("change"));
  assert.equal(bg.element.dataset.motion, "running");
  bg.cleanup();
});

test("unmount disconnects observation and removes visibility/preference listeners", () => {
  const bg = mountBackground();
  bg.visible(true);
  bg.cleanup();
  assert.equal(bg.disconnected(), true);
  assert.equal(bg.element.dataset.motion, "paused");
  bg.preference.dispatchEvent(new Event("change"));
  bg.document.dispatchEvent(new Event("visibilitychange"));
  assert.equal(bg.element.dataset.motion, "paused");
});
