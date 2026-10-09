---
title: "MSG Opener for Thunderbird"
kicker: "Release 2 · Thunderbird add-on"
status: "Built and tested; not yet on the Thunderbird add-on site"
lede: "A free Thunderbird add-on that opens Outlook .msg files as normal messages, with their attachments, on your own machine."
description: "MSG Opener for Thunderbird 0.1.0: opens Outlook .msg files in Thunderbird. QA verdict, known limitations, pre-registered targets, licence and source."
---

## Status

**Built and tested; not yet on the Thunderbird add-on site.** We're preparing the submission. We'll add the store link here when it is listed. Until then, the source is on [GitHub](https://github.com/acalebratliff/msg-for-thunderbird).
{.note}

## What it does

Thunderbird can't open Outlook .msg files on its own. This add-on converts a .msg to a normal message and opens it in a tab, with its attachments and any messages embedded inside it.

- Right-click a .msg attachment and choose "Open as message".
- Or click the Open .msg toolbar button and pick one or more .msg files. "Import into folder" keeps a copy in a folder you choose.
- When a detail differs from the original, such as a sender with no email address in the file, a bar at the top of the message says so.
- Everything runs on your machine. The add-on asks for no network access and collects no data.

It needs Thunderbird 140 or later. The conversion is done by [msg-eml-core](/shipped/msg-eml-core/), our open-source library.

## Versions tested

The QA agent ran the add-on in two versions of Thunderbird, both on Linux.

| Thunderbird | Platform |
|---|---|
| 140.17.0 ESR | Linux |
| 157.0.1 | Linux |

Not tested: Windows, macOS, and any other Thunderbird version.

## QA verdict: SHIP

The QA agent was a separate Claude session and didn't build the add-on. It tested the exact file we built, `msg-opener-for-thunderbird-0.1.0.xpi`, SHA-256 `70b6f54ada4362fac3bfce691618b4add77fc7a138c6aefdc2ab78e0d8b99bc3`. The verdict was SHIP, on 2026-10-08.

The QA reports are internal and not published, so there is no link for the claims below. This section is summarised from our internal QA notes:

- **Corpus:** 65 .msg files, plus three extra test files built to check the warning bar. 63 of the 65 opened. The other 2 are deliberately damaged files, and the add-on refused both with a message that says what is wrong. 0 crashes, hangs or blank tabs. The results were the same on both Thunderbird versions.
- **Embedded messages:** messages inside other messages opened in all 9 cases, across 7 files.
- **Import:** importing a message twice is detected and refused.
- **Bad input:** a zip and an .eml renamed to .msg, and an empty file, each gave a clear message and no tab.
- **Size:** a 20 MB file opened from disk in 2 to 3 seconds. A 26 MB file was refused at once, with a message.
- **Earlier problem fixed first:** the first QA pass found that the right-click entry could stop appearing after you selected a file that wasn't a .msg. That is fixed, and the second pass checked it in the message tab, in the three-pane view and after a restart.
- **Corpus:** synthetic and public files only, no real mailboxes.

## Known limitations

**Dragging files onto the add-on page has not been verified.** The QA harness can't make a real drop. Picking files with the button was tested.
{.limit}

- It needs Thunderbird 140 or later. It was tested on 140 ESR and 157, on Linux.
- A sender or recipient with no email address in the file is shown with a placeholder address ending in `.invalid`. Replies to it go nowhere.
- A file with no date gets no Date header. Where a file has no sent time, the date shown is when it was delivered or created.
- Rich-text (RTF) bodies are shown as plain text, with the formatted version attached.
- Calendar items, contacts, tasks and notes open as ordinary messages.
- Damaged files are refused with a message. Files over 25 MB are refused.
- It opens .msg files only. It does not open .oft templates, .pst files or winmail.dat. Encrypted .msg files were not tested.
- An opened message is a view of the file. To keep it, use "Import into folder".
- A large .msg attachment (20 MB) took 7 to 8 seconds to open from the right-click entry, and Thunderbird may pause briefly while it does.

## Launch targets, set before launch

We set these targets before release, so the results can't move them. They count the add-on's daily users on the Thunderbird add-on site, from the day the listing goes live.

| Checkpoint | Result | What it means |
|---|---|---|
| Day 30 | Under 4 daily users | Below the median for new add-ons. |
| Day 30 | 11 or more daily users | Top quartile. |
| Day 90 | Under 16 daily users | Median. We stop maintaining it beyond security fixes. |
| Day 90 | 59 or more daily users | Top quartile. We continue. |
| Day 90 | 161 or more daily users | Top decile. We consider adding winmail.dat and .olm support. |
| Any time | A rating under 3.5 | We fix it or withdraw it. |

## Results

**Not yet.** The clock starts when the listing goes live. We'll publish the numbers here, whether we hit the targets or miss them.

## Licence and source

- Licence: [Apache-2.0](https://github.com/acalebratliff/msg-for-thunderbird/blob/main/LICENSE).
- Source: [github.com/acalebratliff/msg-for-thunderbird](https://github.com/acalebratliff/msg-for-thunderbird).
- Converter: [github.com/acalebratliff/msg-eml-core](https://github.com/acalebratliff/msg-eml-core).
- Written and tested with AI assistance (Claude). The author reviews and publishes.
