# Tutorial 2


Topic listed below:



<h2 id="1">
CSS
<h4>

- What is CSS?
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
What is a HEX code?

- A HEX code is a six-digit, three-byte hexadecimal number used to represent colors in HTML, CSS, SVG, and other computing applications. The bytes represent the red, green and blue components of the color. One byte represents a number in the range 00 to FF (in hexadecimal notation), or 0 to 255 in decimal notation. This represents the least (0) to the most (255) intensity of each of the color components. Thus web colors specify colors in the True Color (24-bit RGB) color scheme. The hex triplet is formed by concatenating three bytes in hexadecimal notation, in the following order:

   - Byte 1: red value (color type red)
   - Byte 2: green value (color type green)
   - Byte 3: blue value (color type blue)

- For example, consider the color where the red/green/blue values are decimal numbers: red=36, green=104, blue=160 (a grayish-blue color). The decimal numbers 36, 104 and 160 are equivalent to the hexadecimal numbers 24, 68 and A0 respectively. The hex triplet is obtained by concatenating the 6 hexadecimal digits together, 2468A0 in this example.

- The following example shows how the color sample shown above would be drawn in the three different color modes:

- The color can be represented by the following hexadecimal triplet: #2468A0.

![Alt text](Image%20File/1.png)

- The example above shows how the same color can be represented in different ways. The color is specified according to the RGB color scheme, which uses three values to specify each color: the amount of red, green, and blue in the color. The color can also be specified according to the HSL color scheme, which uses three values to specify each color: the hue, saturation, and lightness of the color. The color can also be specified according to the HSV color scheme, which uses three values to specify each color: the hue, saturation, and value of the color.


