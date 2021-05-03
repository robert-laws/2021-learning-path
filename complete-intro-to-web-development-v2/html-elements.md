# HTML Elements

**Supporting Files**

- [HTML Example](html-section.html)

**Resources**

- [HTML Elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

**Contents**

- [Base](#footer)

- [Images](#images)

- [Figure and Figcaption](#figure-and-figcapture)

- [Picture](#picture)

- [HTML Elements Table](#html-elements-table)

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
  <figcaption>A Scenic Mountain View in the Colorado Rockies</figcaption>
</figure>
```

## CSS Background Images

```css
div {
  background-image: url('images/mountain-view.jpg');
}
```

Should be used only for decorative purposes and not as page content. This is because background images using css have no semantic meaning and cannot have text equivalents.

## Picture

The picture element provides flexibility for displaying alternate versions of an image depending on the display or device being used. This is done by a browser selecting the best image from one or more `<source>` elements nested inside the `<picture>` element. An `<img>` element is also nested within the `<picture>` element to provide a fallback for browser that don't support the `<picture>` element. Common use cases for the `<picture>` element include situations where different images formats or sizes can be served depending on the device or browser capabilities.

```html
<picture>
  <source
    srcset="images/library-books-large-with-logo.webp"
    type="image/webp"
  />
  <img src="images/library-books.jpg" alt="library books" />
</picture>
```

```html
<picture>
  <source
    media="(min-width: 800px)"
    srcset="
      /images/sunset-360.jpg   360w,
      /images/sunset-720.jpg   720w,
      /images/sunset-1440.jpg 1440w
    "
    sizes="33.3vw"
  />
  <source srcset="/images/sunset-720.jpg 2x, /images/sunset-360.jpg 1x" />
  <img src="/images/sunset.jpg" alt="Picture of a Ha Long Bay sunset" />
</picture>
```

## HTML Elements Table

| Element    | Description                                      | Type    |
| ---------- | ------------------------------------------------ | ------- |
| a          | hyperlink                                        |         |
| abbr       | abbreviation                                     |         |
| address    | contact information                              |         |
| article    | syndicatable or reusable composition             | section |
| aside      | tangentially related content                     | section |
| base       | base URL                                         | meta    |
| blockquote | quoted from another source                       |         |
| body       | document body                                    | section |
| br         | line break                                       |         |
| button     | button control                                   |         |
| code       | computer code                                    |         |
| dd         | description definition                           |         |
| div        | generic flow container                           |         |
| dl         | description list                                 |         |
| dt         | description term                                 |         |
| em         | stress emphasis                                  |         |
| fieldset   | group of form controls                           | form    |
| figcaption | caption for figure                               |         |
| figure     | figure with optional caption                     |         |
| footer     | footer for a page or section                     | section |
| form       | user-submitted form                              | form    |
| h1-h6      | section heading                                  | heading |
| head       | container for document metadata                  | meta    |
| header     | introductory aid for a page or section           | section |
| hgroup     | heading group                                    | heading |
| hr         | thematic break                                   |         |
| html       | root element                                     | root    |
| i          | idiomatic text                                   |         |
| img        | image                                            |         |
| input      | form control                                     | form    |
| label      | caption for a form control                       | form    |
| legend     | caption for a fieldset                           | form    |
| li         | list item                                        |         |
| link       | link metadata                                    | meta    |
| main       | container for the main content of the document   | section |
| meta       | text metadata                                    | meta    |
| nav        | section with navigational links                  | section |
| noscript   | fallback content for script                      |         |
| ol         | ordered list                                     |         |
| option     | option in a list or combo box control            | form    |
| p          | paragraph                                        |         |
| picture    | image                                            |         |
| pre        | block of preformatted text                       |         |
| script     | embedded script                                  |         |
| section    | generic application section                      | section |
| select     | list box control                                 | form    |
| span       | generic phrasing container                       |         |
| strong     | importance                                       |         |
| style      | embedded styling information                     |         |
| table      | table                                            |         |
| tbody      | table body                                       |         |
| td         | table cell                                       |         |
| textarea   | multiline text control                           | form    |
| tfoot      | footer rows in a table                           |         |
| th         | table header cell                                |         |
| time       | machine-readable equivalent of date or time data |         |
| title      | document title                                   | meta    |
| tr         | table row                                        |         |
| ul         | unordered list                                   |         |
