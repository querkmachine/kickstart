---
title: Design Tokens
status: draft
---

## Breakpoints

We aim to create a website that is predominantly mobile first. Named breakpoints are set at common screen resolutions for devices and designs. They're named for the *Star Trek* television series in in-universe chronological order, because Kim is a dork.

Breakpoints are accessed using the `mq()` mixin. The first parameter acts as the `min-width` and the optional second parameter as the `max-width`. In combination it is possible to create breakpoints that only trigger between certain resolutions. 

|Key|Equivalent width|Note|
|:-|:-|:-|
|`ent` (*Enterprise*)|420px|Approximately the width of a landscape phone.|
|`dis` (*Discovery*)|600px|Approximately the width of a narrow, portrait tablet.|
|`tos` (*The Original Series*)|760px|Approximately the width of a typical, portrait tablet.|
|`tng` (*The Next Generation*)|1024px|Approximately the width of a landscape tablet or small monitor.|
|`ds9` (*Deep Space 9*)|1280px|Approximately the width of a typical monitor.|
|`voy` (*Voyager*)|1600px|Approximately the width of a wide monitor.|


## Layers

These are values for use with `z-index` properties. Access using `config(layers, <key>)`.

|Key|`z-index`|
|:-|:-|
|`modal`|9000|
|`backdrop`|8000|
|`overlay`|1000|
|`default`|1|
|`underlay`|-1|

## Layout

Access using `config(layout, <key>)`.

|Key|Usage|
|:-|:-|
|`rem-unit`|The baseline unit of measurement through which other measures should be derived.<br>Use as `1rem`. Use multiples (`3rem`) for larger spans, and fractions (`.5rem`) for smaller.|