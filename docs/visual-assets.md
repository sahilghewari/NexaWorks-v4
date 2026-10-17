# Signal glass visual

- Generation method: built-in `image_gen` tool via the imagegen skill (not the API/CLI fallback).
- Generated original: 1536 × 1024 PNG, retained in the Codex generated-images folder.
- Project asset: `public/brand/signal-glass.webp` (1536 × 1024, 133,680 bytes).
- The original composition was retained; Sharp encoded it to WebP at quality 86 for delivery.
- Used as decorative hero art, with empty alternative text. All meaningful offer and demo content remains real HTML.
- Depicts an architectural glass sculpture; does not represent customer data, software screenshots, a customer facility, or production results.

## Final generation prompt

Use case: stylized-concept. Asset type: premium enterprise customer intelligence website hero art. Create an exquisite photorealistic 3D studio render, wide landscape 3:2 composition, with one architectural sculpture made from layered translucent smoked emerald glass and polished clear optical glass. Several thin parallel rectangular glass planes and fine luminous filaments converge into a precise central monolithic transparent prism, suggesting many fragmented sources becoming one clear signal. This is an editorial physical material study for NexaWorks customer intelligence, not a UI screenshot or diagram. Object sits toward the RIGHT half, with deep near-black green (#081d18) negative space across the LEFT half for website headline copy. An angled close studio camera, tactile refraction, realistic caustics, subtle mint chartreuse rim light, graphite foundation, tiny fine etched lines, sophisticated restrained cinematic lighting, deep soft shadows, extraordinary material precision and depth. Background seamless dark emerald, sculpture occupies most of the right half, upper and lower edges gently disappear into the dark. Looks like a premium enterprise technology brand campaign, calm, physical, architectural, credible. No text, no numbers, no interface cards, no logos, no people, no hands, no robots, no purple, no cartoon, no neon rainbow, no floating generic spheres. Opaque dark background, not transparent.

## UI references

The implementation is project-specific code using the existing Framer Motion/Motion dependency. No component pack, registry installer, font service, or new animation dependency was added.

- Aceternity UI Spotlight: https://ui.aceternity.com/components/spotlight-new — reference for atmospheric lighting.
- Magic UI Animated Beam: https://magicui.design/docs/components/animated-beam — reference for the source-to-action visual treatment.
- Magic UI Border Beam: https://magicui.design/docs/components/border-beam — reference for a restrained moving edge highlight.
- Motion accessibility: https://motion.dev/docs/react-accessibility — reduced-motion policy and hook.

These are visual references, not copied component source. The user's explicit request for glassmorphism supersedes the older no-glass guideline in `design-standard/01_Philosophy_and_Tokens.md` for this homepage treatment.

> The generated glass artwork is retained as an asset but is not used by the current cinematic homepage. The current product visuals are HTML/SVG.

## Liquid-glass identity (2026-10-17)

`public/brand/liquid-ribbon-v1.webp` is original built-in imagegen artwork, 1536×1024, 87,046 bytes. It replaces the orbital hero direction and appears as a decorative material behind real HTML. Full prompt, font licensing, usage and verification are documented in `liquid-glass-redesign.md`. The four local WOFF2 files under `src/app/fonts/` are distributed under their included SIL Open Font Licenses.
