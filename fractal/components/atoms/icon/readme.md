The icon component displays an icon from the sitewide SVG spritesheet. 

## When to use this component

When displaying an icon. 

## When to consider something else

For other UI imagery, add them as images in source control and reference them by file path. 

For content imagery, even if illustrative in nature, use the image component.

## Guidance

Icons should be kept simple in order to be readable at small sizes.

Icons should utilise a single colour that can be modified in code. 

## Accessibility

Add `role="presentation"` to indicate to screen readers that the icon is a presentational element and should not be read aloud. 

## Browser considerations

Internet Explorer will allow focus to land on SVG icons, even when they aren't interactive. Add the non-standard attribute `focusable="false"` to prevent this.

Internet Explorer does not support SVG spritesheets. Use a polyfill library such as [SVG for Everybody](https://github.com/jonathantneal/svg4everybody) to resolve this. 