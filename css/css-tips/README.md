# CSS Tips

## Working with CSS

The browser user agent (UA) provides some ready-made styles for the HTML elements. These can be overridden or optimized by using a third-party CSS library.

- [CSS Reset](https://meyerweb.com/eric/tools/css/reset/): A CSS reset is a set of CSS rules that resets the browser's default styles.)

- [Normalize.css](https://necolas.github.io/normalize.css/): Normalize.css is a customizable CSS file that makes browsers render all elements more consistently and in line with modern standards.)

- [CSS Remedy](https://github.com/jensimmons/cssremedy): A collection of CSS fixes and browser-specific stylesheets.)

## Container Tips

Solution for width issues that come up with using `width: 100vw;`.

```css
body {
  margin: 0;
}

.container > * {
  margin-right: auto;
  margin-left: auto;
  max-width: 40rem;
}

.title {
  max-width: 100%;
}

img {
  max-width: 100%;
}
```

Content-box vs Border-box. Width is added to the element starting at the content by default. To add width to the element starting at the border, use the `box-sizing` property. The `box-sizing` property is often applied as a global style.

```css
.my-element {
  box-sizing: border-box;
  padding: 1rem;
  border: 1px solid #000;
}
```

Box model directional properties of top, right, bottom, left can cause confusion when direction changes. To make things more intuitive, use the `inline-direction` and `box-direction` property. These properties can be broken down more by using `inline-start`, `inline-end`, `block-start`, and `block-end`. These same logical properties can also be used for sizing of containers such as making use of `inline-size` and `block-size` instead of width and height.

```css
blockquote {
  border-inline-start: 1px solid #000;
  padding-inline-start: 1rem;
  inline-size: 40ch;
}
```

Writing modes can be used to determine the direction of the text and change its orientation. Often used for writing in vertical writing mode. The default for most Western languages is `horizontal-tb`.

```css
blockquote {
  /* writing-mode: horizontal-tb; */
  writing-mode: vertical-rl;
}
```

Horizontal and Vertical alignment of elements can be done by using layout properties like Flexbox and CSS-Grid.

```css
.container {
  display: flex;
  inline-size: 40rem;
  block-size: 40rem;
  justify-content: center; /* used to center child elements */
  align-items: center; /* used to center child elements */
}

.container-child {
  border: 1px solid #000;
  align-self: center; /* works with flexbox and grid */
  justify-self: center; /* only works with grid */
}
```

Maintaining aspect ratio in containers and images can be done by using the `aspect-ratio` property.

```css
.widescreen {
  aspect-ratio: 16/9;
}

.square {
  max-inline-size: 40ch;
  object-fit: cover;
  aspect-ratio: 1/1;
}
```

Working with float and clear. When an element is floated, it is removed from its context. The container element then is collapsed to the size of its remaining elements still within the normal flow. Using the `flow-root` property, the element can be moved to the root of the flow.

```css
.container {
  margin: 0 auto;
  max-width: 50ch;
  border: 1px solid #000;
  display: flow-root;
```
