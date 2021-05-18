# Web Fonts

**Supporting Files**

- [Web Fonts Example](web-fonts.html)

**Resources**

- [Web Fonts reference](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts)

**Contents**

- [Fundamental Concepts](#fundamental-concepts)

- [Font Shorthand](#font-shorthand)

- [Web Safe Fonts](#web-safe-fonts)

- [Using Web Fonts](#using-web-fonts)

---

## Fundamental Concepts

The way that fonts and styling are applied to text falls into two main categories. First, there's **Font Styles**, which determines things like sizing, font-family, if the text is bold or italic. The second category deals with **Text Layout**, which are properties that affect line spacing and alignment with the content box.

The properties that are most commonly applied to text to affect its styling including `color`, `font-family`, `font-size`, `font-style`, `font-weight`, `text-transform`, and `text-decoration`.

Other important properties are `text-shadow`, `text-align`, `line-height`, `letter-spacing`, and `word-spacing`.

```css
p {
  color: gray;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: normal;
  text-decoration: underline dashed green;
  text-transform: uppercase;
}
```

```css
/* text-decoration is shorthand for the following: */
text-decoration-line: underline;
text-decoration-style: dashed;
text-decoration-color: green;

text-decoration: underline dashed green;
```

This is not the end of the list - there are [many more CSS properties](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#other_properties_worth_looking_at) that can affect text in an HTML document.

## Font Shorthand

Many of the properties mentioned above can be used simultaneously with the `font` property. The properties are applied in order: `font-style`, `font-variant`, `font-weight`, `font-stretch`, `font-size`, `line-height`, and `font-family`.

```css
font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
```

In the example above, the font-size and line-height properties must include a '/' between them to be applied. If something else, like a space is used, the entire line is ignored.

## Web Safe Fonts

Since application of a font defined in a stylesheet is dependent upon the user's system having that font installed, developers need to anticipate cases when they are not. To address this, it's generally safe to make use of a set of fonts that are generally installed on all computer systems. They include:

- Arial
- Courier New (also Courier)
- Georgia
- Times New Roman (also Times)
- Trebuchet MS
- Verdana

Browsers also have a list of default fonts that can be applied based on the generic names. They include:

- serif
- sans-serif
- monospace
- cursive
- fantasy

Providing a font stack in a font-style property definition is good practice. The font stack is applied based on matches starting from the first name to the last. It's good practice to include a default font at the end of the stack as a fall back option. Additionally, fonts that include multiple words need to be enclosed within quotations.

```css
p {
  font-family: 'Trebuchet MS', Verdana, sans-serif;
}
```

## Using Web Fonts

There are two general ways to use web fonts. First, using a font file in a format like `woff` or `woff2` that can be saved with the HTML and CSS files and referenced in the CSS code using the `@font-face` rule.

```css
/* font definition */
@font-face {
  font-family: 'Crete Round Regular';
  src: url('fonts/creteround-regular.woff2') format('woff2'), url('fonts/creteround-regular.woff')
      format('woff');
  font-weight: normal;
  font-style: normal;
}

/* font referenced */
h1 {
  font-size: 4rem;
  font-family: 'Crete Round Italic';
}
```

The other way of using a web font is by referencing a font provided by an online service. An example of this type of font are the fonts available from [Google Fonts](https://fonts.google.com/), for example.

After selecting a font from the online service, the font can then be added via a `link` tag and then referenced using a `font-family` property.

```css
/* font definition */
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />

/* font referenced */
font-family: 'Lato', sans-serif;
```
