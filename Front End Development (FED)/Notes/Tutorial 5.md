# Bootstrap

## [Document to be used for the Bootstrap tutorial](../School%20Notes/Lesson05_02_Grid%20-%20Copy.pptx) 
<br>
<br>

Table of Contents:
- [Bootstrap](#bootstrap)
  - [Document to be used for the Bootstrap tutorial](#document-to-be-used-for-the-bootstrap-tutorial)
- [Introduction](#introduction)
    - [Why do we use Bootstrap?](#why-do-we-use-bootstrap)
    - [What is Bootstrap?](#what-is-bootstrap)
    - [What is responsive web design?](#what-is-responsive-web-design)
- [Getting Started](#getting-started)
- [Breakingpoints](#breakingpoints)
- [Containers](#containers)
- [Grid System](#grid-system)
  - [Grid Classes Example](#grid-classes-example)
- [Basic Structure if a Bootstrap Page](#basic-structure-if-a-bootstrap-page)
    - [2 Collumn Layout](#2-collumn-layout)
    - [3 Collumn Layout](#3-collumn-layout)
- [Responsive Columns](#responsive-columns)
- [Setting one column width](#setting-one-column-width)
- [Offset Classes](#offset-classes)
- [Reordering Columns](#reordering-columns)
- [Flex - Direction](#flex---direction)
    - [Blob Element](#blob-element)
- [Inline Text Elements](#inline-text-elements)
- [Text Decoration](#text-decoration)
  - [Colors](#colors)
  - [Background Colors](#background-colors)
- [Spaces - Margin and Padding](#spaces---margin-and-padding)


-------------------------

# Introduction

### Why do we use Bootstrap?
Since the introduction of responsive web design, a lot of developers have been using Bootstrap to create responsive websites. Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation and other interface components.

### What is Bootstrap?
Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation and other interface components.

### What is responsive web design?
Responsive web design (RWD) is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. Recent work also considers the viewer proximity as part of the viewing context as an extension for RWD. Content, design and performance are necessary across all devices to ensure usability and satisfaction.


-------------------------

# Getting Started

How to load bootstrap into your project:


```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">


</head>
<body>
    <h1>Hello World</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    
</body>
</html>
```

-------------------------

# Breakingpoints

Bootstrap has 5 breakpoints:

- Breakpoints are customizable widths determine how your responsive layout behaves across device or viewport sizes in the Bootstrap grid system.

- Use them to control when your layout is activated, not specific devices or resolutions.

| Class         | Breakpoint | Dimension |
| ------------- | ---------- | --------- |
| None          | Extra small devices | Phones (<576px) |
| .sm           | Small devices | Tablets (≥576px) |
| .md           | Medium devices | Desktops (≥768px) |
| .lg           | Large devices | Desktops (≥992px) |
| .xl           | Extra large devices | Desktops (≥1200px) |
| .xxl          | Extra extra large devices | Desktops (≥1400px) |


-------------------------

# Containers

- Bootstrap 5 also requires a containing element to wrap site contents
- There are two container classes to choose from:
    - The .container class provides a responsive fixed width container
    - The .container-fluid class provides a full width container, spanning the entire width of the viewport

```HTML
<div class="container">
  <h1>My First Bootstrap Page</h1>
  <p>This is some text.</p>
</div>

<div class="container-fluid">
  <h1>My First Bootstrap Page</h1>
  <p>This container takes up the whole screen.</p>

</div>
```

-------------------------

# Grid System

- Bootstrap's grid system is built with flexbox and allows up to 12 columns across the page.

- If you do not want to use all 12 columns individually, you can group the columns together to create wider columns:

```HTML
<div class="container">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>
```
![Alt text](Image%20File/3.png)

## Grid Classes Example

- The following example shows how the Bootstrap grid system works:

```HTML
<div class="container">
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-6">
      2 of 3 (wider)
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-5">
      2 of 3 (wider)
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>
```
![Alt text](Image%20File/4.png)

-------------------------

# Basic Structure if a Bootstrap Page

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  
  <!-- jQuery library -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  
  <!-- Latest compiled JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  
</head>
<body>
    
<div class="container">
  <h1>My First Bootstrap Page</h1>
  <p>This is some text.</p>
</div>

</body>
</html>
```
### 2 Collumn Layout

```HTML
<div class="container">
  <div class="row">
    <div class="col-md-6">Column 1</div>
    <div class="col-md-6">Column 2</div>
  </div>
</div>
```

### 3 Collumn Layout

```HTML
<div class="container">
  <div class="row">
    <div class="col-md-4">Column 1</div>
    <div class="col-md-4">Column 2</div>
    <div class="col-md-4">Column 3</div>
  </div>
</div>
```
-------------------------
# Responsive Columns

- The following example shows how the Bootstrap grid system works on different screen sizes:

```HTML
<div class="container">
  <h1>My First Bootstrap Page</h1>
  <p>This is some text.</p>
</div>

<div class="container">
  <div class="row">
    <div class="col-sm-4">.col-sm-4</div>
    <div class="col-sm-4">.col-sm-4</div>
    <div class="col-sm-4">.col-sm-4</div>
  </div>

    <div class="row">
        <div class="col-sm-3">.col-sm-3</div>
        <div class="col-sm-6">.col-sm-6</div>
        <div class="col-sm-3">.col-sm-3</div>

    </div>

</div>
```

-------------------------

# Setting one column width

- The following example shows how to set the width of one column:

```HTML
<div class="container">
  <div class="row">
    <div class="col-sm-8">.col-sm-8</div>
    <div class="col-sm-4">.col-sm-4</div>
  </div>
  <div class="row">
    <div class="col-sm-4">.col-sm-4</div>
    <div class="col-sm-8">.col-sm-8</div>
  </div>
</div>
```

-------------------------

# Offset Classes

- They can move columns to the right using .offset-md-* classes. For example, .offset-md-4 moves .col-md-4 over four columns:

```HTML
<div class="container">
  <div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
  </div>
  <div class="row">
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
  </div>
  <div class="row">
    <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
  </div>
</div>
```

# Reordering Columns

- Use `.order-*` classes for controlling the visual order of your content. These classes are responsive, so you can set the order by breakpoint (e.g., `.order-1.order-md-2`). Includes support for `1` through `12` across all five grid tiers.

```HTML
<div class="container">
  <div class="row">
    <div class="col">
      First, but unordered
    </div>
    <div class="col order-12">
      Second, but last
    </div>
    <div class="col order-1">
      Third, but first
    </div>
  </div>

    <div class="row">
        <div class="col order-last">
        First, but last
        </div>
        <div class="col">
        Second, but unordered
        </div>
        <div class="col order-first">
        Third, but first
        </div>
    </div>

</div>
```

-------------------------
# Flex - Direction

- The flex-direction property specifies the direction of the flexible items. <br> <br>
- Use the flex-direction property to specify the direction of the flexible items. It is used to specify how flex items are placed in the flex container, by setting the direction of the flex container’s main axis. This determines the direction that flex items are laid out in the flex container.

You can use the `flex.container` class to set a flex container. <br> <br>

Use `justify-content` to align flex items horizontally. <br> <br>

Bootstrap 

### Blob Element

- A blob element is a component of a graphical user interface (GUI) that serves as a visual indicator of some status or condition. The term is most often applied to graphical icons that represent programs, files, and directories. These icons are used extensively in the Microsoft Windows, Macintosh and Linux operating systems.

-------------------------
# Inline Text Elements

- You can use the mark tag to `<mark>highlight</mark>` text.
- Bootstrap provides an easy way to emphasize words, sentences, or other parts of a web page by adding the mark tag:

```HTML
<p>Use the mark tag to <mark>highlight</mark> text.</p>
```

-------------------------
# Text Decoration

- The Bootstrap .text-decoration-none class removes the default underline from a link:

```HTML
<p class="text-decoration-none">This is some text.</p>
```

## Colors

- Bootstrap provides text color classes, for light and dark text, and a contextual text color classes, to color the text with the contextual classes (like primary, success, etc.).

```HTML
<p class="text-primary">This is some text.</p>
<p class="text-success">This is another text.</p>
<p class="text-danger">This is another text.</p>
<p class="text-warning">This is another text.</p>
<p class="text-info">This is another text.</p>
<p class="text-light bg-dark">This is another text.</p>

<p class="text-muted">This is some text.</p>
<p class="text-white bg-dark">This is another text.</p>
<p class="text-dark">This is another text.</p>
<p class="text-body">This is another text.</p>
<p class="text-black-50">This is another text.</p>
<p class="text-white-50 bg-dark">This is another text.</p>
```
## Background Colors

- Bootstrap provides contextual classes that can be used to color the background of a paragraph.
  
```HTML
<p class="bg-primary text-white">This is some text.</p>
<p class="bg-success text-white">This is another text.</p>
<p class="bg-danger text-white">This is another text.</p>
<p class="bg-warning text-white">This is another text.</p>
<p class="bg-info text-white">This is another text.</p>
<p class="bg-light text-dark">This is another text.</p>
<p class="bg-dark text-white">This is another text.</p>
<p class="bg-body text-white">This is another text.</p>
<p class="bg-white text-dark">This is another text.</p>
```

-------------------------

# Spaces - Margin and Padding

- Bootstrap provides several classes for styling HTML elements with margin and padding.

- The classes are named using the format `{property}{sides}-{size}` for `xs` and `{property}{sides}-{breakpoint}-{size}` for `sm, md, lg, and xl`.

Where property is one of:

- `m` - for classes that set margin
- `p` - for classes that set padding

Where sides is one of:

- `t` - for classes that set margin-top or padding-top
- `b` - for classes that set margin-bottom or padding-bottom
- `l` - for classes that set margin-left or padding-left
- `r` - for classes that set margin-right or padding-right
- `x` - for classes that set both *-left and *-right

Where size is one of:

- `0` - for classes that eliminate the margin or padding by setting it to 0

- `1` - (by default) for classes that set the margin or padding to `$spacer * .25`

