# Semantic HTML

**Supporting Files**

- [HTML Example](html-section.html)

**Resources**

- [Document and website structure](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)

**Contents**

- [HTML Semantic Elements](#basic-html)

- [Header](#header)

- [Nav](#nav)

- [Main](#main)

- [Article](#article)

- [Section](#section)

- [Div](#div)

- [Aside](#aside)

- [Footer](#footer)

---

## HTML Semantic Elements

A key principle of html development is to use the right element for the right job. HTML5 includes several elements that are specifically named to indicate what their functionality is.

## Header

Is used for introductory content including things like logos, titles, search boxes, and navigation. Headers that are the direct child of the `<body>` element it is the header for the entire web page. If found within an article or section it functions as the header for that specific article or section.

## Nav

Is used to provide a collection of links that can be the main navigation for a website or a group of links used elsewhere on the webpage such as table of contents or sub-section menus.

## Main

Is used to encompass the core or central content of the page and indicate the presence of the main content purpose of the webpage. Typically will only be used once on a web page and is nested directly in to the `<body>` element.

## Article

Is a self-contained content entity that could be redistributed on its own through syndication. An example of an article type of content include a magazine article, a forum post, a product card, or other such content.

## Section

Is a generic standalone section of the web page. It indicates a logical section of the web page and should include a heading `<h1> - <h6>` element.

## Div

Is a generic container for content without any semantic role. It is often used for grouping and applying styling with CSS. It should be used when no other semantic element makes logical sense to use.

## Aside

Is content that is tangentially related to the main content of the web page. Common usage include sidebars and call-out boxes.

## Footer

Is the footer for its nearest sectioning content element. Often includes information about the author, an address, copyright, or related links.
