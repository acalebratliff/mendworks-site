# mendworks.dev

The source of [mendworks.dev](https://mendworks.dev), the Mendworks showcase site: what we've shipped, what we've contributed upstream, what we decided not to build and why, and how we work. Claims link to their evidence; where the evidence is internal, the site says so.

The site is static HTML and CSS built with [Hugo](https://gohugo.io/). It ships **one script**, the Cloudflare Web Analytics beacon in `layouts/_default/baseof.html`, enabled by the owner on 2026-10-06; the CI "no JavaScript" step allows that one tag and nothing else.

## Layout

| Path | What it holds |
|---|---|
| `content/` | Page text, as Markdown. One file per page; `_index.md` files are section pages. |
| `data/declined.yaml` | "What we didn't build" entries, rendered by `layouts/what-we-didnt-build/list.html`. |
| `layouts/` | The site's own templates (no theme). |
| `assets/css/main.css` | The only stylesheet, minified and inlined into each page at build time. |
| `static/` | Files copied as they are (the favicon). |
| `hugo.toml` | Site configuration and the main menu. |

## Build and preview locally

You need Hugo **0.147.0 extended** (the same version CI and Cloudflare Pages use). Get it from the [Hugo releases page](https://github.com/gohugoio/hugo/releases/tag/v0.147.0) (`hugo_extended_0.147.0_linux-amd64.tar.gz`), and keep the binary outside the repo or in the repo root, where `.gitignore` ignores it.

```
hugo server        # live preview at http://localhost:1313/
hugo --minify      # build into public/
```

## Checks

CI (`.github/workflows/ci.yml`, GitHub Actions on `ubuntu-latest`) builds the site with Hugo 0.147.0 extended, then checks `public/`:

1. **No JavaScript:** no `<script>` element, inline event handler or `.js` file.
2. **Links and anchors:** [lychee](https://github.com/lycheeverse/lychee), configured in `lychee.toml`.
3. **HTML validity:** [html-validate](https://html-validate.org/), configured in `.htmlvalidate.json`.
4. **Accessibility:** [pa11y-ci](https://github.com/pa11y/pa11y-ci) with the axe and HTML_CodeSniffer runners at WCAG 2 AA, configured in `.pa11yci.json`.
5. **WCAG 2.2 AA in both themes:** `scripts/axe-check.mjs` runs [axe-core](https://github.com/dequelabs/axe-core) with the WCAG 2.0, 2.1 and 2.2 A/AA rules on every page, in light and dark colour schemes. Any violation or needs-review result fails.
6. **Lighthouse budgets:** [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci), at least 95 in performance, accessibility, best practices and SEO on every page (median of 3 runs), configured in `lighthouserc.json`.

To run them locally (needs Node 24 and Google Chrome at `/usr/bin/google-chrome`):

```
hugo --minify
PUPPETEER_SKIP_DOWNLOAD=true npm ci
npm run validate
python3 -m http.server 8080 --directory public &   # for pa11y-ci
npm run a11y
npm run axe
CHROME_PATH=/usr/bin/google-chrome npm run lighthouse
lychee --config lychee.toml 'public/**/*.html'
```

`node_modules/` and `.lighthouseci/` are ignored by git. Action versions in CI are pinned by commit SHA.

## Adding content

Every change goes in through a feature branch and a pull request, and the new text needs the owner's approval, given in the pull request, before it merges. Every factual claim needs a link to its evidence.

### A release

1. Copy `content/shipped/dot-studio.md` to `content/shipped/<project>.md` and rewrite it. Keep the sections: Status (with the store link), What it does, Versions tested, QA verdict, Known limitations, Launch targets (published **before** launch), Results, Licence and source.
2. Set `status` in the front matter; the Shipped page lists it.
3. When day-14 and day-30 numbers come in, add them under Results, with a link to where they came from, whether the target was hit or missed.
4. Get the owner's approval of the text in the pull request.

### A merged contribution

Only merged work is listed: never proposals, open pull requests or offers to help.

1. Create `content/contributions/<project>-<number>.md`:

   ```
   ---
   title: "Project: what the change does"
   status: "Merged YYYY-MM-DD"
   description: "One sentence for search results and link previews."
   lede: "One sentence on what it adds."
   ---

   - **Merged pull request:** link to the PR
   - **What it adds:** one or two sentences, linking the issue
   - **How AI was used:** what the agents did and what the human did
   ```

2. Get the owner's approval of the text in the pull request.

### A "What we didn't build" entry

Add an entry to `data/declined.yaml`; the comment at the top explains each field. Keep the reason respectful: say why it didn't fit us, never what's wrong with someone's project. Don't name AI app factories; describe them generically.

## Deploying (Cloudflare Pages)

The owner set this up in the Cloudflare dashboard (live since 2026-10-04). No one else performs account actions. These are the settings:

- **Framework preset:** Hugo
- **Build command:** `hugo --minify`
- **Build output directory:** `public`
- **Environment variable:** `HUGO_VERSION` = `0.147.0`
- **Production branch:** `main`
- **Preview deployments: None.** In Settings › Builds & deployments › Preview branch control, set preview branches to *None*, so only `main` deploys. By default Pages publishes every other branch to a public `*.pages.dev` URL, which would make unapproved draft text public. (If previews are ever wanted, protect them with Cloudflare Access first.)

Then add `mendworks.dev` as the custom domain. Cloudflare Web Analytics is enabled with the manual JS snippet ("Enable with JS Snippet installation"): its beacon is in `layouts/_default/baseof.html`, and the CI "no JavaScript" step allows that one tag. Don't use the Pages one-click Web Analytics toggle: it injects the beacon at Cloudflare's edge, bypassing the CI "no JavaScript" check and code review.

## Licence

Apache-2.0, see [LICENSE](LICENSE).
