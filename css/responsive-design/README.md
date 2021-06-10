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
