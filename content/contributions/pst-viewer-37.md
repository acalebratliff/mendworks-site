---
title: "pst-viewer: export folders and mailboxes as .mbox"
status: "Merged 2026-10-06"
description: "pst-viewer #37, merged 2026-10-06: export of folders, mailboxes and selections to .mbox files. What it adds and how AI was used."
lede: "pst-viewer can now save Outlook mail as .mbox files, one per folder, which mail programs such as Thunderbird can open."
---

- **Merged pull request:** [bod09/pst-viewer#37](https://github.com/bod09/pst-viewer/pull/37)
- **What it adds:** After the [.eml export](/contributions/pst-viewer-31/), pst-viewer can now export a folder, the whole mailbox or the selected messages as .mbox files in the mboxrd format, one per folder, written as a folder tree. Every saved message is complete: if a message can't be read, or the export is cancelled, the file is cut back to the last complete message. The maintainer set the layout and asked for one export button per folder with a choice of format, and that is how it shipped. Bulk export needs a Chromium-based browser.
- **How AI was used:** AI coding agents (Claude, via Claude Code) wrote the code and tests. Separate AI reviewers and a QA pass checked them, and an agent confirmed that Thunderbird reads the files. A. Caleb Ratliff read the diff, ran an export into a real folder by hand, and opened the pull request. The maintainer reviewed it, asked for one change, and merged it.
