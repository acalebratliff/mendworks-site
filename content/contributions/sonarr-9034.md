---
title: "Sonarr: inactive seed time limit for qBittorrent"
status: "Merged 2026-10-21"
description: "Sonarr #9034, merged 2026-10-21: a Seed Time Type setting on the qBittorrent download client, Total or Inactive. What it adds and how AI was used."
lede: "Sonarr can now tell qBittorrent to limit how long a torrent sits inactive, instead of how long it seeds in total."
---

- **Merged pull request:** [Sonarr/Sonarr#9034](https://github.com/Sonarr/Sonarr/pull/9034)
- **What it adds:** An advanced "Seed Time Type" setting on the qBittorrent download client, asked for in [Sonarr #6266](https://github.com/Sonarr/Sonarr/issues/6266). Total keeps today's behaviour. Inactive sends the indexer's seed time to qBittorrent as an inactive seeding time limit, which needs qBittorrent 4.6.0 or later; on an older qBittorrent, Sonarr warns and sends it as a total limit instead. The maintainer confirmed the approach on the issue before any code was written. It is in the Sonarr v5 pre-release 5.0.0.2742.
- **How AI was used:** AI coding agents (Claude, via Claude Code) wrote the code and tests, applied the two changes the maintainer asked for, rebased the branch, and checked the result against throwaway qBittorrent 5.2 and 4.5 containers. A separate AI review checked their work. A. Caleb Ratliff walked through the diff, wrote the pull request description, opened the pull request, pushed the rebase and marked it ready. The maintainer reviewed it, asked for changes, and merged it.
