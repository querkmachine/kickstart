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

### Utility classes

Utility classes are provided for making quick spacing adjustments without the need to edit Sass code. All of these classes are marked `!important` and will override existing margin and padding declarations. Use these sparingly. 

<div class="Fractal-Columns">
`.u-!-margin-0`<br>
`.u-!-margin-1`<br>
`.u-!-margin-2`<br>
`.u-!-margin-3`<br>
`.u-!-margin-4`<br>
`.u-!-margin-5`<br>
`.u-!-margin-6`<br>
`.u-!-margin-7`<br>
`.u-!-margin-8`<br>
`.u-!-margin-9`<br>
`.u-!-margin-top-0`<br>
`.u-!-margin-top-1`<br>
`.u-!-margin-top-2`<br>
`.u-!-margin-top-3`<br>
`.u-!-margin-top-4`<br>
`.u-!-margin-top-5`<br>
`.u-!-margin-top-6`<br>
`.u-!-margin-top-7`<br>
`.u-!-margin-top-8`<br>
`.u-!-margin-top-9`<br>
`.u-!-margin-right-0`<br>
`.u-!-margin-right-1`<br>
`.u-!-margin-right-2`<br>
`.u-!-margin-right-3`<br>
`.u-!-margin-right-4`<br>
`.u-!-margin-right-5`<br>
`.u-!-margin-right-6`<br>
`.u-!-margin-right-7`<br>
`.u-!-margin-right-8`<br>
`.u-!-margin-right-9`<br>
`.u-!-margin-bottom-0`<br>
`.u-!-margin-bottom-1`<br>
`.u-!-margin-bottom-2`<br>
`.u-!-margin-bottom-3`<br>
`.u-!-margin-bottom-4`<br>
`.u-!-margin-bottom-5`<br>
`.u-!-margin-bottom-6`<br>
`.u-!-margin-bottom-7`<br>
`.u-!-margin-bottom-8`<br>
`.u-!-margin-bottom-9`<br>
`.u-!-margin-left-0`<br>
`.u-!-margin-left-1`<br>
`.u-!-margin-left-2`<br>
`.u-!-margin-left-3`<br>
`.u-!-margin-left-4`<br>
`.u-!-margin-left-5`<br>
`.u-!-margin-left-6`<br>
`.u-!-margin-left-7`<br>
`.u-!-margin-left-8`<br>
`.u-!-margin-left-9`<br>
`.u-!-padding-0`<br>
`.u-!-padding-1`<br>
`.u-!-padding-2`<br>
`.u-!-padding-3`<br>
`.u-!-padding-4`<br>
`.u-!-padding-5`<br>
`.u-!-padding-6`<br>
`.u-!-padding-7`<br>
`.u-!-padding-8`<br>
`.u-!-padding-9`<br>
`.u-!-padding-top-0`<br>
`.u-!-padding-top-1`<br>
`.u-!-padding-top-2`<br>
`.u-!-padding-top-3`<br>
`.u-!-padding-top-4`<br>
`.u-!-padding-top-5`<br>
`.u-!-padding-top-6`<br>
`.u-!-padding-top-7`<br>
`.u-!-padding-top-8`<br>
`.u-!-padding-top-9`<br>
`.u-!-padding-right-0`<br>
`.u-!-padding-right-1`<br>
`.u-!-padding-right-2`<br>
`.u-!-padding-right-3`<br>
`.u-!-padding-right-4`<br>
`.u-!-padding-right-5`<br>
`.u-!-padding-right-6`<br>
`.u-!-padding-right-7`<br>
`.u-!-padding-right-8`<br>
`.u-!-padding-right-9`<br>
`.u-!-padding-bottom-0`<br>
`.u-!-padding-bottom-1`<br>
`.u-!-padding-bottom-2`<br>
`.u-!-padding-bottom-3`<br>
`.u-!-padding-bottom-4`<br>
`.u-!-padding-bottom-5`<br>
`.u-!-padding-bottom-6`<br>
`.u-!-padding-bottom-7`<br>
`.u-!-padding-bottom-8`<br>
`.u-!-padding-bottom-9`<br>
`.u-!-padding-left-0`<br>
`.u-!-padding-left-1`<br>
`.u-!-padding-left-2`<br>
`.u-!-padding-left-3`<br>
`.u-!-padding-left-4`<br>
`.u-!-padding-left-5`<br>
`.u-!-padding-left-6`<br>
`.u-!-padding-left-7`<br>
`.u-!-padding-left-8`<br>
`.u-!-padding-left-9`
</div>