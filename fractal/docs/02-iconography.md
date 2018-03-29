---
title: Iconography
status: draft
---

{% macro icon(name) %}
<div class="Fractal-Icon">
	<div class="Fractal-Icon__preview"><svg><use xlink:href="/images/icons.svg#{{ name }}"></use></svg></div>
	<div class="Fractal-Icon__label">`{{ name }}`</div>
</div>
{% endmacro %}

SVG is used for icons and UI imagery, as they provide infinite scalability at a relatively small file size. 

## UI

{{ icon('close') }}
{{ icon('search') }}

## Arrows

{{ icon('chevron-up') }}
{{ icon('chevron-down') }}
{{ icon('chevron-left') }}
{{ icon('chevron-right') }}