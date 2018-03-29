---
title: Colour Palette
status: draft
---

{% macro swatch(name, color) %}
<div class="Fractal-Swatch">
	<div class="Fractal-Swatch__swatch" style="background-color:{{ color }}">
	</div>
	<div class="Fractal-Swatch__details">
		<code>{{ name }}</code> {{ color }}
	</div>
</div>
{% endmacro %}

## Neutral

Neutral colours for neutral things. 

Accessed via `config(palette, neutral, <key>)`.

{{ swatch('lightest', '#efeff0') }}
{{ swatch('lighter', '#b9b9c0') }}
{{ swatch('light', '#8c8c9c') }}
{{ swatch('mid', '#777788') }}
{{ swatch('dark', '#636373') }}
{{ swatch('darker', '#3f3f46') }}
{{ swatch('darkest', '#1f1f20') }}

## Contextual

These colours have specific meanings within the site and should not be used for decorative purposes, unless that decoration is intended to convey the related meaning. 

Accessed via `config(palette, context, <key>)`.

{{ swatch('accessibility', '#ffcc00') }}
{{ swatch('success', '#4caf50') }}
{{ swatch('warning', '#ffc107') }}
{{ swatch('error', '#f44336') }}