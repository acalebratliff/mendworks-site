---
title: "DOT Studio"
kicker: "Release 1 · JetBrains plugin"
status: "1.0.0 · in JetBrains Marketplace review since 2026-10-03"
lede: "A free JetBrains IDE plugin for Graphviz DOT files, with a live preview that needs no Graphviz installation."
description: "DOT Studio 1.0.0: a free JetBrains plugin for Graphviz DOT with a live preview. QA verdict, known limitations, launch targets, licence and source."
---

## Status

**Version 1.0.0 was submitted to the JetBrains Marketplace on 2026-10-03 and is in review.** We'll add the store link here when JetBrains approves the listing. Until then you can install the [exact ZIP we submitted](https://github.com/acalebratliff/dot-studio/releases/tag/v1.0.0) from the GitHub release, which also gives its SHA-256 checksum.
{.note}

## What it does

From the [README](https://github.com/acalebratliff/dot-studio/blob/main/README.md) and the [1.0.0 changelog](https://github.com/acalebratliff/dot-studio/blob/main/CHANGELOG.md):

- `.dot` and `.gv` files open as DOT files, with syntax highlighting, error highlighting that marks only the broken statement, folding, brace matching, commenting and a Structure view.
- A live preview in a split editor renders the graph as you type. Graphviz is bundled with the plugin, so you don't need to install it. Choose a layout engine with `layout=` in the graph.
- Zoom and pan the preview, and export the graph as SVG, or as PNG at 1x or 2x.
- No network calls and no data collection (by design; QA saw none in the logs but didn't run a network capture).

It works in JetBrains IDEs from 2025.2 (build 252) to 2026.2 (build 262).

## Versions tested

Independent QA tested the release build in two IDEs, each in a light and a dark theme:

| IDE | Build |
|---|---|
| IntelliJ IDEA Community 2025.2.6.3 | 252.28539.97 |
| IntelliJ IDEA 2026.2.3 | 262.10968.63 |

Not covered by QA: macOS and Windows (tested on Linux), display scaling above 1x, and a network capture.

## QA verdict: SHIP

The QA engineer was independent: they didn't build the plugin. They tested the exact file that was submitted, `dot-studio-1.0.0.zip`, SHA-256 `2410ecac2c0df9e64e09e954b2e75ef87746cd392227bec0ab7f8a67012948f6`, which matches the checksum on the [GitHub release](https://github.com/acalebratliff/dot-studio/releases/tag/v1.0.0). They installed it the way a user would, then drove the real IDE actions with a test harness.

The QA reports are internal working documents. This is a summary of the release-candidate report of 2026-10-02:

- **No blockers and no major defects.** The verdict was SHIP.
- **Every area passed on both IDEs**, in light and dark themes: file types, highlighting, error highlighting, folding, the Structure view, the live preview, all eight Graphviz layout engines, zoom and pan, theme switching, SVG and PNG export, and the behaviour when the IDE's embedded browser is turned off.
- **Zero errors attributed to DOT Studio** in the IDE log across all 17 test runs.
- **The listing text matches what the plugin does.** QA checked each claim in the store description against the build.
- **Earlier problems were fixed first.** The first QA pass found two blockers (an out-of-date description and a missing logo) and two major problems (no zoom or pan, and the 2025.2 uninstall issue below). The release candidate fixed the first three; the fourth is a documented limitation.

## Known limitations

**On 2025.2, uninstalling after using the preview may need an IDE restart.** The cause is two leaks in the 2025.2 platform itself, which we traced with a heap analysis before accepting it. Uninstalling without a restart works on 2026.2. Details: [issue #26](https://github.com/acalebratliff/dot-studio/issues/26) and [our coding standards, section 1.4](https://github.com/acalebratliff/dot-studio/blob/main/CODING-STANDARDS.md#14-dynamic-plugin-install-update-uninstall-without-restart).
{.limit}

- When a file holds more than one graph, only the first is previewed, because Graphviz renders only the first. The preview says so.
- Known for version 1.1, all minor:
  - the Structure view shows a multi-line ID with its raw line break ([#30](https://github.com/acalebratliff/dot-studio/issues/30));
  - repainting a very large preview (a 3.4 MB SVG) can briefly stall the IDE while you type ([#31](https://github.com/acalebratliff/dot-studio/issues/31));
  - labels in non-Latin scripts and emoji can slightly overlap their shapes ([#32](https://github.com/acalebratliff/dot-studio/issues/32)).

## Launch targets, set before launch

We set these targets before release, so the results can't move them. They count downloads of this release only, from the day the listing goes live.

| Checkpoint | Target | What happens |
|---|---|---|
| Day 14 | Under 100 downloads | We make one fix to the store listing. |
| Day 30 | Under 300 downloads, or a rating below 3.5 | We stop the project and say so here. |
| Day 30 | 750 downloads or more | Pass: we keep going. |
| Day 30 | 1,500 downloads or more | Strong: we plan the next step for Mendworks. |

## Results

**Not yet.** The clock starts when JetBrains approves the listing. We'll publish the day-14 and day-30 numbers here, whether we hit the targets or miss them.

## Licence and source

- Licence: [Apache-2.0](https://github.com/acalebratliff/dot-studio/blob/main/LICENSE).
- Source: [github.com/acalebratliff/dot-studio](https://github.com/acalebratliff/dot-studio).
- Bundled third-party components (viz-js, and Graphviz compiled to WebAssembly) are listed with their licences in the [README](https://github.com/acalebratliff/dot-studio/blob/main/README.md#third-party-components), and their licence texts ship inside the plugin.
- Report a bug or ask for a feature: [GitHub Issues](https://github.com/acalebratliff/dot-studio/issues).
