# Brand

Source of truth for color, type, fonts, icons, and texture on **Four Letters**. Rules in `.cursor/rules/` point here so they stay short.

This is **not** a clone of [cdtm.com](https://www.cdtm.com/). Use this file for tokens and usage. Layout and interaction are campaign-owned.

## Colour

Use these values via CSS variables / the Tailwind theme. Do not scatter hex in components.

### Brand

| Role        | Hex       |
| ----------- | --------- |
| Main Blue   | `#004EA8` |
| Light Blue  | `#91BEFF` |
| Neutral     | `#E1F5FE` |
| Main Green  | `#0F4C2D` |
| Light Green | `#5BA55A` |

### Always available

| Role  | Hex       |
| ----- | --------- |
| Black     | `#000000` |
| White     | `#FFFFFF` |
| Muted     | `#A1A1AA` |

Do not keep the old lime / navy / ice / lavender palette. If a surface needs a mix, `color-mix` from the tokens above.

### Usage

- **Main blue**: primary field (hero, CTA), primary actions, key type, default links.
- **Light blue**: tints, secondary text on blue, cool highlights. Not body text on white (contrast).
- **Neutral**: cool light surfaces, button fills on blue. Page ice / paper.
- **Main green**: dark accent. Usable as text on light surfaces.
- **Light green**: highlight only (rules, marks, icon hover). Not paragraphs, not small UI labels.
- **Black / white**: stories, type on blue, dialogs. **Muted** (`cdtm-zinc-mid`): secondary type on black (role, class). `black/50` on white.

Primary actions stay **main blue** (or white-on-blue). Don't make light green the primary button.

### Tailwind class names

Namespace everything `cdtm-*`. Black and white: use Tailwind `black` / `white`.

| CSS variable          | Tailwind (e.g. `bg-` / `text-` / `border-`) |
| --------------------- | ------------------------------------------- |
| `--cdtm-brand-blue`   | `cdtm-brand`                                |
| `--cdtm-blue-light`   | `cdtm-blue-light`                           |
| `--cdtm-neutral`      | `cdtm-neutral`                              |
| `--cdtm-green`        | `cdtm-green`                                |
| `--cdtm-green-light`  | `cdtm-green-light`                          |
| `--cdtm-zinc-gray-mid`| `cdtm-zinc-mid`                             |

Wire variables once, then map them into the Tailwind theme (`@theme`). Don't add a second hex table in JS.

### CSS variables (wire these once in `index.css`)

```css
:root {
  --cdtm-brand-blue: #004ea8;
  --cdtm-blue-light: #91beff;
  --cdtm-neutral: #e1f5fe;
  --cdtm-green: #0f4c2d;
  --cdtm-green-light: #5ba55a;
  --cdtm-zinc-gray-mid: #a1a1aa;
  --cdtm-black: #000000;
  --cdtm-white: #ffffff;

  --cdtm-font-body: "Inter Variable", "Inter", system-ui, sans-serif;
  --cdtm-font-headline: "Montserrat Variable", "Montserrat", system-ui, sans-serif;
  --cdtm-weight-body: 400;
  --cdtm-weight-emphasis: 600;
  --cdtm-weight-display: 700;
}
```

Map Tailwind `font-sans` to `var(--cdtm-font-body)` and `font-heading` to `var(--cdtm-font-headline)`. In components, use `font-normal` / `font-semibold` / `font-bold`, not arbitrary `font-[600]`.

## Typography

**Montserrat** for headlines. **Inter** for body and UI (paragraphs, labels, buttons, nav).

### How to load

Self-host via `@fontsource-variable/inter` and `@fontsource-variable/montserrat`. Import them from `index.css`. Do **not** load Google Fonts (or other CDNs) — this is a German-facing page.

Variable fonts cover 400–700. Don't add extra static face files unless a weight is missing.

`h1` / `h2` / `h3` get Montserrat in CSS. Campaign display lines that are not headings (story then/now, pattern lines) use `font-heading`.

### Weight mapping

| Use                         | Face       | Weight | Class            |
| --------------------------- | ---------- | ------ | ---------------- |
| Body                        | Inter      | 400    | `font-normal`    |
| Buttons, labels, nav        | Inter      | 600    | `font-semibold`  |
| Headlines / display         | Montserrat | 700    | `font-bold`      |

Avoid `font-extrabold` and `font-black`. `font-medium` (500) is available on Inter but not the default — prefer 400 / 600.

### Scale (guidance)

Section titles should feel campaign-scale on desktop and readable on a phone. Body `text-lg`–`text-xl` on long copy. One `h1`. One clear hierarchy.

## Texture

File: `src/assets/texture.jpg` (grain / paper structure).

Use **together with a token background** (typically `bg-cdtm-brand`) via the `.cdtm-texture` class. The overlay blend-modes so the grain takes the surface colour — like the blue CDTM lockup sample. Currently on the **Hero**.

**CTA** uses `.cta-wash`: a soft atmospheric field of brand blue, light blue, and a hint of neutral (same idea as cdtm.com partner pages, mapped to this dark section). No grain. Keep white type.

Don't use the file as a standalone photo, and don't put it behind small body copy if it hurts contrast. Content above the overlay needs `relative z-10`.

## Icons

**Phosphor** only, package `@phosphor-icons/react`. `currentColor`. Default size 24, `weight="regular"`. Don't mix Lucide, Heroicons, or SVGs-as-icons unless it's a CDTM / LMU logo asset.

```tsx
import { ArrowRight } from "@phosphor-icons/react";

<ArrowRight size={24} weight="regular" />
```

## Logos

Already in the repo:

| File            | What it is                                      |
| --------------- | ----------------------------------------------- |
| `src/assets/cdtm.svg` | Framed CDTM mark (`currentColor`)        |
| `src/assets/lmu.svg`  | LMU wordmark                             |

Some SVGs fill a hardcoded blue. Leave path fills as authored. Don't rebuild the letters in CSS.
