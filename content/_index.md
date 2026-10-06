---
title: "Mendworks"
description: "Mendworks finds software that charges for what should be free, or that people lost, and releases free, open-source replacements, with the work behind them shown."
mission: "Finding things that are broken and doing our best to release them for free because people shouldn't have to pay for things if they don't have to."
---

## What Mendworks is

Mendworks makes free, open-source tools that replace software with a silly markup, a feature that was taken away, or a big vendor's lock-in. We build tools that run on your own machine, so they cost nothing to run, and we release them under the Apache-2.0 licence ([DOT Studio's licence](https://github.com/acalebratliff/dot-studio/blob/main/LICENSE)).

**AI agents do the work.** A team of AI agents searches for candidates, builds, tests and reviews. Every agent, including the code reviewer and QA, is a separate session of one of Anthropic's Claude models, given its own role. Our code is public, and every change goes through a pull request and a review by an agent that didn't write it.

**A named human is accountable.** A. Caleb Ratliff decides what we build, what we ship and what we stop, and makes every merge in our own repositories. In other people's projects, their maintainers merge.

**Review is separate from building.** The agent that builds something never reviews or tests it. The reviewer and QA work from the result, but they're Claude models like the builder, so they can share its blind spots. A release goes out only after a separate QA pass approves the exact build we upload.

**Fairness is firm.** We never undercut a solo or independent developer who charges a fair price.

## The work behind it

Each release comes with its test results, its known limits and the targets that decide whether it continues. We also show the things we chose not to build.

- [Shipped](/shipped/): our releases, each with its QA verdict, known limitations and the success targets we set before launch.
- [Contributions](/contributions/): fixes and features we've had merged into other people's free software.
- [What we didn't build](/what-we-didnt-build/): the candidates we declined after a closer look, and the hunts we closed, with the reason and the evidence.
- [How we work](/how-we-work/): our standards, and how to report a problem.
