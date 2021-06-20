# Web Foundations

**Description**: foundational concepts for web development.

**Type**: topical

**Categories**

- web

**Tags**

- internet
- tcp
- dns
- http
- cors
- web sockets

**Contents**

- [The Internet](#the-internet)

- [TCP / IP / DNS](#tcp--ip--dns)

- [HTTP](#http)

- [HTTP Status Codes](#http-status-codes)

- [URLs / Domains / Sub-Domains](#urls--domains--sub-domains)

- [CORS](#cors)

- [Web Sockets](#web-sockets)

- [Web Platform APIs](#web-platform-apis)

- [Programming Categories](#programming-categories)

---

## The Internet

The internet is a global system of connected devices, routers, and modems. Most connections to the internet are through an **ISP (Internet Service Provider)**. Individuals connect to the internet as clients through their computer/device and an ISP. Data is transferred in smaller units from a whole called packets that are reassembled and delivered. Routers help direct traffic on the internet to its proper destination.

[MDN - How the Web works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)

## TCP / IP / DNS

**TCP (Transmission Control Protocol)** is the protocol that allows devices to communicate with each other in a common way. Data is directed by TCP to a device on a network using the **IP (Internet Protocol)** address as an identifier. To enable users to enter domain names instead of IP addresses when connecting to websites, **DNS (Domain Name Servers)** are used to return IP addresses against domain names.

[An Introduction to DNS Terminology, Components, and Concepts](https://www.digitalocean.com/community/tutorials/an-introduction-to-dns-terminology-components-and-concepts)

## HTTP

A client communicates with a web server using **HTTP (HyperText Transfer Protocol)** to exchange data. Types of data that can be exchanged include **HTML (HyperText Markup Language)**, image, audio, video, CSS, JavaScript, and more.

## HTTP Status Codes

- 1XX - Informational responses
- 2XX - Successful responses
- 3XX - Redirects
- 4XX - Client errors
- 5XX - Server errors

[MDN Article - HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

## URLs / Domains / Sub-Domains

Web browsers use a **URL (Uniform Resource Locator)** to locate a resource over the internet on web servers. A URL is made up of several parts:

- Protocol - typically http or https
- Domain Name - includes top level domains, label 1 and label 2
  - (ex. http://www.google.com - www is the label 2, google is label 1, and .com is top level domain).
  - Domains can be sub-divided using label 2. (ex. http://email.google.com)
- Path (optional) - can be used to find specific files on a web server
- Parameters/Query - data can be sent to the web server using parameters added after the path following the `?` symbol.
  - (ex. http://www.google.com?name=bob).
- Fragment Identifier (optional, aka anchors) - tells the browser to adjust the view to a specific location within the HTML document.
  - (ex. http://www.place.com/#contact-info)

## CORS

Cross-site HTTP requests are requests for resources from a domain that is different from domain making the request, which is usually restricted. **CORS (Cross-Origin Resource Sharing)** allows this type of request to succeed.

[Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## Web Sockets

Protocol to support two-way communication channels over a single TCP connection.

## Web Platform APIs

There are many web (or browser) APIs available to developers. A well-known API is the DOM (Document Object Model).

[MDN List of Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)

## Programming Categories

- **Procedural** - organizes code in a top-down, linear progression through the code in a predetermined set of operations.

- **Object-Oriented** - organizes code into logical groupings of data and methods called classes

- **Functional** - organizes code into functions (pure computations vs. procedures) and produces values from the adaptation of the functions.

Some programming languages adopt only one of the categories, although many use more than one - referred to as multi-paradigm languages - and mix the types of programming categories together. JavaScript follows this multi-paradigm approach.
