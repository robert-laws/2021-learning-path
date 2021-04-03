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

- [Hierarchy and Semantics](#hierarchy-and-semantics)

- [Lists](#lists)

- [Strong and Emphasis](#strong-and-emphasis)

- [Links](#links)

- [Description Lists](#description-lists)

- [Quotations](#quotations)

- [Abbreviations](#abbreviations)

- [Contact Details](#contact-details)

- [Subscript and Superscript](#subscript-and-superscript)

- [Computer Code](#computer-code)

- [Dates and Times](#dates-and-times)

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

## Hierarchy and Semantics

HTML elements have an inherent hierarchy. `<h1> - <h6>` are for headings, with `<h1>` being more important than `<h2>`, and so on. `<p>` tags are for paragraph content and are separate from headings, but should be used in conjunction with headings to create meaningful content. Users on a webpage and search engines will give more importance to a properly used `<h1>` tag than a `<h2>` tag. Screen readers will also parse a webpage and create an outline of a webpage using the tags to provide quick information to a user. The tags also carry semantic value and should be used according to their semantic role.

## Lists

Lists come in two main types, unordered and ordered.

```html
<ul>
  <li>Apple</li>
  <li>Pear</li>
  <li>Banana</li>
</ul>

<ol>
  <li>Open the door</li>
  <li>Put away umbrella</li>
  <li>Sit down on chair</li>
</ol>
```

## Strong and Emphasis

The `<strong>` tag is used for text that has strong importance. The `<em>` tag is used for text that has emphasis. Both tags carry semantic meaning with them and change the text to be bold and italic respectively. When transforming text for purely stylistic purposes, CSS should be used instead.

## Links

Links are created using the `<a>` tag. It takes several attributes. The most important is `href`, which tells the link where to go. Another attribute that can be used is `title`, which can provide more information about the link - shown in a tooltip when the link is hovered.

```html
<p>
  When searching the web use
  <a href="http://www.google.com" title="The world's most popular search engine"
    >Google</a
  >
  to find the best results.
</p>
```

## Description Lists

Used when there are lists that include a term and its definition together. An example is a list of questions and their answers or a list of dictionary words and their definitions.

```html
<dl>
  <dt>Bird</dt>
  <dd>Animal that often has the capability of flight.</dd>
  <dt>Fish</dt>
  <dd>Animal with the capability of swimming in water.</dd>
</dl>
```

## Quotations

There are two common ways to create quotations either as a blockquote, which are used for longer quotes or an inline quotation, which is often shorter. Quotations often come with an author, which can be attributed using the `cite` tag.

```html
<!-- Blockquote for extended quotations -->
<blockquote cite="https://en.wikipedia.org/wiki/Lorem_ipsum">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
  </p>
</blockquote>

<!-- Inline Quote for short quotations -->
<p>
  The guide said,
  <q cite="https://en.wikipedia.org/wiki/Lorem_ipsum"
    >Lorem ipsum dolor sit amet</q
  >, which everyone heard clearly.
</p>

<p>
  Web developers use placeholder text to show how text will look.
  <q cite="https://en.wikipedia.org/wiki/Lorem_ipsum"
    >The best know is Lorem Ipsum</q
  >
  --
  <a href="https://en.wikipedia.org/wiki/Lorem_ipsum"><cite>Wikipedia</cite></a>
</p>
```

## Abbreviations

This `<abbr>` tag is used to wrap around an abbreviation or acronym.

```html
<p>
  Anchor tag should point to a
  <abbr title="Uniform Resource Locator">URL</abbr> for the link.
</p>
<p>
  The student asked <abbr title="Professor">Prof.</abbr> Green how to submit the
  assignment.
</p>
```

## Contact Details

Content that includes contact details - address, phone, email, etc. - should be wrapped with an `<address>` tag.

```html
<address>
  <p>
    Bob Cobb<br />
    123 Main St.<br />
    Boston, MA 01234<br />
    USA
  </p>
</address>

<address>
  <ul>
    <li>Email: bobcobb@net.com</li>
    <li>Tel: 412 236-2151</li>
  </ul>
</address>
```

## Subscript and Superscript

Are used occasionally when marking up dates, formulas, or mathematical equations.

```html
<p>The event is scheduled for the 24<sup>th</sup></p>
<p>The symbol for Oxygen is H<sub>2</sub>O</p>
```

## Computer Code

There are several useful tags available for displaying computer code within a webpage. `<pre>` and `<code>` are commonly used together. `<pre>` will tell the browser to retain the whitespace as it appears in the html code on the webpage. `<code>` indicates a generic piece of code.

Additionally, `<var>` is available for variable names. `<kbd>` is available for keyboard input or commands. And `<samp>` is available for output of a computer program.

```html
<pre>
  <code>
    let name = "bob";

    if(nameChanged) {
      name = "hal";
      return;
    }
  </code>
</pre>
```

## Dates and Time

The `<time>` element will provide information to the browser about dates and times in a machine-readable format, which then can be displayed in a user-friendly way on the browser.

```html
<time datetime="2021-04-12">12 April 2021</time>
<time datetime="14:45">14:45</time>
<time datetime="2021-04-15T19:30">7.30pm, 15 April 2021</time>
```
