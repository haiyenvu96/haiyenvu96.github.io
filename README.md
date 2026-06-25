# Personal academic portfolio

This is a static GitHub Pages site for a PhD candidate who is looking for a job.

## Project files

- `index.html`: page structure and section anchors
- `styles.css`: layout, colors, typography, responsive behavior
- `site.js`: all personal data and card content
- `assets/hero-academic-workspace.png`: hero image
- `implementation-notes.md`: running record of decisions and checks
- `coding-structure.html`: human-readable project map

## How to edit your personal information

Open [`site.js`](./site.js) and update the `profile` object.

### Basic identity

- `name`
- `role`
- `status`
- `headline`
- `intro`

### News

Update:

- `newsHeading`
- `news`

Each news item has:

- `date`
- `segments`

Each `segments` entry has:

- `text`
- `href` (optional; leave empty to render plain text)

Example:

```js
{
  date: "March 2026",
  segments: [
    { text: 'Our paper, "Example Title," was accepted to Example Conference 2026.' },
  ]
}
```

### Background

Update:

- `backgroundHeading`
- `background`

`background` is an array of paragraphs. Each item becomes one paragraph on the page.

### Quick facts

Update:

- `facts`

Each item has:

- `title`
- `text`

### Research and job targets

Update:

- `opportunities`
- `strengths`

### Papers

Update:

- `papersHeading`
- `papers`

Each paper item has:

- `title`
- `authors`
- `venue`
- `year`
- `image`
- `imageAlt`
- `summary`
- `link`
- `linkLabel`

If `link` is empty, no paper link is shown.
If `image` is empty, no paper image is shown.

Example:

```js
{
  title: "Positive-Unlabeled Learning with Knowledge-Structured Data",
  authors: "Thi Hai Yen VU, Vincent NGUYEN, Christel VRAIN, Hugo BREUILLARD, Thi Bich Hanh DAO",
  venue: "ECML PKDD 2026",
  year: "2026",
  image: "assets/paper-positive-unlabeled.png",
  imageAlt: "Diagram preview for Positive-Unlabeled Learning with Knowledge-Structured Data",
  summary: "Short summary here.",
  link: "https://arxiv.org/abs/xxxx.xxxxx",
  linkLabel: "Read paper"
}
```

Put the paper images in `assets/` and reference them with a relative path such as `assets/my-paper-figure.png`.

### Projects, teaching, awards, or applied work

Update:

- `highlightsHeading`
- `highlights`

Each highlight item has:

- `label`
- `title`
- `text`

### Contact links

Update:

- `contact.copy`
- `contact.actions`
- `contact.note`

For `contact.actions`, use:

- `mailto:your@email.com` for email
- full `https://...` URLs for CV, LinkedIn, GitHub, Google Scholar, personal website, or lab page

## How to change the background image

Replace:

- `assets/hero-academic-workspace.png`

If you use a different filename, update the `src` in [`index.html`](./index.html).

## How to preview locally

From the project root:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173
```

## Publishing to GitHub Pages

Push these files to the repository/branch used by GitHub Pages, then open your site URL.
