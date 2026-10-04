---
title: "How we work"
kicker: "Standards"
lede: "AI agents do the work, a named human is accountable, and nothing is claimed until it's verified."
description: "How Mendworks works: coding standards, independent review, verify then claim, the fairness rule, AI disclosure and how to report a problem."
---

## Who does the work

The work is done by a team of AI agents with defined roles: engineers, a build and release engineer, QA, an independent code reviewer, a market analyst and a red team that tries to talk us out of each idea. An AI engineering lead plans the work and brings decisions to **A. Caleb Ratliff**, the accountable human, who decides and merges.

## Coding standards

Each project has written coding standards, and every rule in them is something a reviewer can check in a diff, a CI log or one command. Each rule cites its primary source. See [DOT Studio's coding standards](https://github.com/acalebratliff/dot-studio/blob/main/CODING-STANDARDS.md) and its [pull request checklist](https://github.com/acalebratliff/dot-studio/blob/main/.github/pull_request_template.md).

## Independent review

- **An author never reviews its own change.** Every change goes through a pull request, an independent code reviewer and green CI.
- **QA is independent too.** The QA engineer didn't build what they test, and tests the exact file we release. For DOT Studio that meant the oldest and newest IDE versions we support; JetBrains Plugin Verifier checks compatibility with the builds in between.
- **A human merges.** A. Caleb Ratliff merges, and only once the engineering lead says the change is ready.

## Verify, then claim

- **Listings say only what's been tested.** Before DOT Studio was submitted, QA checked each claim in the store description against the build, and the release page names what QA didn't cover.
- **Platform bugs are proven before we blame the platform.** DOT Studio's 2025.2 uninstall limitation was accepted only after a heap analysis showed every leaking path ran through the platform's own code ([coding standards, section 1.4](https://github.com/acalebratliff/dot-studio/blob/main/CODING-STANDARDS.md#14-dynamic-plugin-install-update-uninstall-without-restart)).
- **Targets come before results.** We publish the numbers that decide whether a project continues before it launches (see [DOT Studio's launch targets](/shipped/dot-studio/#launch-targets-set-before-launch)).
- **Evidence is labelled.** Research findings are marked as measured, documented or inferred, as in the [kill log](/kill-log/).

## How we choose what to build

A candidate has to pass every test: people pay unfairly for it or lost it; the lock-in belongs to a big vendor or a dead product; demand is measured, not guessed; the current option is weak; we can replace it cleanly under a compatible licence; it can reach people in a store where they look; and it costs about nothing to run. Then an independent red team tries to kill it. Most candidates don't survive, and the [kill log](/kill-log/) shows why.

## The fairness rule

**We never undercut a solo or independent developer charging a fair price.** In A. Caleb Ratliff's words: "We're not here to undercut some other solo dev who is trying to make an honest living or further their hobby."

We also don't elbow out volunteers: if someone is already doing the work, we step back. And if we ever host something that costs money to run, we'll charge what it costs, publish that cost and add no markup.

## AI disclosure

- **Our code, tests, research and the text of this site are written by AI agents** (Anthropic's Claude models), and approved by A. Caleb Ratliff before anything is published.
- **When we contribute to someone else's project, we say how AI was used,** in the pull request itself.
- **We follow each project's and each store's rules on AI.** Where AI-made work isn't welcome, we don't send it. Flathub is one example, in the [kill log](/kill-log/).

## Report a problem

- **A bug in one of our tools:** open an issue on its repository, for example [DOT Studio's issues](https://github.com/acalebratliff/dot-studio/issues).
- **Something on this site is wrong, or a claim lacks its proof:** open an issue on the [site repository](https://github.com/acalebratliff/mendworks-site/issues), or email us.
- **A security problem, or anything you'd rather not post in public:** email [contact@mendworks.dev](mailto:contact@mendworks.dev).
