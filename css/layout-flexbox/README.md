# Flexbox

Creating layouts with normal flow, positioning, and floats is possible, but not very user-friendly for developers. That's where flexbox comes in to help. With flexbox it's possible to build much more complex layouts than by just using normal flow, positioning, and floats.

## The Flex Model

Flexbox is built upon use of several key concepts.

- **Flex Container** - has `display: flex` set and is the parent element that encompasses all elements displayed with a flexbox layout.
- **Main Axis** - runs in the direction that flex items are laid out and has a main start and main end for the start and end of the axis.
- **Cross Axis** - runs perpendicular to the main axis and has a cross start and cross end for the start and end of the axis.
- **Flex Items** - elements laid out inside the flex container are called flex items.

## Implementation

To designate a flex container, the element uses the `display: flex` property and style value.

The parent container also specifies if the flex container will make use of a `row` or `column` layout. This is done using the `flex-direction` property.

```css
.my-container {
  display: flex;
  flex-direction: row;
}
```

#### Wrapping Flex Items

Flex items will display as a row or column and use up as much space as needed to fit all the items into the row. This works okay when there are few items, but causes problems when items begin to overflow their containers or stretch the page display beyond the browser maximum width. To handle this type of situation, there is a property called `flex-wrap` that will wrap content within a flex container that is to large for the height or width of the container.

```css
.my-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
```

#### Shorthand for Flex-Direction and Flex-Wrap

The shorthand for both `flex-direction` and `flex-wrap` is `flex-flow` and is used as the following:

```css
.my-container {
  display: flex;
  flex-flow: row wrap;
}
```

#### Flex Items

To control the sizing of the flex items, it's possible to use the `flex` property applied to a flex item.

```css
article {
  flex: 1;
}
```

The above code tells each flex item to take up as much space is left along the axis to fill the entire axis. This property is also called `flex-grow`.

Each flex item can also be given a minimum amount of space to take up. This is called the `flex-basis` property. It can be combined with flex-grow using the shorthand:

```css
article {
  flex: 1 300px;
}
```

This code tells the browser to give each `article` element a minimum of 300px space and then to divide the remainder of the space as specified by the flex-grow part of the shorthand until all the container space is taken up.

There is an additional property called `flex-shrink` that is available and is part of the flex shorthand as the following: `flex: 1 1 300px`.

#### Vertical and Horizontal Alignment

Flexbox has several different ways to align content. Alignment at the container level is done by using the `justify-content` and `align-items` properties. Justify-Content will set the alignment for flex items along the main axis. Align-Items will set the alignment for flex items along the cross axis.

```css
.my-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
}
```

The options for justify-content include: `center`, `space-between`, `space-evenly`, `space-around`, `flex-start`, or `flex-end`.

The options for align-items include: `flex-start`, `flex-end`, `center`, `stretch`, and `baseline`.

To override the alignment properties set by the flex container, there is a property `align-self` that can be set on the flex item. This will set the alignment specifically for the flex item separate from the other items within the container.

#### Order

By default, flex items are placed in order according to their appearance within the flow of code. It's possible to change the ordering of flex items using the `order` property. By default, each item has an order value of 0. To move an item to the ending place of a group of flex items, the order value must be a number higher than 0. And to move an item to the starting place of a group of flex items, the order value must be a number lower than 0.

```css
article {
  order: -1; /* moves to the start of a group */
}
```
