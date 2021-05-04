# CSS

**Supporting Files**

- [CSS Example](examples/css-section.html)

- [CSS Specificity Guide](https://cssspecificity.com/)

**Resources**

- [CSS: Cascading Style Sheets from MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)

**Contents**

- [Basic Rules](#basic-rules)

- [Parent and Children](#parent-and-children)

- [Selectors and the Cascade](#selectors-and-the-cascade)

- [Pseudo-Classes](#pseudo-classes)

- [Pseudo-Elements](#pseudo-elements)

- [Box Model](#box-model)

- [Flexbox](#flexbox)

---

## Basic Rules

```css
h1 {
  color: red;
  font-size: 3rem;
  font-family: 'Arial', sans-serif;
  text-transform: capitalize;
}
```

A CSS rule declaration includes a few things. **Selectors** is what the CSS rules match against. In the case above, the selector is `h1`.

**Properties** are the things that can be defined for an element. `color` and `font-size` are properties the can be defined in a rule declaration.

Finally, **Values** are the definitions used to describe a property and which are then applied to the elements on the web page that match the selector.

## Parent and Children

An element that is nested within another element is a child to a parent element. An element that surrounds one or more elements is an ancestor to those elements. Elements at the same level, such as the `h1` and `nav` elements below, are considered siblings.

```html
<header>
  <h1>My Title</h1>
  <nav>
    <a href="/">Navigation Link 1</a>
    <a href="/">Navigation Link 2</a>
    <a href="/">Navigation Link 3</a>
  </nav>
</header>
```

## Selectors and the Cascade

**Classes** can be added as an attribute for an element. The same element can be defined by its element name, `h1` in the example below.

```html
<style>
  .main-title {
    color: red;
  }

  h1 {
    color: blue;
  }
</style>
<header>
  <h1 class="main-title">My Main Title</h1>
</header>
```

CSS Rules are applied based on specificity, which define when a style definition is applied when there are multiple options available.

Two selectors that have equal weight will both match the element, but the selector defined last in sequence will be applied.

Another selector that can be used is the `id`, which is applied to one and only one element on an entire web page. An selector that targets the `id` is more specific than classes. And the `!important` property will be the most specific compared to an `id` and a `class`.

```html
<style>
  #page-main-title {
    color: red;
  }
</style>
<header>
  <h1 id="page-main-title">My Main Title</h1>
</header>
```

## Pseudo-Classes

Pseudo-classes provide the ability to apply styling based on a user interaction or the location of an element with relationship to other elements. List of [Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/:active) from MDN.

```css
.title:hover {
  color: red;
  text-decoration: underline;
}

div.author:first-child {
  background-color: gray;
}

button:disabled {
  border: 3px solid red;
}
```

## Pseudo-Elements

It's possible to add content to a page using only CSS and pseudo-elements. This is done by using the `::before` and `::after` pseudo-elements.

```css
nav::before {
  content: 'beginning of nav';
}

nav::after {
  content: 'end of nav';
}
```

## Display Types

- inline - element will flow without line breaks
- block - element will take entire line of content
- inline-block - element generally acts like inline to allow content to flow, but respects height, width, padding, and margin
- flex - allows elements to work within a flex container
- grid - allows layout in grids and arrange elements within the grids precisely
- table - table layout
- none - element will not display

## Box Model

The box model defines how an element calculates its margin, border, width, and content.

```css
div.box-1 {
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  margin: 10px;
  border: 1px solid #000;
  padding: 20px;
}
```

Elements that make use of the `box-sizing: border-box` property value calculate the total width and height of the element using padding and border. The property `box-sizing: content-box` will calculate the element sizing with only the content.

## Flexbox

Is a display mode that allows for control of children element layout within a parent element.

```html
<style>
  .item-container {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box {
    width: 100px;
    height: 100px;
    border: 1px solid #000;
  }
</style>

<div class="item-container">
  <div class="box box-1">Box 1</div>
  <div class="box box-2">Box 2</div>
  <div class="box box-3">Box 3</div>
</div>
```
