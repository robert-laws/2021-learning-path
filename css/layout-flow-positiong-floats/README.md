# CSS Layout - Flow, Positioning, Floats

Browsers come with default ways to handle the layout of elements on a webpage.

## Normal Flow

Browser control of layout is also known as **Normal Flow** and determines how elements display within the webpage and relate to the layout and positioning of other elements on a webpage. Understanding normal flow is useful for understanding how different elements behave on a webpage and what properties need to be modified to make changes to normal flow.

An important aspect of the normal flow of elements on a webpage is whether or not they will flow next to other elements and remain on the same line - also known as `inline` elements - or if they will take up an entire like just to themselves - also known as `block` elements.

For example, elements such as the `<div>`, `<p>` and `<li>` elements are block elements and will take up an entire line to themselves and push subsequent elements to a new line in the flow of the page.

By contrast, elements such as `<strong>`, `<em>`, and `<span>` are inline elements and will flow next to each other in the same line on the page.

## Positioning

It's possible to take elements out of the normal flow by making use of the `position` property. This property will override the default behavior for elements, which otherwise will flow normally.

The options for the `position` property are `static`, `relative`, `absolute`, `fixed`, or `sticky`.

### Static

The default behavior for the position property is static. This will arrange elements in their normal position within the document flow.

### Relative

By assigning the position property a value of relative, the element will be available for repositioning based on use of the `top`, `bottom`, `left`, or `right` properties. The values provided to the element's position will move it with reference to it's position within the normal flow. Additionally, the element will move in the opposite direction of the positioning value specified. For example, is a value of `100px` is given for the `bottom` position, the element will move 100px up from the bottom.

### Absolute

By assigning the position property a value of absolute, the element will be taken out of the normal flow and positioned based on the values of the `top`, `bottom`, `left`, or `right` properties. The element is also positioned absolutely with reference to its containing element, but only if the position of containing element (or another ancestor) is explicitly defined as a position other than `static`.

```css
.container {
  height: 100px;
  width: 100px;
  background-color: gray;
  position: relative;
}

.sub-element {
  height: 20px;
  width: 20px;
  background-color: red;
  position: absolute;
  top: -5px;
  right: -5px;
}
```

### Fixed

A position defined as `fixed` will behave exactly like an absolutely positioned element, except that the element will remain fixed in place relative to it's nearest positioned ancestor or the initial containing block if no ancestor is positioned.

### Sticky

A position defined as `sticky` acts as a hybrid of a relative and fixed positioned element. An element with the position sticky will move with the flow of elements until it reaches a threshold position defined by `top`, `bottom`, `left`, or `right`. At this point the element will behave like a fixed positioned element.

### Z-Index

When positioning elements with most of the positioning options there will be situations when elements overlap and are placed under or on top of each other. To control the stacking order of elements, the `z-index` property is available. By default, elements have a z-index of 0 and can be made to appear higher in the stacking order by giving a value of greater than 0. Elements with a z-index higher than other elements will appear "on top" of them when overlapping.

## Floats

For situations where an element should have text content flow around it, floats can be useful. One issue with floats is controlling how content flows around it properly, especially if floats are applied to a container element like a `<div>`. This is done either through a "clearfix" hack or by using the `display: flow-root` css rule.
