# Multi-Column

The multi-column layout property provides the ability to split content into columns either by a column count or width. The browser will calculate how each column should be divided and how much space it will occupy in the case of `column-count` or how many column it will create in the case of `column-width`.

```css
.container-1 {
  column-count: 3;
}

.container-2 {
  column-width: 300px;
}
```

Columns can also be styled with the `column-gap` to add spacing between columns and `column-rule` to place a vertical rule between the columns.

```css
.container-2 {
  column-gap: 2rem;
  column-rule: 1px solid #ddd;
}
```

An element can be made to span the columns of a layout by adding the `column-span` property. The value should be set to `all` for the element to span all the columns of the layout.

```css
.container-1 h3 {
  column-span: all;
}
```

There are instances when a column layout will fragment content of an element between one column to the next. This can sometimes result in an undesired appearance, especially if there's visual styling applied to an element. To avoid this, the properties `break-inside` and `page-break-inside` can be used to tell the browser to prevent this behavior.

```css
.container-3 p {
  break-inside: avoid;
  page-break-inside: avoid;
}
```
