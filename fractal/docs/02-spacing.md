---
title: Spacing
status: draft
---

{% macro spacing(class = '') %}
<div class="Fractal-SpaceSample__space Fractal-SpaceSample__space--{{ class }}"></div>
{% endmacro %}

To assist in maintaining consistency, the design system uses a responsive scale which adapts based on screen size. 

<div class="Fractal-SpaceSample">
{{ spacing(0) }}
{{ spacing(1) }}
{{ spacing(2) }}
{{ spacing(3) }}
{{ spacing(4) }}
{{ spacing(5) }}
{{ spacing(6) }}
{{ spacing(7) }}
{{ spacing(8) }}
{{ spacing(9) }}
</div>

|Spacing unit|Small screens|Large screens|
|:-|-:|-:|
|0|0|0|
|1|.25rem (4px)|.25rem (4px)|
|2|.5rem (8px)|.5rem (8px)|
|3|1rem (16px)|1rem (16px)|
|4|1rem (16px)|1.25rem (20px)|
|5|1rem (16px)|1.5rem (24px)|
|6|1.25rem (20px)|2rem (32px)|
|7|1.5rem (24px)|2.5rem (40px)|
|8|2rem (32px)|3.25rem (52px)|
|9|2.5rem (40px)|3.75rem (60px)|

## Usage

### Margin

For margins, the `@include margin-spacing(<spacing_unit>)` mixin can be used to apply margins to all sides of an element. Passing in a second parameter of `top`, `right`, `bottom` or `left` will apply the padding to only that side. 

### Padding

For padding, the `@include padding-spacing(<spacing_unit>)` mixin can be used to apply padding to all sides of an element. Passing in a second parameter of `top`, `right`, `bottom` or `left` will apply the padding to only that side. 

### Raw value

The function `spacing(<spacing_unit>)` will return a value directly for use in other situations. Unlike the mixins above this value will not adapt to the user's screen resolution and will only return the small screen value; you'll need to get the large screen value manually by adding a second parameter: `spacing(<spacing_unit>, large)`. 