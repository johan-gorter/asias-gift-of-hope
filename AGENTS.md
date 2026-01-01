# AGENTS.md

This file provides guidance for AI coding assistants working on this repository.

## Project Overview

This is **LoremCo**, a static marketing website built with Eleventy (11ty) and styled with Tailwind CSS. The site is deployed to GitHub Pages.

**Live URL:** https://loremco.com

## Technology Stack

- **Eleventy 3.0** - Static site generator
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **Nunjucks (.njk)** - Templating engine
- **Node.js** - Runtime environment

## Project Structure

```
src/
├── _data/
│   └── metadata.json       # Global site metadata (title, URL, description)
├── _includes/
│   ├── base.njk            # Base HTML template (head, body wrapper)
│   ├── header.njk          # Site header/navigation
│   └── footer.njk          # Site footer
├── index.njk               # Homepage
├── contact.njk             # Contact page
├── sitemap.njk             # XML sitemap (auto-generated)
├── input.css               # Tailwind CSS with custom theme
├── robots.txt              # SEO robots directive
├── favicon.ico             # Favicon
└── apple-touch-icon.png    # Apple touch icon
```

**Output:** Built files go to `_site/` (gitignored).

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Development server with hot reload
npm run build        # Production build
```

## Key Patterns

### Templates

- All pages use `base.njk` as the layout via front matter:
  ```njk
  ---
  layout: base.njk
  title: Page Title
  ---
  ```
- Use Nunjucks syntax for templating (`{{ variable }}`, `{% block %}`, etc.)
- Global data from `_data/metadata.json` is available as `metadata.*`

### Styling

- Use Tailwind utility classes directly in templates
- Custom theme colors are defined in `input.css` as CSS variables
- Color palette: earthy/sandy tones (primary: `#b08968`, background: `#faf6f1`)
- Custom utility classes available: `.bg-primary`, `.text-primary-dark`, `.btn-primary`, etc.

### Images

- Images are automatically optimized by `@11ty/eleventy-img`
- Use standard `<img>` tags; they're converted to `<picture>` elements with AVIF/WebP formats
- Place images in `src/` and reference them with relative paths

### Adding New Pages

1. Create a new `.njk` file in `src/`
2. Add front matter with layout and title
3. The page will be available at the filename path (e.g., `about.njk` → `/about/`)
4. Add navigation links in `header.njk` if needed

## Configuration Files

- `eleventy.config.js` - Eleventy settings, passthrough files, image optimization
- `package.json` - Dependencies and npm scripts
- `src/_data/metadata.json` - Site-wide metadata

## Things to Avoid

- Do not edit files in `_site/` directly (they're generated)
- Do not add inline `<style>` tags; use Tailwind classes or extend `input.css`
- Do not remove passthrough copy entries in `eleventy.config.js` without understanding their purpose

## Testing

No automated tests. Verify changes by running `npm run dev` and checking the browser.

## Deployment

The site deploys to **GitHub Pages**. Run `npm run build` to generate production files in `_site/`.
