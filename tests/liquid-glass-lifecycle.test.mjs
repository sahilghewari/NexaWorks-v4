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
  const element = { dataset: { motion: "paused" }, closest: () => element };
  const preference = new EventTarget();
  preference.matches = false;
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
            useId: () => "glass-test",
            useRef: () => ({ current: element }),
            useEffect: (fn) => {
              effect = fn;
            },
          }
        : name === "react/jsx-runtime"
          ? { jsx: () => null, jsxs: () => null }
          : { default: {} },
    window: { matchMedia: () => preference },
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
  bg.visible(true);
  assert.equal(bg.element.dataset.motion, "running");
  bg.document.hidden = true;
  bg.document.dispatchEvent(new Event("visibilitychange"));
  assert.equal(bg.element.dataset.motion, "paused");
  bg.document.hidden = false;
  bg.document.dispatchEvent(new Event("visibilitychange"));
  assert.equal(bg.element.dataset.motion, "running");
  bg.visible(false);
  assert.equal(bg.element.dataset.motion, "paused");
  bg.visible(true);
  assert.equal(bg.element.dataset.motion, "running");
  bg.preference.matches = true;
  bg.preference.dispatchEvent(new Event("change"));
  assert.equal(bg.element.dataset.motion, "paused");
  bg.document.dispatchEvent(new Event("visibilitychange"));
  assert.equal(bg.element.dataset.motion, "paused");
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
