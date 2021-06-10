# Responsive Design

At the heart of responsive design is the [CSS Media Query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries). Using media queries allows the developer to target specific browser sizes or attributes to deliver styling customized for a particular device, resolution, or screen orientation.

The media query is composed of several pieces. There is a **media types** component, which describes the category of a device. Next, there is a **media features** component, which describes specific characteristics of the user agent or device. The media query can also include **logical operators** to add complexity to the query.

## Media Types

Used to describe the general category of a device. The general options available include:

- **all** - suitable for all devices
- **print** - intended for printed or print preview modes
- **screen** - intended for screens
- **speech** - intended for speech synthesizers

## Media Features

Used to test for a specific for the presence or a specific value of a characteristic of the user agent - for example, the test if the width of a screen is at a specific pixel size. Each media feature expression must be surrounded by parentheses.

Some examples ([several more are available](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features)) of features that can be used include:

- **aspect-ratio** - width-to-height aspect ratio of the viewport
- **orientation** - orientation of the viewport
- **resolution** - pixel density of the output device
- **width** - width of the viewport including width of the scrollbar

## Logical Operators

The available logical operators include `not`, `and`, and `only`. Along with logical operators, commas can be used to combine multiple media queries into a single rule.

- **not** - used to negate a media query, returning true if the query would return false. A media type must be used if the _not_ operator is used
- **and** - used to combine multiple media features into a single media query. All of the chained features must return true for the query to be applied
- **only** - used to apply a style only if the entire query matches. Useful to prevent older browsers from mis-applying rules. A media type must be used if the _only_ operator is used
- **comma** - used to chain together multiple media queries into a single rule. Operates like a logical `or` operator in that if at least one of the queries matches, then the rule is applied even if the other rules don't

## Using Media Queries

A basic example of a media query that combines tests for a media type and media features:

```css
@media screen and (min-width: 600px) and (max-width: 1000px) {
  header {
    background-color: lightgreen;
  }
}
```

This media query will apply to the screen category and devices with a minimum width of 600px or greater and a maximum width of 1000px or less. Effectively, what this means is that for screens with a device width between 600px and 1000px, the header will have a background-color of `lightgreen`. For widths of all other sizes (less than 600px and greater than 1000px), the styling will not be applied.

#### Examples of Different Media Queries

...

## Using built-in responsive design features in combination with media queries

Both Flexbox and CSS Grid have some responsive design features built into them. These can be used to handle some of the issues that media queries might usually have addressed.

#### Flexbox

Flexbox allows content to wrap and this can be controlled by making use of the `flex-basis` property.

```html
<div class="container">
  <div class="item item-1">Item 1</div>
  <div class="item item-2">Item 2</div>
  <div class="item item-3">Item 3</div>
  <div class="item item-4">Item 4</div>
</div>
```

```css
.container {
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
}

.item {
  border: 1px solid #000;
  background-color: coral;
  flex: 1 1 400px;
  padding: 10px;
}
```

This code example will create a container section with two columns of content when the width of the container is greater than 840px wide. When it is less than this amount, flexbox instructs the flex items to wrap, forming a single column.

#### CSS Grid

CSS Grid allows things like grid columns to be adjustable using utilities like the `minmax()` function.

```html
<div class="container">
  <div class="item item-1">Item 1</div>
  <div class="item item-2">Item 2</div>
  <div class="item item-3">Item 3</div>
  <div class="item item-4">Item 4</div>
  <div class="item item-5">Item 5</div>
  <div class="item item-6">Item 6</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
}

.item {
  background-color: beige;
  padding: 10px;
}
```

Here the grid container creates columns using the `repeat()` function and the `auto-fill` value to create as many columns as needed based on the sizing requirements of the columns. The size of each column is determined by the `minmax()` function, which says that each columns should be a minimum of `500px` and a maximum of `1fr` unit.

In a more complex example, media queries can be used in combination with CSS Grid to reshape the grid as the viewport width increases. This example takes a mobile-first approach, creating a one-column grid for all the grid items. As the viewport widens to `1000px`, the first media query is applied and the grid becomes 3 columns. Finally, when the viewport increases to `1280px`, the grid increases to 4 columns and the width of the grid container is centered at a size of `1280px`.

```css
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

@media screen and (min-width: 1000px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }

  header {
    grid-column: 1 / 4;
  }

  nav {
    grid-column: 1 / 4;
  }

  main {
    grid-column: 1 / 3;
  }

  aside {
    grid-column: 3 / 4;
  }

  footer {
    grid-column: 1 / 4;
  }
}

@media screen and (min-width: 1280px) {
  .container {
    width: 1280px;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
  }

  header {
    grid-column: 1 / 5;
  }

  nav {
    grid-column: 1 / 5;
  }

  main {
    grid-column: 1 / 3;
  }

  aside {
    grid-column: 3 / 5;
  }

  footer {
    grid-column: 1 / 5;
  }
}
```
