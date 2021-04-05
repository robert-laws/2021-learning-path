# HTML Elements

**Supporting Files**

- [HTML Example](html-section.html)

**Resources**

- [HTML Elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

**Contents**

- [Base](#footer)

- [Images](#images)

- [Figure and Figcaption](#figure-and-figcapture)

---

## Base

Specifies the base URL for all _relative_ URLs in a document. There is only one `<base>` element in the entire document. Two attributes are available for the `<base>` element.

- **href** - base URL to be used throughout the document for relative URLs.
- **target** - keyword that defines the default browsing to show the results of navigation from `<a>`, `<area>`, or `<form>` elements without an explicit target attribute.

```html
<base href="http://my-website.com" target="_blank" />
```

## Images

Basic images in html are added to a web page using the `<img>` element. This element takes at least one attribute, a `src` value. Another useful attribute is `alt`, which is used for:

- providing descriptive text for screen readers and browsers that don't load images
- showing text when the image link is broken for debugging
- for search engine usage

### Alt Text

Some best practices for using alt text in images are:

- if the image is used for decorative purposes only, add the image as a background image using CSS
- if the text needed to describe the image is lengthy, consider including it in the main body of the text and use a shorter (not repetitive) alt text
- images linked using an `<a>` tag still require a accessible linking text or alt text
- avoid putting text into images and if it's unavoidable, provide the content within the alt text

### Width and Height

using width and height attributes in an image will provide a width and height to the element on the web page in cases where the image file does not load immediately. Other changes to the image width and height should be handled with CSS.

### Title

the title attribute will provide a tooltip with text content for users hovering their mouse over the image. The recommendation is to avoid using this feature and include content in a title attribute in the main body text of the web page.

## Figure and Figcaption

The `<figure>` element is a containing element for things like images, diagrams, or code snippets. Figures can also make use of the optional figcaption to provide a caption for the figure.

```html
<figure>
  <img
    src="images/mountain-view.jpg"
    alt="A peaceful mountain view in the Swiss country"
  />
  <figcaption>A Scenic Mountain View</figcaption>
</figure>
```
