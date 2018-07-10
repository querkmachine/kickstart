---
title: Colour Palette
status: draft
---

{% macro swatch(group, key) %}
<div class="Fractal-Swatch Fractal-Swatch--{{ group }}-{{ key }}">
	<div class="Fractal-Swatch__swatch"></div>
	<div class="Fractal-Swatch__details"><code>config(palette, {{ group }}, {{ key }})</code></div>
</div>
{% endmacro %}

## Neutral

Neutral colours for neutral things. 

{{ swatch('neutral', 'lightest') }}
{{ swatch('neutral', 'lighter') }}
{{ swatch('neutral', 'light') }}
{{ swatch('neutral', 'mid') }}
{{ swatch('neutral', 'dark') }}
{{ swatch('neutral', 'darker') }}
{{ swatch('neutral', 'darkest') }}

## Contextual

These colours have specific meanings within the site and should not be used for decorative purposes, unless that decoration is intended to convey the related meaning. 

{{ swatch('context', 'accessibility') }}
{{ swatch('context', 'success') }}
{{ swatch('context', 'warning') }}
{{ swatch('context', 'error') }}