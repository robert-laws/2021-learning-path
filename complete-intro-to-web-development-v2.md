# Complete Intro to Web Development, v2

**Description**: basic overview of html, css, and javascript.

**Type**: course

**Categories**

- html
- css
- javascript

**Tags**

- semantic html

**Supporting Files**

- [HTML](/complete-intro-to-web-development-v2/html-section.html)

**Contents**

[Basic HTML](#basic-html)

[HTML Elements](#html-elements)

[HTML Comments](#html-comments)

[HTML Attributes](#html-attributes)

[HTML Class Attributes](#html-class-attributes)

[HTML ID Attributes](#html-id-attributes)

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
