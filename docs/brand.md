# Brand

Source of truth for color, type, and fonts on **Four Letters**. Rules in `.cursor/rules/` point here so they stay short.

This is **not** a clone of [cdtm.com](https://www.cdtm.com/). Use this file for tokens and usage. Layout and interaction are campaign-owned.

## Colour

Extracted from cdtm.com (2026-07-13). Use these values via CSS variables / the Tailwind theme. Do not scatter hex in components.

### Primary

| Role       | Hex       |
| ---------- | --------- |
| Brand Blue | `#0D4DA1` |

### Accent

| Role        | Hex       |
| ---------- | --------- |
| Accent Lime | `#B0D243` |
| Vivid Blue  | `#2B7FEE` |
| Deep Navy   | `#0A3D7F` |
| Sky Tint    | `#92BEF6` |
| Pale Blue   | `#B8D4F9` |
| Ice Blue    | `#F1F6FE` |
| Lavender    | `#C4B5FD` |
| Blush Pink  | `#F9A8D4` |

### Neutral

| Role              | Hex       |
| ----------------- | --------- |
| Zinc Gray (mid)   | `#A1A1AA` |
| Zinc Gray (light) | `#E4E4E7` |
| Black             | `#000000` |
| White             | `#FFFFFF` |

### Gradients (available, not mandatory)

- Vivid Blue `#2B7FEE` → Deep Navy `#0A3D7F`
- Lavender `#C4B5FD` → Blush Pink `#F9A8D4`

### Usage

- **Brand blue**: primary actions, key type, default links.
- **Lime**: highlight only (rules, marks, small chips). Not paragraphs, not small UI labels.
- **Ice / pale / sky**: large cool fields. **Deep navy / vivid**: depth, hover, gradients.
- **Lavender / blush**: use sparingly; they read as accent, not CDTM-primary.
- Mid zinc: secondary text. Light zinc: hairlines/dividers.

### Tailwind class names

Namespace everything `cdtm-*` so we don't collide with Tailwind's `lime` / `sky` / `zinc`. Black and white: use Tailwind `black` / `white` (same hex as the CSS vars). Don't load Inter or Manrope from Google/Adobe — they are fallbacks only.

| CSS variable            | Tailwind (e.g. `bg-` / `text-` / `border-`) |
| ----------------------- | ------------------------------------------- |
| `--cdtm-brand-blue`     | `cdtm-brand`                                |
| `--cdtm-accent-lime`    | `cdtm-lime`                                 |
| `--cdtm-vivid-blue`     | `cdtm-vivid`                                |
| `--cdtm-deep-navy`      | `cdtm-navy`                                 |
| `--cdtm-sky-tint`       | `cdtm-sky`                                  |
| `--cdtm-pale-blue`      | `cdtm-pale`                                 |
| `--cdtm-ice-blue`       | `cdtm-ice`                                  |
| `--cdtm-lavender`       | `cdtm-lavender`                             |
| `--cdtm-blush-pink`     | `cdtm-blush`                                |
| `--cdtm-zinc-gray-mid`  | `cdtm-zinc-mid`                             |
| `--cdtm-zinc-gray-light`| `cdtm-zinc-light`                           |

Wire variables once, then map them into the Tailwind theme (`@theme` or config — whichever the scaffold uses). Don't add a second hex table in JS.

### CSS variables (wire these once in `index.css`)

```css
:root {
  --cdtm-brand-blue: #0d4da1;
  --cdtm-accent-lime: #b0d243;
  --cdtm-vivid-blue: #2b7fee;
  --cdtm-deep-navy: #0a3d7f;
  --cdtm-sky-tint: #92bef6;
  --cdtm-pale-blue: #b8d4f9;
  --cdtm-ice-blue: #f1f6fe;
  --cdtm-lavender: #c4b5fd;
  --cdtm-blush-pink: #f9a8d4;
  --cdtm-zinc-gray-mid: #a1a1aa;
  --cdtm-zinc-gray-light: #e4e4e7;
  --cdtm-black: #000000;
  --cdtm-white: #ffffff;

  --cdtm-font-brand: "Avenir", "Inter", "Manrope", system-ui, sans-serif;
  --cdtm-weight-body: 400;
  --cdtm-weight-emphasis: 600;
  --cdtm-weight-display: 700;
}
```

Map Tailwind `font-sans` to `var(--cdtm-font-brand)`. In components, use `font-normal` / `font-semibold` / `font-bold`, not arbitrary `font-[600]`.

## Typography

### Files to ship

Get Avenir from [platanus/fonts `Avenir/`](https://github.com/platanus/fonts/tree/master/Avenir). That folder has many weights and formats. **Do not copy the whole folder.** **Do not use their `font.css`.** It registers each file as a separate family (`Avenir-Roman`, …) at `font-weight: normal`, which will not match `font-semibold` / `font-bold`.

Ship **only** the six faces CDTM actually uses, as **one** family `"Avenir"` with weights 400 / 600 / 700. Prefer **woff2** (woff optional). Skip `.eot`, `.svg`, and extra weights (Light, Book, Medium, …) unless we decide we need them.

| File (woff2)            | `font-weight` | `font-style` in CSS | Role                             |
| ----------------------- | ------------- | ------------------- | -------------------------------- |
| `Avenir-Roman`          | 400           | normal              | Body                             |
| `Avenir-Oblique`        | 400           | italic              | Quotes, captions (`italic`)      |
| `Avenir-Heavy`          | 600           | normal              | Subheads, buttons, labels        |
| `Avenir-HeavyOblique`   | 600           | italic              | Available; unused on cdtm.com    |
| `Avenir-Black`          | 700           | normal              | Display headings                 |
| `Avenir-BlackOblique`   | 700           | italic              | Available; unused on cdtm.com    |

The files are named Oblique; cdtm.com registered them as `font-style: oblique`. Tailwind's `italic` class is `font-style: italic`. Register **italic** so the real file is used instead of a faux slant.

Put files in `src/assets/fonts/` at scaffold. Load with `@font-face` (not `next/font` — this is Vite). `font-display: block` matches CDTM; don't change it without asking.

### Weight mapping

There is no 500 or 800/900 file in the **shipped** set. Tailwind:

| Use                         | Weight | Class            |
| --------------------------- | ------ | ---------------- |
| Body                        | 400    | `font-normal`    |
| Quotes / italic captions    | 400    | `italic`         |
| Subheads, buttons, labels   | 600    | `font-semibold`  |
| Hero / section display type | 700    | `font-bold`      |

Never `font-medium`, `font-extrabold`, or `font-black` — they faux-bold or miss files.

On cdtm.com, italic is almost only Roman oblique. Keep Heavy/Black oblique available; don't use them by default.

### Scale (guidance, not a cdtm.com clone)

cdtm.com section titles run roughly `text-5xl` → `text-9xl` across breakpoints; body `text-lg`–`text-xl`. This campaign may go larger or more editorial. Still: one clear hierarchy, and type that works on a phone without becoming a screenshot of the desktop.

## Logos

Already in the repo (move into `src/assets` when scaffolding):

| File            | What it is                                      |
| --------------- | ----------------------------------------------- |
| `logo.svg`      | Framed CDTM mark (`currentColor`)               |
| `wordmark.svg`  | CDTM wordmark                                   |
| `logo-full.svg` | Mark + "Center for Digital Technology…" lockup  |

Some SVGs fill `#174195`, which is **not** the CSS brand token `#0D4DA1`. Leave path fills as authored. Don't rebuild the letters in CSS.

## `@font-face` (reference)

Paths will match `src/assets/fonts/`. Swap `woff2` if that's what we copied.

```css
@font-face {
  font-family: "Avenir";
  src: url("./assets/fonts/Avenir-Roman.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: "Avenir";
  src: url("./assets/fonts/Avenir-Oblique.woff2") format("woff2");
  font-weight: 400;
  font-style: italic;
  font-display: block;
}

@font-face {
  font-family: "Avenir";
  src: url("./assets/fonts/Avenir-Heavy.woff2") format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: "Avenir";
  src: url("./assets/fonts/Avenir-HeavyOblique.woff2") format("woff2");
  font-weight: 600;
  font-style: italic;
  font-display: block;
}

@font-face {
  font-family: "Avenir";
  src: url("./assets/fonts/Avenir-Black.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: "Avenir";
  src: url("./assets/fonts/Avenir-BlackOblique.woff2") format("woff2");
  font-weight: 700;
  font-style: italic;
  font-display: block;
}
```
