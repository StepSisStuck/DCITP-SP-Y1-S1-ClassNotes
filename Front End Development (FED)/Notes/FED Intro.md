# HTML

## [Document to refer](../School%20Notes/Tut01.pptx)
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Table of contents of this document
- [Creating the Head of the Document](#1)

- [List of Metadata to the document](#2)

- [Adding comments to your document](#3)

- [Adding a title to your document](#4)

- [Writing the Page Body](#5)

- [Adding a heading to your document](#6)

- [Using Grouping Elements](#7)




-----------------------------------------------

<h3 id= "1"> Creating the Document Head
<h4>
    The document head is the first thing that is read by the browser. It contains information about the document, such as the title, character set, and other metadata. The document head is contained within the <head> tag.

    The <head> tag is a container for metadata (data about data) and is placed between the <html> tag and the <body> tag. Metadata is not displayed. Metadata typically define the document title, character set, styles, scripts, and other meta information.

<h3 id ="2"> List of Metadata to the document
    The following is a list of metadata that can be added to the document head:

<h4>

    <title> - Specifies a title for the document

    <style> - Defines style information for a document

    <base> - Specifies the base URL/target for all relative URLs in a document

    <link> - Defines the relationship between a document and an external resource (most used to link to style sheets)

    <meta> - Defines metadata about an HTML document

    <script> - Defines a client-side script (JavaScript)

    <noscript> - Defines an alternate content for users that do not support client-side scripts

    <head> - Contains metadata/information for the document

<h3 id = "3"> Adding comments to your document

<h4>
 Comments are not displayed in the browser, but can be read by anyone viewing the source code. Comments are used to explain code, and to prevent execution when testing alternative code.
    

    Comments can be added to HTML with the < !-- and -- > tags:

    < !-- This is a comment -->

    This will be beneficial for people to pass on information to other developers, or to explain what the code is doing.

 Adding a title to your document

   
    The <title> tag is required in every HTML document. The <title> element specifies a title for the document.

    The title is shown in the browser's title bar or in the page's tab. The title should always be relevant to the content of the document.

    The <title> element can only contain text. It cannot contain tags or comments.

    The following example shows the <title> element in action:

``` HTML
    < !DOCTYPE html>
    <html>
    <head>
    <title>My First Web Page</title>
    </head>
    <body>

    <h1>My First Web Page</h1>
    <p>My First Paragraph</p>

    </body>
    </html>

```

<h3 id = "4"> Writing the Page Body

<h4>


    The body of the page is the part that is displayed in the browser. The body of the page is contained within the <body> tag.

    The <body> tag is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.

    The following example shows the <body> element in action:

``` HTML
 <!DOCTYPE html>
 <html>
 <head>
 <title>My First Web Page</title>
 </head>
 <body>

 <h1>My First Web Page</h1>
 <p>My First Paragraph</p>

 </body>
 </html>
 ```


<h3 id = "5"> Adding a heading to your document

<h4>

    The <h1> to <h6> tags are used to define HTML headings.

    <h1> defines the most important heading. <h6> defines the least important heading.

    The following example shows the <h1> to <h6> elements in action:

``` HTML
    < !DOCTYPE html>
    <html>
    <head>
    <title>My First Web Page</title>
    </head>
    <body>

    <h1>My First Web Page</h1>
    <h2>My First Heading</h2>
    <h3>My First Subheading</h3>
    <h4>My First Subheading</h4>
    <h5>My First Subheading</h5>
    <h6>My First Subheading</h6>

    </body>
    </html>

```

<h3 id = "6"> Using Grouping Elements

<h4>


Here is the list of grouping elements:
| Element | Description |
|---------|-------------|
| `<em>` | Used to emphasize text by italicizing it. |
| `<strong>` | Used to give text extra importance by making it bold. |
| `<a>` | Used to create hyperlinks to other pages or websites. |
| `<abbr>` | Used to create an abbreviation or acronym with a title attribute that expands the abbreviation. |
| `<cite>` | Used to indicate a citation or reference to a source. |
| `<code>` | Used to display code snippets or programming code. |
| `<del>` | Used to indicate deleted text, often used in strikethrough formatting. |
| `<ins>` | Used to indicate inserted text, often used in underlined formatting. |
| `<kbd>` | Used to indicate keyboard input or commands. |
| `<mark>` | Used to highlight or mark text with a color or other visual cue. |
| `<q>` | Used to create inline quotations. |
| `<sub>` | Used to create subscript text. |
| `<sup>` | Used to create superscript text. |



<h3 id = "7"> Block and Inline Elements
    
 <h4>
    
    HTML elements are either block-level or inline elements.

    Block-level elements are displayed as blocks. They start on a new line, and take up the whole width.

    Inline elements are displayed inline. They do not start on a new line, and only takes up as much width as necessary.

    The following example shows the difference between block-level and inline elements:

``` HTML
 < !DOCTYPE html>
 <html>
 <head>
 <title>My First Web Page</title>
 </head>
 <body>

 <h1>My First Web Page</h1>
 <p>My First Paragraph</p>

 </body>
 </html>
```

| Type | Example Elements |
|------|-----------------|
| Block-Level | `<div>`, `<p>`, `<h1>`-`<h6>`, `<ul>`, `<ol>`, `<li>`, `<table>`, `<form>`, `<blockquote>`, `<pre>`, `<hr>` |
| Inline-Level | `<span>`, `<a>`, `<img>`, `<em>`, `<strong>`, `<code>`, `<br>`, `<input>`, `<button>`, `<select>`, `<textarea>` |


<h3 id = "8"> Working with Character Sets and Special Character

<h4>

Character encoding is the process of converting characters into a format that can be stored or transmitted and reconstructed later. The most common encoding is UTF-8, which is used by HTML5.

Character entity references are used to display special characters in HTML. Character entity references are created using the syntax `&char;`

Where `char` is the character to be displayed.

| Character | Entity Name | Entity Number | Description |
|-----------|-------------|---------------|-------------|
| `"` | `&quot;` | `&#34;` | Double quotation mark |
| `&` | `&amp;` | `&#38;` | Ampersand |
| `<` | `&lt;` | `&#60;` | Less than sign |
| `>` | `&gt;` | `&#62;` | Greater than sign |
| ` ` | `&nbsp;` | `&#160;` | Non-breaking space |
| `©` | `&copy;` | `&#169;` | Copyright symbol |
| `®` | `&reg;` | `&#174;` | Registered trademark symbol |
| `™` | `&trade;` | `&#8482;` | Trademark symbol |
| `€` | `&euro;` | `&#8364;` | Euro currency symbol |
| `£` | `&pound;` | `&#163;` | Pound sterling currency symbol |
| `¥` | `&yen;` | `&#165;` | Yen currency symbol |
