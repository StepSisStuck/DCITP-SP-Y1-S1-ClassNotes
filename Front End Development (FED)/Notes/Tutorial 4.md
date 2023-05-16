# FED Tutorial 4
[Practical for it](../Practice/Tutorial%204)
- [FED Tutorial 4](#fed-tutorial-4)
- [Creating Figure Boxes](#creating-figure-boxes)
  - [Example HTML CODE](#example-html-code)
  - [Example CSS CODE](#example-css-code)
- [Exploeing background Styles](#exploeing-background-styles)
- [Tiling Background Images](#tiling-background-images)

Table of Contents:


-------------------------

# Creating Figure Boxes

The `figure` element is used to contain any content that is referenced from the main flow of an article, but that could still stand alone if separated from the article. This includes charts, graphs, illustrations, and code examples.

The `figure` element should be used in conjunction with the `figcaption` element to mark up the caption for the figure.
## Example HTML CODE
```html
<figure>
  <img src="images/figure.png" alt="A figure">
  <figcaption>Figure 1: A figure</figcaption>
</figure>
```
## Example CSS CODE
```CSS
figure {
  border: 1px solid #ccc;
  padding: 5px;
  margin: 5px;
}
```

-------------------------
# Exploeing background Styles

The `background` property is used to set the background color of an element. The value of the property can be a color name, a hex value, or an RGB value.

``` CSS
body {
  background: #fff;
}
```

-------------------------
# Tiling Background Images

- Tilling is the process of filling a background image with a pattern of repeated images.
- The type of tiling can be specified using the `background-repeat` property.

``` CSS
body {
  background: url(images/bg.png);
  background-repeat: repeat-x;
}
```

The `background-repeat` property can take one of the following values:

- `repeat` - The background image is repeated both horizontally and vertically. This is the default value.
  
- `repeat-x` - The background image is repeated horizontally only.

- `repeat-y` - The background image is repeated vertically only.

- `no-repeat` - The background image is not repeated.

-------------------------


