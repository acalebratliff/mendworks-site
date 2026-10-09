---
title: "msg-eml-core"
kicker: "Release 2 · Library"
status: "Public on GitHub"
lede: "A free JavaScript library that converts an Outlook .msg file to a standard .eml message."
description: "msg-eml-core: a free library that converts Outlook .msg files to .eml. It is the converter inside MSG Opener for Thunderbird. QA, limitations, licence and source."
---

## Status

**The source is public on [GitHub](https://github.com/acalebratliff/msg-eml-core).** It is the converter inside [MSG Opener for Thunderbird](/shipped/msg-opener-for-thunderbird/), and you can use it on its own.
{.note}

## What it does

It reads the bytes of an Outlook .msg file and returns a standard .eml message, plus a report of anything it could not carry over exactly. It keeps the subject, sender, recipients, dates, text and HTML bodies, attachments and embedded messages. It runs in a browser or in Node, and makes no network calls.

## QA

The QA agent was a separate Claude session and didn't write the library. The QA reports are internal and not published, so there is no link for the claims below. This section is summarised from our internal QA notes:

- **65-file corpus, compared with an independent reader.** The comparison used another open-source .msg reader, extract-msg, as the reference. 63 of the 65 files converted. The other 2 are deliberately damaged fuzz files, which the library refuses with a message that names the problem. Every converted file was also checked for well-formed mail structure.
- **Headless Thunderbird.** Converted messages were imported into Thunderbird and read back. Subjects, bodies, names and attachments matched, including Japanese, Chinese and Russian text.
- **82 tests** in the library's own test suite.
- **Earlier problems fixed first.** An earlier QA pass found stray padding bytes in some bodies and a sender name that differed from the file's own header. Both were fixed and re-checked.
- **Corpus:** synthetic and public files only, no real mailboxes.

## Known limitations

- Outlook .olm files are not supported.
- Encrypted .msg files were not tested.
- The largest file tested inside Thunderbird was 20 MB, through MSG Opener.
- Rich-text (RTF) bodies come out as plain text, with the original attached as `body.rtf`.
- A sender with no email address in the file gets a placeholder address ending in `@unresolved.invalid`. A file with no date gets no Date header.

## Licence and source

- Licence: [Apache-2.0](https://github.com/acalebratliff/msg-eml-core/blob/main/LICENSE).
- Source: [github.com/acalebratliff/msg-eml-core](https://github.com/acalebratliff/msg-eml-core).
- Report a bug or ask for a feature: [GitHub Issues](https://github.com/acalebratliff/msg-eml-core/issues).
- Written and tested with AI assistance (Claude). The author reviews and publishes.
