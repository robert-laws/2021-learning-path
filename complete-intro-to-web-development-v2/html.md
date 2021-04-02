# HTML

**Supporting Files**

- [HTML Example](html-section.html)

**Resources**

- [HTML Element List from MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

**Contents**

- [Basic HTML](#basic-html)

- [HTML Elements](#html-elements)

- [HTML Comments](#html-comments)

- [HTML Attributes](#html-attributes)

- [HTML Class Attributes](#html-class-attributes)

- [HTML ID Attributes](#html-id-attributes)

- [Semantic Naming](#semantic-naming)

- [Meta HTML](#meta-html)

- [Block vs Inline](#block-vs-inline)

- [Attributes in HTML Elements](#attributes-in-html-elements)

- [Head Section](#head-section)

---

## Basic HTML

HTML tags have both visual and semantic meaning. For example, an `h1` tag indicates a heading of level 1. This indicates that the text has a high level of importance and is typically used as a headline in an HTML document.

## HTML Elements

There's a wide range of elements available and for many different uses. A few examples include:

`h1, h2, h3, h4, h5, h6` - are headings that also impart semantic value based on importance from 1 to 6.

`p, span` - are used to contain text

`div` - is a sectioning tag

`form, input, textarea, select, option` - are tags related to forms and form controls

A complete list is available from MDN - [HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

## HTML Comments

Comments are non-visual code that provide extra information within the code

```html
<!--
  This is a comment in HTML  
-->
```

## HTML Attributes

Attributes are additional pieces of information that provides more information for rendering the tag. For an input tag, the attribute `type` is used to indicate what type of input is being used.

```html
<input type="checkbox" checked />
```

## HTML Class Attributes

Class attributes can be added to any tag. Adds semantic information to the tag, which can be utilized by technologies like CSS and JavaScript.

```html
<h2 class="blog-post-subtitle">The blog post with interesting facts</h2>
```

## HTML ID Attributes

ID can be used only once per page. They are used to provide unique semantic information to a tag.

```html
<h3 id="stadium-project-title">Stadium Build Project</h3>
```

## Semantic Naming

Choose names for what an item _is_ versus what it looks like. Selecting good names helps improve understandability of the code and makes future refactoring easier.

```html
<div>
  <h3 class="blog-post-title">Blog Post Title</h3>
  <p class="blog-post-text">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
    reprehenderit!
  </p>
</div>
```

## Meta HTML

Base code required to have a valid HTML document. Begin with doctype declaration, html tag, head and body sections.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>A New Webpage</title>
  </head>
  <body>
    <h1>The Webpage Title</h1>
    <!-- useful comment for this page -->
  </body>
</html>
```

**script** tag is used for javascript content/files or to import files.

**style** tag is used to directly add CSS to a HTML document.

**link** tag is used to import CSS files.

## Block vs Inline

A block level element will occupy a new line after the content proceeding it and any content following it will begin on a new line.

An inline level element will not cause an element to appear on a new line and appear within block level elements. Examples include `<a>`, `<strong>`, or `<em>`.

## Attributes in HTML Elements

Depending on the element, a number of different attributes can be used. For example, in the `<a>` element, an `href` and `title` attribute can be used

```html
<a href="http://www.google.com" title="Google Search">Google</a>
```

Some element attributes expect a boolean value of `true` or `false`. In this case, simply typing the name of the attribute without any value is equivalent to a true value.

```html
<input type="text" disabled />
```

## Head Section

The `<head>` elements contain all the metadata for the webpage. This includes things like the encoding, author, title, linked files, and more. `<meta>` tags often include `name` and `content` attributes.

A lot of other information can go into the head section, including metadata used by specific websites like Facebook and Twitter. Facebook makes use of the [Open Graph Data](http://ogp.me/) and [Twitter](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards) uses specific wording for it's meta tags.

The `<link>` tag can be used to import external images or files into a webpage.

The `<script>` and `<style>` tags can be used to add both JavaScript and CSS directly into the webpage or in the case of JavaScript, reference an external file. The defer boolean attribute tells the webpage to load the HTML and JavaScript at the same time, but wait to run until the HTML content is loaded on the page first.

```html
<head>
  <meta charset="utf-8" />
  <meta name="author" content="Bob Cobb" />
  <meta property="og:title" content="My Interesting Website" />
  <meta name="twitter:title" content="My Interesting Website" />
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
  <link rel="stylesheet" href="site-styles.css" />
  <script src="site-scripts.js" defer></script>
</head>
```
