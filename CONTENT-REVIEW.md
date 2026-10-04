# Content review

All copy on this site is a **draft for Aaron's approval**. Nothing goes public until every box below is ticked on the exact text. Tick a box by editing this file in the same pull request as the approved text.

## Pages

- [ ] **Home** (`content/_index.md`, `layouts/index.html`): mission quote, what Mendworks is, section links.
- [ ] **Shipped** (`content/shipped/_index.md`): section intro.
- [ ] **DOT Studio** (`content/shipped/dot-studio.md`): status, features, versions tested, QA verdict summary, known limitations, launch targets, licence and source.
- [ ] **Contributions** (`content/contributions/_index.md`): states that none are merged yet.
- [ ] **Kill log** (`content/kill-log/_index.md`, `data/killlog.yaml`, legend in `layouts/kill-log/list.html`): intro and 18 entries.
- [ ] **How we work** (`content/how-we-work.md`): team, standards, review, verify then claim, how we choose, fairness, AI disclosure, reporting problems.
- [ ] **Contact** (`content/contact.md`).
- [ ] **Page not found** (`layouts/404.html`).
- [ ] **Site-wide text:** the footer (`layouts/partials/footer.html`), the page titles and descriptions (`hugo.toml` and each page's front matter).

## Points that need Aaron's decision

1. **Mission quote** is your verbatim words from the-good-hunt.md, attributed to "A. Caleb Ratliff". The quote itself has no public source to link; it is attributed to you.
2. **DOT Studio "in review" status:** the submission date (2026-10-03) comes from you; the public evidence is the [v1.0.0 release note](https://github.com/acalebratliff/dot-studio/releases/tag/v1.0.0), which says "pending JetBrains review". Add the store link when the listing goes live.
3. **QA reports are private** (vault). The DOT Studio page summarises the release-candidate QA report on-site instead of linking it. Publish the reports, or keep the summary?
4. **Launch targets are published here for the first time.** The 1,500+ row reads "Strong: we plan the next step for Mendworks". The internal wording is "triggers the LLC/Pro discussion"; say which you want public.
5. **Kill log entries without a public link:** XSD/JSON Schema diagrams and the JMeter viewer (left unlinked so as not to single out solo developers), Dev Containers and hunt #3 (evidence lives in internal research notes). Accept the "evidence is internal" wording, or drop or link these?
6. **Kill log names projects and maintainers' public comments** (all respectful, about fit, not fault): Obsidian Calendar, Thunderbird, Joplin, ScubaGear, 3DTilesRendererJS, color, Readest, Code Runner, autoDocstring, PlantUML, MoviePy, oxidized. AI app factories are not named. Check the tone of each line.
7. **Held and watched candidates are not listed** (UML diagrams, Structurizr, dependency graph, USWDS, next-intl, doxdocgen, Vikunja #8) and neither is in-progress work (pst-viewer #30, dataretrieval #379, Sonarr #6266). The kill log lists only declines, and Contributions lists only merged work.
8. **AI disclosure text** ("written by AI agents (Anthropic's Claude models), and approved by A. Caleb Ratliff before anything is published"): confirm you're happy to say this publicly.
9. **Sponsorship:** the Contact page says Mendworks doesn't take sponsorship yet. Change it when GitHub Sponsors is enabled.
10. **Analytics:** Cloudflare Web Analytics is approved (Decision 4) but the beacon stays commented out until launch.
