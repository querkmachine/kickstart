---
title: Typography
status: draft
---

{% macro typerun(class = '', label = '', longText = false) %}
<div class="Fractal-TypeSample">
	<div class="Fractal-TypeSample__sample Fractal-TypeSample__sample--{{ class }}">
		Typography is to literature as musical performance is to composition: an essential act of interpretation, full of endless opportunities for insight or obtuseness.
	</div>
	<div class="Fractal-TypeSample__label">{{ label }}</div>
</div>
{% endmacro %}

* [Font](#font)
* [Sizes](#sizes)
  * [Body copy](#body-copy)
  * [Headers](#headers)
  * [Responsive font size](#responsive-font-size)
* [Leading](#leading)
* [Measures](#measures)
* [Tracking](#tracking)
* [Mathematically determining metrics](#mathematically-determining-metrics)

## Font

[write about font family usage here]

## Sizes

All font sizes follow a modular scale, with a ratio of 1.2 for small screens and 1.4 for large screens.

This means that the leading copy style is 20 percent larger than default on small screens and 40 percent larger than default on large screens, the small heading size is 20/40 percent larger than the leading style, and so on. 

### Body copy

The **default font size** for body copy is 1rem (16px) on small screens and 1.125rem (18px) on large screens. The majority of content on the page should be set in this size. Usage: `@include size-default;`. 

{{ typerun('size-default', 'Default') }}

**Leading copy**, such as the introductory paragraph of an article, can be set in a larger size. This size should be limited to once per page at most. It's 1.2rem (19.2px) on small screens and 1.575rem (25.2px) on large screens. Usage: `@include size-lead;`. 

{{ typerun('size-lead', 'Lead') }}

A **smaller text** size exists for smallprint and supplementary information that doesn't require emphasis. This should be used sparingly, as it can be too small for many people to read easily. Small copy is 0.875rem (14px) on all screen sizes. Usage: `@include size-small;`. 

{{ typerun('size-small', 'Small') }}

### Headers

Headers should be used consistently to establish a heirarchy within the page. 

**Extra large headings** exist for use in banners and marketing blocks where they can be afforded significant space and attention. They should be used sparsely for short pieces of text, and never be cramped alongside other information. XL headings are 2.986rem (47.776px) on small screens and 6.051rem (96.816px) on large screens. Usage: `@include size-heading-xl;`. 

{{ typerun('size-heading-xl', 'Extra large heading') }}

**Large headings** are intended for use as the primary title of a page. They're displayed at size 2.074rem (33.184px) on small screens and size 4.322rem (69.152px) on large screens. Usage: `@include size-heading-l;`. 

{{ typerun('size-heading-l', 'Large heading') }}

**Medium headings** are for use as secondary titles of a page. They're size 1.728rem (27.648px) on small screens and size 3.087rem (49.392px) on large screens. Usage: `@include size-heading-m;`. 

{{ typerun('size-heading-m', 'Medium heading') }}

**Small headings** are the tertiary titles of a page. They're size 1.44rem (23.04px) on small screens and size 2.205rem (35.28px) on large screens. Usage: `@include size-heading-s;`. 

{{ typerun('size-heading-s', 'Small heading') }}

### Responsive font size

A helper mixin exists for producing font sizes that are a percentage of the viewport dimensions, for example, where the font size might always be 5% of the height of the viewport. **This should only be used in very specific, art directed circumstances and it is unsuitable for general use.**

Usage: `@include size-responsive(<fontSizeInViewportUnits>, [minimumSizeInAbsoluteUnits, [maximumSizeInAbsoluteUnits]]);`. 

## Leading

Leading (pronounced as in lead, the metal) is the typographic term for the spacing between lines of text. The term comes from the days of the manual printing press, when typographers would use pieces of lead (the metal) to space out lines of text. Traditionally leading is measured from baseline to baseline but in CSS we have `line-height` instead, which behaves slightly differently—applying the `line-height` from the middle of the text run, rather than as an additional amount on the top or bottom. 

There are three leading mixins available. All of them use ratios of the current font size, so shouldn't need manual adjustment except in exceptional circumstances.

**Default leading** is equivalent to 1.5 times the size of the font. This produces some loose leading that's great for body copy and other places where you can expect to have a large amount of text. Usage: `@include lead-default;`. 

{{ typerun('lead-default', 'Default leading') }}

**Title leading** is equivalent to 1.25 times the size of the font. This makes for a tighter unit, perfect for headings where looser leading would make things look more spread out and less cohesive. Usage: `@include lead-title;`. 

{{ typerun('lead-title', 'Title leading') }}

**Solid leading** is equivalent to the font size; for the largest of copy (like an XL heading) and some specific circumstances where any leading at all is undesirable. Usage: `@include lead-solid;`. 

{{ typerun('lead-solid', 'Solid leading') }}

## Measures

Measures are the length of lines of text. CSS has no specific properties for managing measure, however it can be controlled by setting the `max-width` with a font-sensitive unit of measurement. 

**Default measure** is equivalent to 30ems, or about 70 characters per line. This sits comfortably in [the optimum region for readable copy](https://baymard.com/blog/line-length-readability). Usage: `@include measure-default;`. 

{{ typerun('measure-default', 'Default measure') }}

**Wide measure** is slightly wider at 34ems, or about 75 characters per line. The absolute upper limit for readable copy.  Usage: `@include measure-wide;`. 

{{ typerun('measure-wide', 'Wide measure') }}

**Narrow measure** is 20ems, or about 45 characters per line. This is most suited to headlines that you don't want spanning the width of the page, places where multiple columns of text may sit next to each other, or for some stylistic applications such as image captions. Usage: `@include measure-narrow;`. 

{{ typerun('measure-narrow', 'Narrow measure') }}

## Tracking

Tracking is the spacing between letters. Unlike kerning, which is concerned with the spacing between individual pairs of letters, tracking is about providing uniform spacing between all letters in a piece of copy. 

Extensive use of tracking tends to make copy difficult to read and should only be used for very short, single line pieces of text. Extensive tracking almost universally looks better on all-caps text, too. Note that CSS always applies tracking to the right side of letters (left in right-to-left reading languages), making tracking unsuitable for centre or right-aligned copy. 

Tracking is usually only applied for stylistic purposes. 

**Default tracking** is no tracking at all. This returns text to its default kerning, as prescribed by the typeface. Usage: `@include track-default;`.

{{ typerun('track-default', 'Default tracking') }}

**Wide tracking** applies a .1em spacing between letters. Usage: `@include track-wide;`.

{{ typerun('track-wide', 'Wide tracking') }}

**Narrow tracking** applies a -.05em spacing between letters, bringing them closer together. This should only be used on larger font sizes, such as headers. Usage: `@include track-narrow;`.

{{ typerun('track-narrow', 'Narrow tracking') }}

## Mathematically determining metrics

Aside from the typeface itself, there are three principle components of typography that are useful to know about that make up basic metrics—size (`s`), leading (`l`, also known as line-height), and measure (`m`). Using the font size alone it's possible to calculate the optimal leading and measure using the golden ratio (&asymp; 1.6180, represented below as <code>&phi;</code>). 

Calculate leading from font size: <code>l = s * &phi;</code>

Calculate measure from leading: <code>m = (l * &phi;) ^ 2</code>

**This is not hard math.** There are always further aesthetic considerations that need to be made to produce something exemplory: Typefaces with larger x-heights need more leading, as do typefaces with thicker strokes. Headings require less leading in order to maintain a cohesive looking unit. There may be stylistic or readability reasons for reducing the size of the measure. The line heights and measures on this page do not strictly follow this math, but use it as a starting baseline to work from.