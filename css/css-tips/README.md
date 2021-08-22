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
/*  */
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

## Typography

Units - px, em, rem - explained. Px is a fixed unit, and em and rem are relative units. `px` is a fixed size and displays the same independently of any other size definition. `em` is the size of the font in relation to the parent element. `rem` is the size of the font in relation to the root element.

```css
:root {
  20px;
}

h1 {
  font-size: 2rem;
}
```

Text line lengths can be set to align with natural line lengths by using the `ch` unit. The `ch` unit is the width of the `0` character of the current font. Typically, the ideal width for a paragraph of text is `70ch`.

```css
.text-container {
  max-width: 70ch;
}

p {
  font-size: 1.5rem;
}
```

Responsive text sizing can be achieved with `min()`, `max()`, and `clamp()` functions. `min()` is the minimum value of the two given values. `max()` is the maximum value of the two given values. `clamp()` is the value of the first argument if it is less than the second argument, otherwise the second argument.

```css
.text-container {
  width: min(
    40ch,
    calc(100vw - 2rem)
  ); /* whichever is the smallest will be used */
}
```

Drop caps can be added with the `text-transform` property.

```css
#first-paragraph::first-letter {
  font-size: 4em;
  float: left;
  float: inline-start;
  margin: 0.1em 0.1em 0.1em 0;
  padding: 0.2rem 0.1em;
  background-color: hsl(0, 59%, 41%);
  color: white;
  text-shadow: 3px 3px 0 #000;
}
```

Truncate text length and number of lines of text. Can be done based on outer bounds of container. This is done with the text-overflow property.

```css
h2 {
  font-size: 3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

Styling selection and highlighting can be done using the `::selection` pseudo-element.

```css
p:last-child {
  background-color: darkslategrey;
  color: white;
  padding: 1rem;
}

p:last-child::selection {
  background-color: hsl(82, 69%, 25%);
}
```

Line height describes the height of the line box - virtual box around a single line of text. Default values are usually between 1.15 and 1.2, which can feel too tight or too loose. To adjust line height, use the `line-height` property. Can be particularly helpful with lists.

```css
p:nth-child(2n) {
  line-height: 1.5;
}
```

## Custom Properties

Allow for the use of variables in CSS. It's possible to add a default value to use if a custom property is absent. Custom properties can also be nested and can be used to create a more complex style.

```css
:root {
  --line-width: 0.75rem;
  --key-color: dodgerblue;
  --box-unit: 1rem;
  --box-offset: calc(var(--box-unit) * 1));
  --box-padding: var(--box-unit);
  --box-border: calc(var(--box-unit) / 2);
}

.card {
  border: var(--line-width, 1px) solid var(--key-color, #000);
}
```

Light or dark mode can be triggered with custom properties and a media query.

```css
:root {
  --background-color: white;
  --font-color: black;
  --key-color: purple;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background-color: hsl(291, 45%, 5%);
    --font-color: hsl(291, 20%, 95%);
    --key-color: hsl(291, 64%, 42%);
  }
}
```
