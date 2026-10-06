---
title: "pst-viewer: export folders and mailboxes as .eml"
status: "Merged 2026-10-05"
description: "pst-viewer #31, merged 2026-10-05: bulk export of folders, mailboxes and selections to .eml files. What it does and how AI was used."
lede: "pst-viewer can now save a whole Outlook mailbox, or any part of it, as standard .eml files."
---

- **Merged pull request:** [bod09/pst-viewer#31](https://github.com/bod09/pst-viewer/pull/31)
- **What it adds:** pst-viewer opens Outlook PST and OST files in the browser, but it could only save one message at a time. It can now export a folder, the whole mailbox or the selected messages to a folder tree of .eml files, one per message. Damaged messages are skipped and counted, and the export carries on. We proposed the feature in [#30](https://github.com/bod09/pst-viewer/issues/30), and the maintainer set the design. Bulk export needs a Chromium-based browser.
- **How AI was used:** AI coding agents (Claude, via Claude Code) wrote the code and tests, and a separate AI reviewer and QA pass checked them. A. Caleb Ratliff read the diff line by line, tested the real folder picker by hand and opened the pull request. The maintainer reviewed and merged it.
