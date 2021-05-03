# CSS

**Supporting Files**

- [CSS Example](examples/css-section.html)

**Resources**

- [CSS: Cascading Style Sheets from MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)

**Contents**

- [Basic Rules](#basic-rules)

- [Parent and Children](#parent-and-children)

- [Selectors and the Cascade](#selectors-and-the-cascade)

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
