---
title: Typography
status: draft
---

{% macro typerun(class = '', label = '') %}
<div class="Fractal-TypeSample">
	<div class="Fractal-TypeSample__sample Fractal-TypeSample__sample--{{ class }}">
		The quick brown fox jumped over the lazy dog.
	</div>
	<div class="Fractal-TypeSample__label">{{ label }}</div>
</div>
{% endmacro %}


## Font

[write about font family usage here]

## Sizes

All font sizes follow a modular scale, with a ratio of 1.2 for small screens and 1.4 for large screens.

This means that the leading copy style is 20 percent larger than default on small screens and 40 percent larger than default on large screens, the small heading size is 20/40 percent larger than the leading style, and so on. 

### Body copy

The **default font size** for body copy is 1rem (16px) on small screens and 1.125rem (18px) on large screens. The majority of content on the page should be set in this size. 

{{ typerun('default', 'Default') }}

**Leading copy**, such as the introductory paragraph of an article, can be set in a larger size. This size should be limited to once per page at most. It's 1.2rem (19.2px) on small screens and 1.575rem (25.2px) on large screens. 

{{ typerun('lead', 'Lead') }}

A **smaller text** size exists for smallprint and supplementary information that doesn't require emphasis. This should be used sparingly, as it can be too small for many people to read easily. Small copy is 0.875rem (14px) on all screen sizes. 

{{ typerun('small', 'Small') }}

### Headers

Headers should be used consistently to establish a heirarchy within the page. 

**Extra large headings** exist for use in banners and marketing blocks where they can be afforded significant space and attention. They should be used sparsely for short pieces of text, and never be cramped alongside other information. XL headings are 2.986rem (47.776px) on small screens and 6.051rem (96.816px) on large screens. 

{{ typerun('heading-xl', 'Extra large heading') }}

**Large headings** are intended for use as the primary title of a page. They're displayed at size 2.074rem (33.184px) on small screens and size 4.322rem (69.152px) on large screens.

{{ typerun('heading-l', 'Large heading') }}

**Medium headings** are for use as secondary titles of a page. They're size 1.728rem (27.648px) on small screens and size 3.087rem (49.392px) on large screens.

{{ typerun('heading-m', 'Medium heading') }}

**Small headings** are the tertiary titles of a page. They're size 1.44rem (23.04px) on small screens and size 2.205rem (35.28px) on large screens.

{{ typerun('heading-s', 'Small heading') }}