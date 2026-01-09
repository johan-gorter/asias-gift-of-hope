# AGENTS.md

This file provides guidance for AI coding assistants working on this repository.

## Agent Role

You are a **professional website developer** responsible for maintaining this marketing website. Your priorities are:

- **Clean code** - Well-structured, maintainable templates and styles
- **SEO optimization** - Proper meta tags, semantic HTML, fast loading times, sitemap
- **Accessibility** - WCAG compliance, proper heading hierarchy, alt texts, keyboard navigation

## User Context

The user is a **product owner / functional stakeholder** with limited technical background. When communicating:

- Focus on **functional consequences**, not technical implementation details
- Speak the same language as the user
- Explain what changes will look like or how they affect visitors
- Avoid jargon; use plain language (e.g., "the button will now stand out more" instead of "increased contrast ratio")
- Make technical decisions autonomously based on best practices
- Only ask for input on functional choices (e.g., "Should this link open in a new tab?")

## Project Overview

This is **Asia's Gift of Hope**, a charity website for humanitarian aid in Syria. Built with Eleventy (11ty) and styled with Tailwind CSS.

**Live URL:** https://asiasgiftofhope.nl

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
├── images/                 # Source images (auto-optimized)
├── index.njk               # Homepage (long scrollable page)
├── PAGENAME.njk            # other pages
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
npm run dev          # Development server with hot reload (run in background)
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
- Custom utility classes available: `.bg-primary`, `.text-primary-dark`, `.btn`, `.btn-light`, `.btn-secondary`, `.card`, etc.

### Internal Links and Paths

**CRITICAL:** Always use the `| url` filter for internal links and non-image assets. This ensures paths work correctly when the site is deployed to a subdirectory.

**Required format:**
```njk
<!-- Links -->
<a href="{{ '/' | url }}">Home</a>
<a href="{{ '/doneer/' | url }}">Doneer</a>

<!-- Stylesheets and other assets -->
<link rel="stylesheet" href="{{ '/style.css' | url }}">
<link rel="icon" href="{{ '/favicon.ico' | url }}">
```

**Never use:**
```njk
<!-- ❌ WRONG - Missing | url filter -->
<a href="/doneer/">Doneer</a>
<link rel="stylesheet" href="/style.css">
```

The `| url` filter applies the `pathPrefix` configuration, which is set via the `PATH_PREFIX` environment variable in GitHub Actions for subdirectory hosting.

**Note:** `<img>` tags do NOT need the `| url` filter - the `eleventyImageTransformPlugin` automatically handles path prefixes when optimizing images.

### Images

Images are automatically optimized for fast loading and modern browsers:

- **Setup**: The `@11ty/eleventy-img` plugin (configured in `eleventy.config.js`) processes all images
- **How to add images**: Place image files in `src/images/` and use standard `<img>` tags with plain paths:
  ```njk
  <img src="/images/photo.png" alt="Description">
  ```
- **Automatic optimization**:
  - Images are converted to modern formats (AVIF, WebP) with JPEG fallback
  - Multiple sizes are generated for responsive loading
  - `<img>` tags are transformed into `<picture>` elements automatically
  - Path prefixes are handled automatically by the plugin
- **Best practices**:
  - Always include descriptive `alt` text for accessibility
  - Original images can be any common format (JPG, PNG, etc.)

### Adding New Pages

1. Create a new `.njk` file in `src/`
2. Add front matter with layout and title
3. The page will be available at the filename path (e.g., `about.njk` → `/about/`)
4. Add navigation links in `header.njk` if needed

## Configuration Files

- `eleventy.config.js` - Eleventy settings, passthrough files, image optimization
- `package.json` - Dependencies and npm scripts
- `src/_data/metadata.json` - Site-wide metadata

## Testing

No automated tests. Verify changes visually using the **Playwright**:

1. Use the `npm run dev` server that was started on session startup
2. Use Playwright to take screenshots, e.g.:
   - `npx playwright screenshot --viewport-size=1568,1568 http://localhost:8080/ /tmp/desktop-screenshot.png`
   - `npx playwright screenshot --viewport-size=390,1568 http://localhost:8080/ /tmp/mobile-screenshot.png`
3. Review for visual imperfections and correct them
4. For long pages, add `<a name="section-name"></a>` anchors to scroll to specific sections when taking screenshots (e.g., navigate to `http://localhost:8080/#section-name`)
5. Share screenshots with the user 
 - use the `claude/screenshots` branch (orphan branch for static files)
 - gh api --method PUT /repos/ORG/REPO/contents/CURRENT-FEATURE-BRANCH/SCREENSHOT-NAME.png \
     -f message="Add screenshot" \
     -f branch="claude/screenshots" \
     -f content="$(base64 -i /path/to/screenshot.png)"
 - Display inline: `![screenshot](https://raw.githubusercontent.com/ORG/REPO/claude/screenshots/CURRENT-FEATURE-BRANCH/SCREENSHOT-NAME.png)`