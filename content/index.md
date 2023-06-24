# Basil CSS

Basil CSS is a lightweight and highly customizable UI framework made with the goal of bridging the gap between developers who like using UI frameworks and those who prefer styling apps without them. Basil follows mobile first design principles so it's fully responsive for both small and big devices.

## # What is Basil CSS

By using Basil you speed up your development by only sprinkling the bare minimum of basil on your spaghetti code. Basil only uses CSS grids, flexbox, fontsize, margin, padding and media queries. That leaves you to style the rest of the app with whatever CSS method you want.

If a product is build originally with Basil, the maintainer can jump into the prjoect and change it simply by adding more CSS classes the way he likes best, thus embracing the complexity and chatotic nature of maintaning CSS.

The framework provides an easy-to-use grid system and various utility classes that aim to speed up your development process while maintaining a high degree of flexibility.

[If you wish to help out with the development of the framework, feel free to make a pull request in the repo](https://github.com/Basilcss)

# # Installation

Installation is simple. If you are running a Javascript application, follow these steps:

1. In your terminal run `yarn add basilcss` or `npm i basilcss`
2. Go to your root file and add this line above your global CSS file `import 'basilcss/basil.css'`
3. Start styling your HTML template.

# # Global Styles

Basil resets all default margins and padding and sets the box-sizing property to border-box for every element on the page.

```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

# # CSS Variables

Basil uses CSS variables for consistency in design. You can use these variables throughout your project or change their values in your CSS file.

```
:root {
  /* size */
  --sm: 0.5rem;
  --md: 1rem;
  --lg: 2rem;
  --xl: 3rem;

  /* colors */
  --primary: #333;
  --secondary: #fff;
  --accent: #187F10
}
```

# # Typography

Links (<a> elements) are styled with the accent color. Hover effect changes the link color to the secondary color.

```
a {
  color: var(--accent);
}

a:hover {
  color: var(--secondary);
}

```

List styles for both unordered and ordered lists are set to none, and margins and padding are removed.

```
ul, ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

```

# # Width and Height

Basil provides classes to help you quickly set the width and height of elements, both as a percentage of their parent and as a percentage of the viewport height (vh). There are classes for 10% increments as well as for 100%.

```
/* example */
.w-10 {
  width: 10%;
}

.vh-10 {
  height: 10vh;
}

```

The same classes are also provided for larger screens (viewport width of 764px or greater), prefixed with big:.

```
/* example */
@media (min-width: 764px) {
  .big:w-10 {
    width: 10%;
  }

  .big:vh-10 {
    height: 10vh;
  }
}
```

# # Grid Layout

Basil includes a grid system using CSS grid layout. The .row class creates a grid container with 8 equal columns.

```
.row {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: var(--sm);
}
```

Column classes are provided to determine the number of columns an element should span. They range from .col-1 (span 1 column) to .col-8 (span all 8 columns).

```
/* example */
.col-1 {
  grid-column: span 1;
}
```

The same classes are also provided for larger screens (viewport width of 764px or greater), prefixed with big:.

```
/* example */
@media (min-width: 764px) {
  .big:col-1 {
    grid-column: span 1;
  }
}
```

# # Flexbox

Basil includes a series of utility classes for flexbox layout. These classes are named in a predictable manner:

Start with .flex-row or .flex-col for row or column direction.
Append -center, -around, or -between for justify-content.
Append -center again for align-items.

## # Columns

- `.col-1` to `.col-8` will each span their number of columns. For example, `.col-1` will span 1 column, and `.col-8` will span 8 columns.
- At a minimum screen width of 764px, the `.big:col-1` to `.big:col-8` classes behave similarly, allowing you to adjust your layout for larger screens.

## # Rows

- The `.row` class should be used to define a horizontal row. It utilizes CSS grid layout's `grid-template-columns` to automatically divide the row into 8 equal parts. The grid gap (spacing between cells) is defined using the small size CSS variable (`--sm`).
- For larger screens (minimum width of 764px), use `.big:row` to define a row. The functionality is the same as the `.row` class.

# # Utility Classes

## # Width and Height

Basil provides classes for controlling the width and height of elements:

- `.w-10` to `.w-90` and `.full-width` will set the width of an element to the specified percentage of its parent. For larger screens (minimum width of 764px), use `.big:w-10` to `.big:w-90` and `.big:full-width`.
- `.h-10` to `.h-90` and `.full-height` will set the height of an element to the specified percentage of its parent. For larger screens (minimum width of 764px), use `.big:h-10` to `.big:h-90` and `.big:full-height`.
- `.vh-10` to `.vh-100` will set the height of an element to the specified percentage of the viewport height. For larger screens (minimum width of 764px), use `.big:vh-10` to `.big:vh-100`.

## # Flex Display

Basil includes several utility classes for easily applying `display: flex;` and its related properties:

- `.flex-row` and `.flex-col` change the flex direction.
- Additional classes are provided for controlling alignment along both axes: `.flex-row-center`, `.flex-col-center`, `.flex-row-between`, `.flex-col-between`, etc.
- For larger screens (minimum width of 764px), the same functionality is available with the `.big:` prefix.

## # Padding and Margin

The `.p-0` to `.p-4` and `.m-0` to `.m-4` classes apply padding and margin, respectively, with sizes ranging from 0 (none) to extra-large (as defined by the `--xl` CSS variable). Similar classes are provided for padding and margin on individual sides of an element, like `....

- **.big:flex-row-between-center**: Like flex-row-between-center but only applied when viewport width is 764px or more.

**Space Evenly**

- **.flex-col-around**: Makes a flex container with column direction and space evenly distributed along the main axis.
- **.flex-col-between**: Makes a flex container with column direction and space between items along the main axis.
- **.flex-col-around-center**: Makes a flex container with column direction, space evenly distributed along the main axis and centers the items along the cross axis.
- **.flex-col-between-center**: Makes a flex container with column direction, space between items along the main axis and centers the items along the cross axis.

For screens 764px or larger, use the `.big:` prefix.

**Buttons**

- **.btn-primary**: A button with a background color of the secondary variable, padding of 10px 20px, a 2px solid border of the accent color, a cursor pointer, font weight of 600, and a transition effect of 0.3s ease-in-out. On hover, the background color changes to the accent color and the text color changes to the secondary color.

**Margins and Paddings**
The framework uses scale from 0 to 4 for both margin (m) and padding (p) classes with top (t), right (r), bottom (b), left (l) modifiers. Each step in the scale corresponds to the size variables --sm, --md, --lg, --xl. For example,

- **.m-1**: Applies a margin of 0.5rem to all sides.
- **.p-3**: Applies a padding of 2rem to all sides.
- **.m-t-2**: Applies a margin-top of 1rem.

<a href="/#installation">Happy hacking!</a>
