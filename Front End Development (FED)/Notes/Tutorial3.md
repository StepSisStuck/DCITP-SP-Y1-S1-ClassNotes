
**hello**

Table of Contents: <br>
[Overview](#overview-of-grid-layout) <br>
[CSS Grid Layout](#css-grid-layout) <Br>


--------------------
### Overview of Grid Layout 


- In a Grid Layout, the children of a grid container can be positioned into arbitrary slots in a predefined flexible or fixed-size layout grid.

- Grid Layout introduces a two-dimensional grid system to CSS. Grids can be used to lay out major page areas or small user interface elements. This article introduces the CSS Grid Layout and the new terminology that is part of the CSS Grid Layout Level 1 specification.

--------------------
### CSS Grid Layout

- CSS Grid Layout excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer, between parts of a control built from HTML primitives. <br>
- CSS grid model numbers the gridlines in the **horizontal** dimension and in the **vertical** dimension, starting with 1 as the first gridline. <br>
    - Start from the bottom left corner of the grid container. <br>
    - The horizontal lines are numbered from bottom to top. <br>
    - The vertical lines are numbered from left to right. <br>
    - The grid lines are the lines between columns and rows. <br>
<br>
- The grid items in a grid container are laid out following these rules: <br>
    - The grid container is a block-level element. <br>
    - The grid items are block-level elements. <br>
    - The grid items are direct children of the grid container. <br>
  <br>
- The grid-template-rows and grid-template-columns properties define the number of rows and columns in the grid. <br>

- The adventage of using both postive and negative number is that we can use the negative number to count from the right side of the grid container. <br>
  - Can always reference both the first gridline (1) and the last one (-1), even if the number of gridlines changes. <br>

NOTE: <br>
The grid numbering (especially the -ve) get more complicated when we have more than one grid container. They have some spanning invloved as new "row" and "column" are created. <br>

- Webpage elements will be placed within the intersection of these rows and columns. <br>

- An element can be in: 
   - A single cell. <br>
   - Multiple cells. <br>

--------------------
### Creatig a CSS Grid Layout

- To create a grid container, we must set the display property to grid or inline-grid. <br>
   - We need to identify the grid container using the following display values: <br>
      - grid: generates a block-level grid. <br>
      - inline-grid: generates an inline-level grid. <br>

Example: <br>
```css
.grid-container {
  display: grid;
}
```



