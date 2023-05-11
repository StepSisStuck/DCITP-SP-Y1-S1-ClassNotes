
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

/* OR */

.grid-container {
  display: inline-grid;
}
```


--------------------
### Working with Grid Rows and Columns

- To define the number and size of grid and columns, use the following properties: <br>
   - grid-template-columns <br>
   - grid-template-rows <br>

- Where width1, width2 etc is a spcace-seprated list that defines the width of the columns or tracks within the grid. <br>
   - The values can be a length, a percentage, or a fraction of the free space in the grid (using the fr unit). <br>
   - The values can be a combination of different units, like "25% 50% 25%". <br>
   - The number of values in the list defines the number of columns in the grid layout. <br>
   - If you provide less values than the number of columns, the browser will repeat the values until all columns are defined. <br>
   - If you provide more values than the number of columns, the browser will add the new columns at the end of the grid. <br>
   - The values can be named grid lines: <br>
      - The line names must be enclosed in square brackets. <br>
      - The line names must be separated by whitespace. <br>

Example: <br>
```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-columns: 33% 33% 33%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: [col1-start] 100px [col2-start] 100px [col3-start] 100px [col3-end];
}
```

- An **explict grid** is a grid that we have defined by setting the grid-template-columns and grid-template-rows properties. <br>
   - An **implicit grid** is a grid that we have not defined by setting the grid-template-columns and grid-template-rows properties. <br>
   - The implicit grid is created by the grid-auto-columns and grid-auto-rows properties. <br>
   - The implicit grid is created by the grid-auto-flow property. <br>

Example:
```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-auto-columns: 100px;
  grid-auto-rows: 100px;
}
```
An **implicit grid** is created by the grid-auto-columns and grid-auto-rows properties. <br>
- The grid-auto-columns property defines the width of the columns in the implicit grid. <br>
- The grid-auto-rows property defines the height of the rows in the implicit grid. <br>
- The grid-auto-flow property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid. <br>
   - The grid-auto-flow property has the following values: <br>
      - row: places items by filling each row in turn, adding new rows as necessary. <br>
      - column: places items by filling each column in turn, adding new columns as necessary. <br>
      - dense: attempts to fill in holes earlier in the grid if smaller items come up later. <br>

Example: <br>
```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-auto-columns: 100px;
  grid-auto-rows: 100px;
  grid-auto-flow: row dense;
}
```

--------------------
### Track Sizes with Fractional Units
- A grid track is a space between two adjacent grid lines. <br>
- A grid cell is the smallest unit on the grid that is created by the intersection of a row and a column. <br>
- A grid area is the total space surrounded by four grid lines. <br>
- A grid gap is the space between two adjacent rows or columns. <br>
- A grid row is a horizontal track of the grid. <br>

A fractional unit is a flexible length unit that is relative to the available space in the grid container. <br>
They are often combined with absolute lengths (like px or em) or other flexible lengths (like %) to create a flexible grid layout. <br>

<br>

Example: <br>

``` css
grid-template-columns: 250px 2fr 1fr;
```
The example show that: <br>
- The first column is 250px wide. <br>
- The second column is twice as wide as the third column. <br>
- The third column is one unit wide. <br>


--------------------

### Outlining a Grid

- The grid-column-gap property defines the size of the gap between the columns in a grid layout. <br>

- The grid-row-gap property defines the size of the gap between the rows in a grid layout. <br>

``` CSS
grid-column-gap: 50px;
grid-row-gap: 50px;
```

--------------------
### Placing items with Grid Lines
- Grid items are placed using grid lines. <br>
- To place the `article` element in the second column and the third row, we can use the following properties: <br>
   - grid-column-start <br>
   - grid-column-end <br>
   - grid-row-start <br>
   - grid-row-end <br>

``` CSS
article {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
}
```

- To extend a grid item so that it covers mutiple columns or rows, we can use the span keyword. <br>
   - The span keyword can be used with the grid-column-start, grid-column-end, grid-row-start, and grid-row-end properties. <br>

``` CSS
article {
  grid-column-start: 2;
  grid-column-end: span 2;
  grid-row-start: 3;
  grid-row-end: span 2;
}
```

----
### Placing Grid Items by Area
- In the grid areas approach to layout you identify grid areas and then assign grid items to the areas. <br>
- To define a grid area, use the grid-template-areas property. <br>
- To assign a grid item to a grid area, use the grid-area property. <br>

``` CSS
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "header header header"
                       "main main aside"
                       "footer footer footer";
}
```
Explain the code: <br>
- The grid-template-areas property defines the grid areas. <br>
- The grid-template-areas property defines 3 rows: <br>
   - The first row is named "header header header". <br>
   - The second row is named "main main aside". <br>
   - The third row is named "footer footer footer". <br>


- The grid-area property specifies where to place an item. <br>

    - The general syntax for the grid-area property is: <br>
    ``` CSS
    grid-area: name | row-start / column-start / row-end / column-end;
    ```
    - The name is the name of the grid area. <br>
    - The row-start is the starting position of the grid item along the vertical axis. <br>
    - The column-start is the starting position of the grid item along the horizontal axis. <br>


``` CSS
header {
  grid-area: header;
}
main {
  grid-area: main;
}
aside {
  grid-area: aside;
}
footer {
  grid-area: footer;
}
```
  
  





