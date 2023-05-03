# Tutorial 2


Topic listed below: <br>
[What is CSS?](#1)



<h2 id="1">
CSS?
<h4>

- CSS
   - CSS stands for Cascading Style Sheets
    - CSS describes how HTML elements are to be displayed on screen, paper, or in other media
    - CSS saves a lot of work. It can control the layout of multiple web pages all at once
    - External stylesheets are stored in CSS files
    - CSS is a language that describes the style of an HTML document
    - CSS describes how HTML elements should be displayed
    - This tutorial will teach you CSS from basic to advanced
    - CSS stands for Cascading Style Sheets

- Why use CSS?
    - CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.

    - CSS saves time − You can write CSS once and then reuse same sheet in multiple HTML pages. You can define a style for each HTML element and apply it to as many Web pages as you want.

    - Pages load faster − If you are using CSS, you do not need to write HTML tag attributes every time. Just write one CSS rule of a tag and apply it to all the occurrences of that tag. So less code means faster download times.
- Why do we need CSS?
    - CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.

    - CSS saves time − You can write CSS once and then reuse same sheet in multiple HTML pages. You can define a style for each HTML element and apply it to as many Web pages as you want.

- How to use CSS?
    We can use CSS in three ways:
    - Inline CSS
    - Internal CSS
    - External CSS

Example of CSS:
``` CSS
<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}

</style>
</head>
<body>

<h1>This is a heading</h1>

<p>This is a paragraph.</p>

</body>

</html>
```



----------------------------------------------


| Style Sheet Type | Description |
|------------------|-------------|
| External Style Sheets | These are style sheets that are saved as separate files with the `.css` extension and linked to HTML pages using the `<link>` tag. External style sheets are useful for maintaining consistent styles across multiple pages and can be cached by the browser for faster loading. |
| Internal Style Sheets | These are style sheets that are embedded within the HTML document using the `<style>` tag. Internal style sheets are useful for applying styles to a single page, and can override external styles. |
| Inline Styles | These are styles that are applied directly to an HTML element using the `style` attribute. Inline styles override both internal and external styles, but can be difficult to maintain and should be used sparingly. |
| User-defined Styles | These are styles that are defined by the user using their own preferences, such as font size, color, and background. User-defined styles are typically set in the user's web browser or operating system settings. |


-----------


<h2 id="2"> 
What is a HEX code?

<h4>

- A HEX code is a six-digit, three-byte hexadecimal number used to represent colors in HTML, CSS, SVG, and other computing applications. The bytes represent the red, green and blue components of the color. One byte represents a number in the range 00 to FF (in hexadecimal notation), or 0 to 255 in decimal notation. This represents the least (0) to the most (255) intensity of each of the color components. Thus web colors specify colors in the True Color (24-bit RGB) color scheme. The hex triplet is formed by concatenating three bytes in hexadecimal notation, in the following order:

   - Byte 1: red value (color type red)
   - Byte 2: green value (color type green)
   - Byte 3: blue value (color type blue)

- For example, consider the color where the red/green/blue values are decimal numbers: red=36, green=104, blue=160 (a grayish-blue color). The decimal numbers 36, 104 and 160 are equivalent to the hexadecimal numbers 24, 68 and A0 respectively. The hex triplet is obtained by concatenating the 6 hexadecimal digits together, 2468A0 in this example.

- The following example shows how the color sample shown above would be drawn in the three different color modes:

- The color can be represented by the following hexadecimal triplet: #2468A0.

![Alt text](Image%20File/1.png)

- The example above shows how the same color can be represented in different ways. The color is specified according to the RGB color scheme, which uses three values to specify each color: the amount of red, green, and blue in the color. The color can also be specified according to the HSL color scheme, which uses three values to specify each color: the hue, saturation, and lightness of the color. The color can also be specified according to the HSV color scheme, which uses three values to specify each color: the hue, saturation, and value of the color.


<h2 id="3">
Defining Semi Opaque Colors in CSS
<h4>

- Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency. The value of the opacity property ranges from 0.0 to 1.0, where 0.0 is completely transparent and 1.0 is completely opaque. The default value is 1.0.

They can use the following syntax to define semi-opaque colors in CSS:

``` CSS
/* Hexadecimal notation */
color: #rrggbbaa;

/* RGB functional notation */
color: rgba(red, green, blue, alpha);
```

- CSS defines the text and background color for each elementsd on a webpage

``` CSS
color: color;
background-color: color;
```

----------------------------------------------
<h2 id="4">
Exploring Selector Patterns
<h4>

- CSS selectors are patterns used to select the element(s) you want to style.

Example of CSS Selector:

``` HTML
<!DOCTYPE html>
  <html>
    <head>
      <style>
          p {
           text-align: center;
           color: red;
          }
        </style>
      </head>
<body>
```

``` CSS
/* Selects all <p> elements */
p {
  text-align: center;
  color: red;
}
```

- To directly style a rule to an element at a specific location, you can use the following syntax:

``` HTML
<!DOCTYPE html>
<html>
  <head>
    <style>
      #id {
        property: value;
      }
    </style>
  </head>
  <body>
    <element id="id"></element>
  </body>
</html>
```

``` CSS
/* Selects the element with the id "id" */
#id {
  property: value;
}
```

----------------------------------------------

<h2 id="5">
Contextual Selectors
<h4>

- What is Parent and Child Element?
   - The parent element is the element that contains the child element. The child element is the element that is contained within the parent element.
   - Example
``` HTML
<!DOCTYPE html>
<html>
  <head>
    <style>
      #parent {
        property: value;
      }
      #parent #child {
        property: value;
      }
    </style>
  </head>
  <body>
    <element id="parent">
      <element id="child"></element>
    </element>
  </body>

</html>
```
  
  ``` CSS
/* Selects the element with the id "parent" */
#parent {
  property: value;
}

/* Selects the element with the id "child" that is contained within the element with the id "parent" */

#parent #child {
  property: value;
}
```

- What is Sibling Element?
   - A sibling element is an element that is at the same level as another element. For example, the `<h1>` and `<p>` elements in the following HTML document are siblings:

``` HTML
<!DOCTYPE html>
<html>
  <head>
    <style>
      #sibling1 {
        property: value;
      }
      #sibling2 {
        property: value;
      }
    </style>
  </head>
  <body>
    <element id="sibling1"></element>
    <element id="sibling2"></element>
  </body>
</html>
```

``` CSS
/* Selects the element with the id "sibling1" */
#sibling1 {
  property: value;
}

/* Selects the element with the id "sibling2" */
#sibling2 {
  property: value;
}
```


# SOOOOOOO


1. Contextual selectors are used to select elements based on their location in the HTML document. They are created by combining two or more selectors separated by a space.

2. Context is based on the hierarchy of HTML elements. The parent element is the element that contains the child element. The child element is the element that is contained within the parent element.


// Create a table for contextual selectors

| Selector | Description |
|----------|-------------|
|* | Selects all elements |
|elem | Selects all elements with the tag name "elem" |
|elem1, elem2, elem3 | Selects all elements with the tag name "elem1", "elem2", or "elem3" |
| parent descendant | Selects all elements that are descendants of "parent" |
| parent > child | Selects all elements that are direct children of "parent" |
| elem1 + elem2 | Selects all elements that are immediately preceded by "elem1" |
| elem1 ~ elem2 | Selects all elements that are preceded by "elem1" |

----------------------------------------------

<h2 id="6">
Attribute Selectors
<h4>

- Selectors also can defined based on attribute. For example, the following selector selects all elements with the attribute "attribute":

`id`- Identifies an element in the document. It must be unique within the document.

Example on how to use this element:

``` HTML
<!DOCTYPE html>
<html>
  <head>
    <style>
      [attribute] {
        property: value;
      }
    </style>
  </head>
  <body>
    <element attribute="value"></element>
  </body>
</html>
```

``` CSS
/* Selects all elements with the attribute "attribute" */
[attribute] {
  property: value;
}
```
- `Class`
    - Defines a class name for an element. It must be unique within the document.
  
Example on how to use this element:
  
  ``` HTML
<!DOCTYPE html>
<html>
  <head>
    <style>
      .class {
        property: value;
      }
    </style>
  </head>
  <body>
    <element class="class"></element>
  </body>
</html>
```

``` CSS
/* Selects all elements with the class "class" */
.class {
  property: value;
}
```
Why do we need to use this?
- The class selector selects elements with a specific class attribute. To select elements with a specific class, write a period (.) character, followed by the name of the class.

| Selector | Description | Example | Selects
|----------|-------------|---------|---------
elem#id | Selects all elements with the id "id" | hi#intro | `<p id="id">`
#id | Selects the element with the id "id" | #intro | `<p id="id">`
elem.class | Selects all elements with the class "class" | p.intro | `<p class="class">`
.class | Selects all elements with the class "class" | .intro | `<p class="class">`
elem[att] | Selects all elements with the attribute "att" | a[href] | `<p title="title">`
elem[att=val] | Selects all elements with the attribute "att" and the value "val" | a[href="https://www.google.com"] | `<a href="https://www.google.com">`
elem[att~=val] | Selects all elements with the attribute "att" and a value that is a whitespace-separated list of words, one of which is exactly "val" | a[href~="https://www.google.com"] | `<a href="https://www.google.com">`
elem [att|=val] | Selects all elements with the attribute "att" and a hyphen-separated list of values beginning (from the left) with "val" | a[href|="https://www.google.com"] | `<a href="https://www.google.com">`
elem[att^=val] | Selects all elements with the attribute "att" and a value that begins exactly with the string "val" | a[href^="https://www.google.com"] | `<a href="https://www.google.com">`
elem[att$=val] | Selects all elements with the attribute "att" and a value that ends exactly with the string "val" | a[href$="https://www.google.com"] | `<a href="https://www.google.com">`
elem[att*=val] | Selects all elements with the attribute "att" and a value that contains at least one instance of the substring "val" | a[href*="https://www.google.com"] | `<a href="https://www.google.com">`
elem1~elem2 | Selects all elements with the tag name "elem2" that are preceded by an element with the tag name "elem1" | p~ul | `<p></p><ul></ul>`

----------------------------------------------

<h2 id="7">

Working with Fonts
<h4>

- Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing (leading), and letter-spacing (tracking), and adjusting the space between pairs of letters (kerning).


- Colour and font are one of few properties in CSS

## Choosing a Font
- Text characters are based on **fonts** that define the style and appearance of each character in the alphabet.
- The general structure of a font name is as follows:
    - `font-family: font-name;` 
    - where `fonts` is a comma-separated list of font names, and `font-name` is also known as a font stack.
  
## Choosing a Font
- Specific font - Identifies a specific font to use. If the font is not available, the browser will use the next font in the list
- Generic font - Identifies a generic font to use. If the generic font is not available, the browser will use the next font in the list
  - Supported generic fonts:
    - Serif
    - Sans-serif
    - Monospace
    - Cursive
    - Fantasy

![Alt text](Image%20File/2.png)


## Exploring Web Fonts
- Web fonts are fonts that are hosted on a server and can be used on a website. They are not installed on the user's computer.
- The format most universally supported by browsers is the Web Open Font Format (WOFF). It is a compressed version of the OpenType (OTF) format and is supported by all modern browsers.

Format|Description|Browser Support
------|-----------|---------------
Embedded OpenType (EOT)|A compressed version of the OpenType (OTF) format. It is supported by Internet Explorer 4+ | Internet Explorer (IE)
TrueType (TTF)|A font format developed by Apple and Microsoft. It is supported by all modern browsers | All modern browsers like Chrome, Firefox, Safari, Opera, and IE
Web Open Font Format (WOFF)|A compressed version of the OpenType (OTF) format. It is supported by all modern browsers | All modern browsers like Chrome, Firefox, Safari, Opera, and IE
Scalable Vector Graphics (SVG)|A vector graphics format. It is supported by all modern browsers | All modern browsers like Chrome, Firefox, Safari, Opera, and IE
Web Open Font Format 2 (WOFF2)|A compressed version of the OpenType (OTF) format. It is supported by all modern browsers | All modern browsers like Chrome, Firefox, Safari, Opera, and IE

----------------------------------------------
<--- Stoped at slide 39 --->

