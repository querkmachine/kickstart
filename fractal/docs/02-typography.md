---
title: Typography
status: draft
---

{% macro typerun(family = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'", size = '18px', weight = 400, style = 'normal', label = 'Regular') %}
<div class="Fractal-TypeSample">
	<div class="Fractal-TypeSample__sample" style="font-family: {{ family }}; font-size: {{ size }};font-weight: {{ weight }}; font-style: {{ style }};">
		The quick brown fox jumped over the lazy dog.
	</div>
	<div class="Fractal-TypeSample__label">{{ label }} &mdash; size: {{ size }}, weight: {{ weight }}, style: {{ style }}</div>
</div>
{% endmacro %}

## Header

<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">

This website uses [Montserrat](https://fonts.google.com/specimen/Montserrat) as the header typeface.

{{ typerun(label = 'Heading level 1', family = 'Montserrat', size = '96px', weight = 700) }}
{{ typerun(label = 'Heading level 2', family = 'Montserrat', size = '80px', weight = 700) }}
{{ typerun(label = 'Heading level 3', family = 'Montserrat', size = '48px', weight = 700) }}
{{ typerun(label = 'Heading level 4', family = 'Montserrat', size = '36px', weight = 700) }}
{{ typerun(label = 'Heading level 5', family = 'Montserrat', size = '24px', weight = 700) }}
{{ typerun(label = 'Heading level 5', family = 'Montserrat', size = '20px', weight = 700) }}
{{ typerun(label = 'Body copy', family = 'Montserrat', size = '16px') }}
{{ typerun(label = 'Small copy', family = 'Montserrat', size = '14px') }}

## Body

The user's system font is used for body copy to maximise performance, as well as to make the site appear more 'native' to the user's environment. 

{{ typerun(label = 'Heading level 1', size = '96px', weight = 700) }}
{{ typerun(label = 'Heading level 2', size = '80px', weight = 700) }}
{{ typerun(label = 'Heading level 3', size = '48px', weight = 700) }}
{{ typerun(label = 'Heading level 4', size = '36px', weight = 700) }}
{{ typerun(label = 'Heading level 5', size = '24px', weight = 700) }}
{{ typerun(label = 'Heading level 5', size = '20px', weight = 700) }}
{{ typerun(label = 'Body copy', size = '16px') }}
{{ typerun(label = 'Small copy', size = '14px') }}

## Monospace

{{ typerun(label = 'Heading level 1', family = "Hack, Consolas, Monaco, 'Andale Mono', monospace", size = '96px', weight = 700) }}
{{ typerun(label = 'Heading level 2', family = "Hack, Consolas, Monaco, 'Andale Mono', monospace", size = '80px', weight = 700) }}
{{ typerun(label = 'Heading level 3', family = "Hack, Consolas, Monaco, 'Andale Mono', monospace", size = '48px', weight = 700) }}
{{ typerun(label = 'Heading level 4', family = "Hack, Consolas, Monaco, 'Andale Mono', monospace", size = '36px', weight = 700) }}
{{ typerun(label = 'Heading level 5', family = "Hack, Consolas, Monaco, 'Andale Mono', monospace", size = '24px', weight = 700) }}
{{ typerun(label = 'Heading level 5', family = "Hack, Consolas, Monaco, 'Andale Mono', monospace", size = '20px', weight = 700) }}
{{ typerun(label = 'Body copy', family = "Hack, Consolas, Monaco, 'Andale Mono', monospace", size = '16px') }}
{{ typerun(label = 'Small copy', family = "Hack, Consolas, Monaco, 'Andale Mono', monospace", size = '14px') }}