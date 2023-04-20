# HTML



## Table of contents of this document

## Creating the Document Head
    The document head is the first thing that is read by the browser. It contains information about the document, such as the title, character set, and other metadata. The document head is contained within the <head> tag.

    The <head> tag is a container for metadata (data about data) and is placed between the <html> tag and the <body> tag. Metadata is not displayed. Metadata typically define the document title, character set, styles, scripts, and other meta information.

## List of Metadata to the document
    The following is a list of metadata that can be added to the document head:

    <title> - Specifies a title for the document

    <style> - Defines style information for a document

    <base> - Specifies the base URL/target for all relative URLs in a document

    <link> - Defines the relationship between a document and an external resource (most used to link to style sheets)

    <meta> - Defines metadata about an HTML document

    <script> - Defines a client-side script (JavaScript)

    <noscript> - Defines an alternate content for users that do not support client-side scripts

    <head> - Contains metadata/information for the document

## Adding comments to youe document
    Comments are not displayed in the browser, but can be read by anyone viewing the source code. Comments are used to explain code, and to prevent execution when testing alternative code.

    Comments can be added to HTML with the < !-- and -- > tags:

    < !-- This is a comment -->

    This will be beneficial for people to pass on information to other developers, or to explain what the code is doing.

## Adding a title to your document

   
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

## Writing the Page Body

    The body of the page is the part that is displayed in the browser. The body of the page is contained within the <body> tag.

    The <body> tag is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.

    The following example shows the <body> element in action:

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


## Adding a heading to your document

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