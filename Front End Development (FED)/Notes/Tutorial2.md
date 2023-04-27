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


