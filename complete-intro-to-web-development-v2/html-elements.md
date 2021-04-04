# HTML Elements

**Supporting Files**

- [HTML Example](html-section.html)

**Resources**

- [HTML Elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

**Contents**

- [Base](#footer)

- [Figure and Figcaption](#figure-and-figcapture)

---

## Base

Specifies the base URL for all _relative_ URLs in a document. There is only one `<base>` element in the entire document. Two attributes are available for the `<base>` element.

- **href** - base URL to be used throughout the document for relative URLs.
- **target** - keyword that defines the default browsing to show the results of navigation from `<a>`, `<area>`, or `<form>` elements without an explicit target attribute.

```html
<base href="http://my-website.com" target="_blank" />
```

## Figure and Figcaption

The `<figure>` element is a containing element for things like images, diagrams, or code snippets. Figures can also make use of the optional figcaption to provide a caption for the figure.

```html
<figure>
  <img src="images/mountain-view.jpg" alt="Mountain View" />
  <figcaption>A Scenic Mountain View</figcaption>
</figure>
```
