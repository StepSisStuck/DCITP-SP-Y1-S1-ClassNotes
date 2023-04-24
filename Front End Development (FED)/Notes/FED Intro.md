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

- [Working with Character Sets and Special Character](#8)

- [Working with Inline Images](#9)

- [Line breaks](#10)

- [Working with blocks quotes and other elements](#11)

- [Working with Lists](#12)

- [Working with Hyperext links](#13)

- [Turning an Inline Image into a Hyperlink](#14)

- [Linking to a Location on the Same Page](#15)

- [Working with a Hypertext Attributes](#16)

- [Specifying the folder path](#17)





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
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<h3 id = "5"> Adding a heading to your document

<h4>

    The <h1> to <h6> tags are used to define HTML headings.

    <h1> defines the most important heading. <h6> defines the least important heading.

    The following example shows the <h1> to <h6> elements in action:

``` HTML
   <!DOCTYPE html>
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
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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

---------------------------
<h2 id="9"> Working with Inline Images


<h4>

- To support embedded content, imported from another source, HTML5 provides the `<img>` tag.

- These elements arr also known as self-closing elements, because they do allow any content between the opening and closing tags.

Example
```HTML
<img src="image.jpg" alt="My Image" width="100" height="100">
```

- Images are marked up using the `<img>` tag. The `<img>` tag has two required attributes: `src` and `alt`.

- The defualt width of an image is 300 pixels, and the default height is 150 pixels.

- Try and put images in a folder called images, and then reference them using the relative path. It's recommended to edit the image on CSS to change the size of the image instead of changing the size of the image itself.

-----------------------------
<h2 id="10"> Line breaks

<h4>

- The `<br>` tag is used to insert a single line break.

- The `<br>` tag is an empty element, which means that it has no end tag.

- The `<br>` tag is useful for writing addresses or poems.

- The `<br>` tag is also useful for creating single-line text effects, like this:

```HTML

<p>My favorite colors are:<br>

Red<br>

Blue<br>

Green</p>

```
---------------------
<h2 id="11"> Working with blocks quotes and other elements

<h4>

- The `<blockquote>` tag is used to define a section that is quoted from another source.

- The `<blockquote>` tag is used in conjunction with the `<q>` tag.

- The `<blockquote>` tag is used to define a section that is quoted from another source.

By default, most browsert renders quotes by indenting the quoted material to seprate from it from the website

Example 
```HTML
<blockquote cite="https://www.w3schools.com/html/">
  <p>HTML is the standard markup language for creating Web pages.</p>
</blockquote>
```

- The `<q>` tag defines a short quotation.

- The `<q>` tag is used in conjunction with the `<blockquote>` tag.
---------------------

<h2 id="12"> Working with Lists

<h4>

- HTML lists are used to display data in a list format.

- There are three types of HTML lists: ordered, unordered, and description.

## Here are the examples

- Ordered list

Example
```HTML
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

- Unordered list

Example
```HTML
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

- Description list

Example
```HTML
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd> 
</dl>
```

- Negative lists

Example
```HTML
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

- Nested lists

Example
```HTML
<ul>
  <li>Coffee</li>
  <li>Tea
    <ul>
      <li>Black tea</li>
      <li>Green tea</li>
    </ul>
  </li>
  <li>Milk</li>
</ul>
```

- Nested ordered lists

Example
```HTML
<ol>
    <li>item 1 
        <ol>
            <li value="10">item 1.1</li>
            <li value="20">item 1.2</li>
        </ol>

    </li>
    <li>item 2</li>
    <li>item 3</li>
</ol>
```

- Nevigated lists

Example
```HTML
<ol>
  <li><a href="https://www.w3schools.com/html/">HTML</a></li>
  <li><a href="https://www.w3schools.com/css/">CSS</a></li>
  <li><a href="https://www.w3schools.com/js/">JavaScript</a></li>

    <li><a href="lesson_01.html">Lesson 1</a></li>>
    <li><a href="lesson_02.html">Lesson 2</a></li>>
    <li><a href="lesson_03.html">Lesson 3</a></li>>
</ol>
```

- Nested description lists

Example
```HTML
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd> 
  <dt>Tea</dt>
  <dd>
    <dl>
      <dt>Black tea</dt>
      <dd>- black hot drink</dd>
      <dt>Green tea</dt>
      <dd>- green hot drink</dd>
    </dl>
  </dd>
</dl>
```

<h2 id="13"> Working with Hyperext links

<h4>

    Hyperlinks are used to link from one web page to another using a set of <a> tags.

Example

```HTML
Redirect to another website
<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>

Redirect to another page locally
<a href="lesson_01.html">Lesson 1</a>
```

A roll over effect can be added to the link by using the target attribute, they can change the color of the link when the mouse is over it, or when the link has been clicked.

Example
```HTML
<a href="https://www.w3schools.com/html/" target="_blank">Visit our HTML tutorial</a>
```

- The target attribute specifies where to open the linked document.

---------------------

<h2 id="14"> Turning an Inline Image into a Hyperlink

<h4>

- The `<a>` tag can be used to turn an image into a hyperlink.

Example
```HTML
<a href="https://www.w3schools.com/html/">
  <img src="image.jpg" alt="My Image" width="100" height="100">
</a>
```

---------------------

<h2 id="15"> Linking to a Location on the Same Page

<h4>

- You can link to a location on the same page by using the id attribute.

      You can identify the location on the page by using the id attribute. The id attribute specifies a unique id for an HTML element (the value must be unique within the HTML document).
      Using id="text" on an element, you can link to it by using a URL like this: "myPage.html#text".

Example
```HTML
<a href="Example_1">Go to text</a>
```
- ID must be unique within the HTML document.

- ID can only contain letters, numbers, underscores, and hyphens (no spaces).

- ID names are case-sensitive.

- The id attribute specifies a unique id for an HTML element.

- The id attribute is used to point to content within a page that can be linked to.

Early web browsers did not support the id attribute. However, nowadays most web browsers support the id attribute. 

---------------------

<h2 id="16">  Working with a Hypertext Attributes

<h4>

| Attribute | Description |
| --- | --- |
| `href` | Specifies the URL of the page the link goes to |
| `target` | Specifies where the linked document will open, such as in a new window or in the same frame |
| `download` | Specifies that the target will be downloaded when the user clicks on the hyperlink |
| `rel` | Specifies the relationship between the current document and the linked document |
| `id` | Specifies a unique identifier for an element |
| `class` | Specifies one or more class names for an element |
| `style` | Specifies inline CSS styles for an element |
| `title` | Specifies extra information about an element (displayed as a tooltip) |
| `alt` | Specifies an alternate text for an image |
| `src` | Specifies the URL of the image to be displayed |
| `width` | Specifies the width of an image |
| `height` | Specifies the height of an image |


- What is a parrent element?

   - A parent element is an element that contains other elements. For example, the `<body>` element is the parent element of the `<h1>` element.


<br>
  
  - What is a child element?

    - A child element is an element that is contained within another element. For example, the `<h1>` element is the child element of the `<body>` element.

<br>

-  What is a sibling element?

   - A sibling element is an element that is nested within the same parent element. For example, the `<h1>` and `<p>` elements are sibling elements.

<br>

- What is a target
   - A target is the location where a link will be opened. The target attribute specifies where to open the linked document.

Here's an example markdown table of common internet resources and their corresponding hyperlink format:

| Internet Resource | Hyperlink Format |
|-------------------|------------------|
| Fax               | fax:number        |
| HTTP              | http://url        |
| HTTPS             | https://url       |
| Tel               | tel:number        |
| SMS               | sms:number        |
| Email             | mailto:email      |

---------------------

<h2 id="17">  Specifying the folder path

<h4>

- The path attribute specifies the path to the folder that contains the files to be displayed.

- A root folder is a folder that contains all other folders and files in a file system or website.

- An absolute path is a path that starts from the root folder.

        example
        /folder1/folder2/folder3/file.html

- A relative path is a path that starts from the current folder by including the symbol ../

        example
        ../folder1/folder2/folder3/file.html

- The path attribute specifies the path to the folder that contains the files to be displayed.




---------------------

<h2 id="18">  Setting the Base Path 

<h4>

- The base element specifies the base URL/target for all relative URLs in a page.

- The base element is used to specify a base URL and/or target for all relative URLs in a page.

- This is like a "home base" for all relative URLs on a page, where you want to control the base URL and/or target to the current page.

Example
```HTML 
<base href="https://www.w3schools.com/images/" target="_blank">
```

---------------------

<h2 id="19">  Validating HTML

<h4>

- The HTML validator is a tool that checks the markup validity of Web documents in HTML, XHTML, SMIL, MathML, etc.

- The validator checks the document against the W3C's HTML and XHTML specifications.

- The validator is a free service provided by the World Wide Web Consortium (W3C).

Link: https://validator.w3.org/



---------------------

<h2 id="20"> How to create a HTML document template?

<h4>



```html
html:5
```
This creates the basic structure of an HTML document. The 5 indicates that this is HTML5.