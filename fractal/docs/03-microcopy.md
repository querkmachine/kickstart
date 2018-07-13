---
title: Microcopy
status: draft
---

Microcopy is those little bits of text that litter your typical user interface—log in links, form labels, error messages, things like that. Quality microcopy is pivotal in creating an easy to use and accessible user experience. Many standards, such as the <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> accessibility guidelines *require* microcopy to reach certain standards in order to be considered compliant.

Microcopy is often hardcoded, so it is up to you, dear developer, to make sure it’s up to par. Even if not hardcoded, working from a consistent and good quality baseline is beneficial to both the client and to users. 

This page is heavily inspired by [FutureLearn’s page on microcopy](https://www.futurelearn.com/pattern-library/core-patterns/microcopy).

## Capitalisation

Interface labels should be written in sentence case, with the first word capitalised and other words lowercase, unless they are proper nouns or proper adjectives.

This is the way most things are written, and users can read sentence case much faster and with more ease than all caps or title case.

For example:

* Log in (not ‘Log In’)
* Terms and conditions (not ‘Terms and Conditions’)
* RSVP to this event (not ‘RSVP To This Event’)

## Labelling

Labels should be clear and easy to understand. Try and be as specific as possible about what things do from the user’s perspective, not from a technical perspective. Well written labels  will typically involve lots of verbs and action workds.

Aim for short, concise labels, however do not sacrifice clarity for brevity. A longer label that adequately describes a function is better than a shorter label that doesn’t.

For example:

* Send details (not ‘Submit query’)
* Dismiss message (not ‘Close’)
* Proceed to payment (not ‘Next step’)

## Abbreviations

Acronyms and abbreviations are helpful for brevity, but can be confusing if users don’t know what they mean. It’s therefore important that abbreviations are used consistently and in a context where their meaning can be easily determined. Don't 

If the same abbreviation appears multiple times in a page, and space allows, you may define the meaning of the acronym or abbreviation in first usage, then use the abbreviated form.

For example:

* the Central Intelligence Agency (CIA) (not just ‘CIA’)
* 6 mins ago (not ‘6 mins’)

## Dates and times 

Dates should be written with the full month name included. Times should use the 12 hour clock with the meridiem suffixes. These are the easiest to parse date formats for the majority of people, whilst still avoiding ambiguity between different localised formats.

Times relative to the current time should clarify this with the word ‘ago’. No time measures should use leading zeroes.

For example:

* 22 September 2017 (not ‘22/9/17’ or ‘22 Sep 2017’)
* 1:34pm (not ‘13:34’ or ‘01:34pm’)
* 28 minutes ago (not ‘28 mins’ or ‘28m’)

## This vs. that

Think of the user interface as a medium by which we have a dialogue with the user. When talking to or requesting information from the user, use ‘you’. When the user is talking to us, use ‘I’, ‘me’ and ‘my’.

For example:

* Enter your email address (not ‘Enter email address’)
* Email me when my application status changes (not ‘Email when application status changes’)

## Login vs. log in

Use 'login' as a noun and 'log in' as a verb. You log in on the login page. 

## Feedback messaging

Feedback messaging is what the user sees as a consequence of performing an action. This could be something innocuous, such as logging out, to error messages upon trying to fill out a form. 

Feedback messaging is important to get right because it can simulateously acts as both a barrier to the user and, quite often, is their only means of overcoming that barrier. Feedback messaging should be friendly, helpful and unintimidating—acting as a guiding voice, not a punishing one. 

### Use sentences 

Like other microcopy, write errors and feedback messages as though they were standard copy, using sentence case and full, correct punctuation.

For example:

* We couldn’t change your password. (not ‘We Couldn’t Change Your Password’)

### Don't use redundant words

Avoid using words that don’t add value to the message. Avoid overusing ‘please’—be direct and to the point.

For example:

* That password doesn’t meet the requirements. (not ‘Please make sure your password meets the requirements of having one upperletter, one lowercase letter, three symbols and no spaces.’)

### Use contractions 

Say thanks, not ‘thank you’. Say we’ve, not ‘we have’. Using fully expanded phrases sounds very formal and robotic, and even could be construed as talking down to the user. Treating the user like a human being having a casual conversation makes them feel much more relaxed.

For example:

* Thanks for contacting us! We’ll be in touch. (not ‘Thank you for getting in touch. You will hear back from us soon.’)

### Avoid using the passive voice

Passive voice sounds impersonal and robotic. 

If you're not sure if you're using the passive voice or not, try adding 'by zombies' to the end of the sentence. If it still makes sense, you're probably using the passive voice. 

For example:

* We couldn’t change your password. (not ‘Your password couldn't be changed [by zombies].’)

### Talk like a human… 

Write how a human would talk. It’s not that hard.

For example:

* You’ve been logged out. (not ‘Your session has been terminated.’)

### …Just don’t be too informal 

Being too jokey or light-hearted can seem patronising to a user, particularly if something has just gone wrong. This doesn't mean messages have to be devoid of humour, just don't make it at the user's expense. 

For example:

* That password and username combination doesn’t match. (not ‘We couldn’t log you in! You must’ve typed something wrong, silly!’)

### When something goes wrong, take responsibility 

Users don’t like being blamed for things. Even if they’re at fault, take responsibility and perhaps change things to make those errors easier to prevent.

For example:

* We couldn’t log you in. (not ‘Your password is incorrect.’)
* We couldn’t find that page. (not ‘You typed an incorrect URL.’)

### When something goes right, give credit to the user 

Conversely, giving user’s credit for things working out makes them happy. (Even if they didn’t do much!)

For example:

* You’ve changed your email address. (not ‘We’ve changed your email address.’)
* You successfully logged out. (not ‘We logged you out.’)

### Tell the user what they need to do

If an error is displayed, don't just tell them the cause of the error—tell them what they can do to rectify it.

For example:

* That email address isn’t valid. Make sure it contains an ‘@’ symbol. (not just ‘That email address isn’t valid.’)
* An error occurred when trying to load things. Try refreshing the page and try again. (not just ‘An error occurred.’)
