# mendworks.dev

The source of [mendworks.dev](https://mendworks.dev), the Mendworks showcase site: what we've shipped, what we've contributed upstream, what we decided not to build and why, and how we work. Every factual claim on the site links to its evidence.

The site is static HTML and CSS built with [Hugo](https://gohugo.io/). It ships **no JavaScript**: the only script it may ever load is the Cloudflare Web Analytics beacon, which stays commented out in `layouts/_default/baseof.html` until launch.

## Layout

| Path | What it holds |
|---|---|
| `content/` | Page text, as Markdown. One file per page; `_index.md` files are section pages. |
| `data/killlog.yaml` | Kill log entries, rendered by `layouts/kill-log/list.html`. |
| `layouts/` | The site's own templates (no theme). |
| `assets/css/main.css` | The only stylesheet, minified and inlined into each page at build time. |
| `static/` | Files copied as they are (the favicon). |
| `hugo.toml` | Site configuration and the main menu. |
| `CONTENT-REVIEW.md` | Sign-off list: each page's text needs Aaron's approval before launch. |

## Build and preview locally

You need Hugo **0.147.0 extended** (the same version CI and Cloudflare Pages use). Get it from the [Hugo releases page](https://github.com/gohugoio/hugo/releases/tag/v0.147.0) (`hugo_extended_0.147.0_linux-amd64.tar.gz`), and keep the binary outside the repo or in the repo root, where `.gitignore` ignores it.

```
hugo server        # live preview at http://localhost:1313/
hugo --minify      # build into public/
```

## Checks

CI (`.github/workflows/ci.yml`, GitHub Actions on `ubuntu-latest`) builds the site with Hugo 0.147.0 extended, then checks `public/`:

1. **No JavaScript:** no `<script>` element, inline event handler or `.js` file.
2. **Links:** [lychee](https://github.com/lycheeverse/lychee), configured in `lychee.toml`.
3. **HTML validity:** [html-validate](https://html-validate.org/), configured in `.htmlvalidate.json`.
4. **Accessibility:** [pa11y-ci](https://github.com/pa11y/pa11y-ci) with the axe and HTML_CodeSniffer runners at WCAG 2 AA, configured in `.pa11yci.json`.
5. **Lighthouse budgets:** [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci), at least 95 in performance, accessibility, best practices and SEO on every page (median of 3 runs), configured in `lighthouserc.json`.

To run them locally (needs Node 24 and Google Chrome at `/usr/bin/google-chrome`):

```
hugo --minify
PUPPETEER_SKIP_DOWNLOAD=true npm ci
npm run validate
python3 -m http.server 8080 --directory public &   # for pa11y-ci
npm run a11y
CHROME_PATH=/usr/bin/google-chrome npm run lighthouse
lychee --config lychee.toml 'public/**/*.html'
```

`node_modules/` and `.lighthouseci/` are ignored by git. Action versions in CI are pinned by commit SHA.

## Adding content

Every change goes in through a feature branch and a pull request, and the new text needs Aaron's approval before it merges. Every factual claim needs a link to its evidence.

### A release

1. Copy `content/shipped/dot-studio.md` to `content/shipped/<project>.md` and rewrite it. Keep the sections: Status (with the store link), What it does, Versions tested, QA verdict, Known limitations, Launch targets (published **before** launch), Results, Licence and source.
2. Set `status` in the front matter; the Shipped page lists it.
3. When day-14 and day-30 numbers come in, add them under Results, with a link to where they came from, whether the target was hit or missed.
4. Add the page to `CONTENT-REVIEW.md`.

### A merged contribution

Only merged work is listed: never proposals, open pull requests or offers to help.

1. Create `content/contributions/<project>-<number>.md`:

   ```
   ---
   title: "Project: what the change does"
   status: "Merged YYYY-MM-DD"
   lede: "One sentence on what it fixed."
   ---

   - **Merged pull request:** link to the PR
   - **What it fixed:** one or two sentences, linking the issue
   - **How AI was used:** what the agents did and what the human did
   ```

2. Remove the "None merged yet" paragraph from `content/contributions/_index.md`.
3. Add the page to `CONTENT-REVIEW.md`.

### A kill log entry

Add an entry to `data/killlog.yaml`; the comment at the top explains each field. Keep the reason respectful: say why it didn't fit us, never what's wrong with someone's project. Don't name AI app factories; describe them generically.

## Deploying (Cloudflare Pages)

Aaron sets this up himself, in the Cloudflare dashboard, when the text is approved:

- **Framework preset:** Hugo
- **Build command:** `hugo --minify`
- **Build output directory:** `public`
- **Environment variable:** `HUGO_VERSION` = `0.147.0`
- **Production branch:** `main`

Then add `mendworks.dev` as the custom domain. If Cloudflare Web Analytics is enabled, put its site token into the commented-out beacon in `layouts/_default/baseof.html`, uncomment it, and allow that one script in the CI "no JavaScript" step, in its own pull request.

## Licence

Apache-2.0, see [LICENSE](LICENSE).
