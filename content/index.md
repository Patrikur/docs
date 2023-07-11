# Basil.css

Basil is a lightweight and highly customizable UI framework made with the goal of bridging the gap between developers who like using UI frameworks and those who prefer styling apps without them. Basil follows mobile first design principles so it's fully responsive for both small and big devices.

## What is Basil.css

By using Basil you speed up your development by only sprinkling the bare minimum of basil on your spaghetti code. Basil only uses CSS grids, flexbox, fontsize, height, width, margin, padding and media queries. That leaves you to style the rest of the app with whatever CSS method you want.

If a product is build originally with Basil, the maintainer can jump into the prjoect and change it simply by adding more CSS classes the way he likes best, thus embracing the complexity and chatotic nature of maintaning CSS.

The framework provides an easy-to-use grid system and various utility classes that aim to speed up your development process while maintaining a high degree of flexibility.

[If you wish to help out with the development of the framework, feel free to make a pull request in the repo](https://github.com/Basilcss)

# Installation

Installation is simple. If you are running a Javascript application, follow these steps:

1. In your terminal run `yarn add basilcss` or `npm i basilcss`
2. Go to your root file and add this line above your global CSS file `import 'basilcss'`
3. Start styling your HTML template.

## See Examples with different tech stacks

<div class="flex-row">
<a href="https://github.com/Basilcss/vuejs-basilcss-template">
<svg fill="#acbac7" width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path d="M24.306 4.019h-4.806l-3.5 5.537-3-5.537h-11l14 23.981 14-23.981zM5.481 6.019h3.363l7.156 12.387 7.15-12.387h3.363l-10.512 18.012z"/>
</svg>
</a>
<a href="https://github.com/Basilcss/sveltejs-basilcss-template">
<svg fill="#acbac7" width="800px" height="800px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Svelte icon</title><path d="M20.68 3.17a7.3 7.3 0 0 0-9.8-2.1l-5.6 3.56a6.36 6.36 0 0 0-2.89 4.3 6.66 6.66 0 0 0 .67 4.33 6.14 6.14 0 0 0-.95 2.4 6.84 6.84 0 0 0 1.16 5.16 7.33 7.33 0 0 0 9.8 2.12l5.6-3.56a6.36 6.36 0 0 0 2.88-4.3 6.66 6.66 0 0 0-.67-4.32 6.79 6.79 0 0 0-.2-7.59zM10.32 21.13a4.43 4.43 0 0 1-4.76-1.77c-.65-.9-.89-2.01-.7-3.11l.11-.53.1-.33.3.2c.66.5 1.4.86 2.19 1.1l.2.07-.02.2c-.02.28.06.59.22.83.33.47.9.7 1.45.55.12-.04.24-.08.34-.14l5.58-3.56c.28-.18.46-.45.53-.77.06-.33-.02-.67-.2-.94-.33-.46-.9-.67-1.45-.53-.12.04-.25.09-.35.15l-2.11 1.34a4.43 4.43 0 0 1-5.9-1.28 4.1 4.1 0 0 1-.7-3.11A3.85 3.85 0 0 1 6.92 6.9l5.57-3.56c.35-.22.73-.38 1.14-.5 1.8-.47 3.7.24 4.76 1.76a4.12 4.12 0 0 1 .57 3.64l-.1.33-.29-.2a7.42 7.42 0 0 0-2.2-1.1l-.2-.06.02-.2c.02-.29-.06-.6-.22-.84-.33-.47-.9-.67-1.45-.53-.12.04-.24.08-.34.14L8.59 9.37c-.28.19-.46.45-.52.78-.06.32.02.67.2.93.32.47.9.67 1.44.53.13-.04.25-.08.35-.14l2.13-1.36c.35-.23.74-.4 1.14-.51 1.81-.47 3.7.24 4.76 1.77.65.9.9 2.01.72 3.1a3.85 3.85 0 0 1-1.75 2.6l-5.58 3.55a4.9 4.9 0 0 1-1.16.51z"/></svg></a>
<a href="https://github.com/Basilcss/reactjs-basilcss-template">
<svg fill="#acbac7" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>react</title>
<path d="M14.313 22.211c0.55 0.025 1.112 0.043 1.681 0.043 0.575 0 1.143-0.012 1.7-0.043-0.557 0.72-1.107 1.357-1.689 1.964l0.008-0.008c-0.579-0.6-1.135-1.238-1.659-1.902l-0.041-0.054zM8.615 21.411c1.083 0.275 2.404 0.509 3.752 0.653l0.131 0.011c0.825 1.133 1.659 2.13 2.554 3.068l-0.011-0.012c-1.311 1.463-3.080 2.491-5.081 2.86l-0.055 0.008c-0.004 0-0.008 0-0.012 0-0.248 0-0.482-0.061-0.687-0.169l0.008 0.004c-0.832-0.475-1.193-2.292-0.912-4.627 0.067-0.575 0.177-1.18 0.312-1.797zM23.398 21.398c0.118 0.474 0.229 1.078 0.308 1.692l0.009 0.086c0.287 2.334-0.067 4.149-0.892 4.634-0.184 0.102-0.404 0.162-0.638 0.162-0.023 0-0.046-0.001-0.069-0.002l0.003 0c-2.053-0.375-3.821-1.396-5.129-2.841l-0.007-0.008c0.879-0.923 1.707-1.918 2.466-2.965l0.058-0.084c1.476-0.154 2.799-0.392 4.088-0.717l-0.197 0.042zM9.784 17.666c0.25 0.49 0.512 0.978 0.8 1.468q0.431 0.731 0.881 1.428c-0.868-0.127-1.706-0.287-2.507-0.482 0.225-0.787 0.507-1.602 0.825-2.416zM22.212 17.641c0.331 0.821 0.612 1.64 0.845 2.434-0.8 0.196-1.645 0.362-2.519 0.487 0.3-0.469 0.6-0.952 0.881-1.447 0.281-0.487 0.544-0.985 0.795-1.475zM7.619 12.292c0.436 1.478 0.904 2.714 1.449 3.906l-0.075-0.182c-0.466 1.005-0.927 2.234-1.305 3.499l-0.052 0.205c-0.706-0.217-1.274-0.43-1.827-0.669l0.115 0.044c-2.164-0.921-3.564-2.132-3.564-3.092s1.4-2.177 3.564-3.094c0.525-0.225 1.1-0.428 1.694-0.617zM24.358 12.287c0.605 0.187 1.18 0.396 1.718 0.622 2.164 0.925 3.564 2.134 3.564 3.094-0.006 0.96-1.406 2.174-3.57 3.093-0.525 0.225-1.1 0.427-1.693 0.616-0.44-1.483-0.908-2.718-1.451-3.912l0.076 0.188c0.464-1.004 0.926-2.233 1.303-3.498l0.053-0.206zM20.53 11.444c0.869 0.129 1.706 0.287 2.507 0.484-0.225 0.79-0.506 1.602-0.825 2.416-0.25-0.487-0.512-0.978-0.8-1.467-0.281-0.49-0.581-0.967-0.881-1.432zM11.458 11.444c-0.3 0.471-0.6 0.953-0.88 1.45-0.281 0.487-0.544 0.977-0.794 1.467-0.331-0.82-0.612-1.637-0.845-2.433 0.8-0.187 1.643-0.354 2.518-0.482zM16 11.126c0.925 0 1.846 0.042 2.752 0.116q0.761 1.091 1.478 2.324 0.697 1.2 1.272 2.432c-0.385 0.819-0.807 1.637-1.266 2.437-0.475 0.825-0.966 1.61-1.475 2.337-0.91 0.079-1.832 0.122-2.762 0.122-0.925 0-1.846-0.044-2.752-0.116-0.507-0.727-1.002-1.505-1.478-2.324q-0.697-1.2-1.272-2.432c0.379-0.821 0.807-1.641 1.266-2.442 0.475-0.825 0.966-1.607 1.475-2.334 0.91-0.080 1.832-0.122 2.762-0.122zM15.981 7.845c0.58 0.6 1.136 1.237 1.659 1.901l0.040 0.053c-0.55-0.025-1.112-0.042-1.681-0.042-0.575 0-1.143 0.012-1.7 0.042 0.556-0.72 1.106-1.357 1.689-1.964l-0.008 0.008zM9.88 4.033c2.053 0.376 3.82 1.397 5.129 2.841l0.007 0.008c-0.879 0.924-1.707 1.919-2.466 2.968l-0.058 0.084c-1.475 0.153-2.798 0.389-4.086 0.714l0.196-0.042c-0.14-0.612-0.244-1.205-0.317-1.774-0.287-2.334 0.067-4.149 0.892-4.632 0.206-0.097 0.447-0.157 0.701-0.165l0.003-0zM22.090 4.008v0.008c0.013-0 0.028-0.001 0.044-0.001 0.239 0 0.464 0.059 0.662 0.163l-0.008-0.004c0.832 0.477 1.193 2.293 0.912 4.629-0.067 0.575-0.177 1.181-0.312 1.799-1.085-0.278-2.406-0.513-3.754-0.656l-0.128-0.011c-0.826-1.134-1.66-2.131-2.555-3.070l0.012 0.012c1.311-1.46 3.077-2.488 5.074-2.859l0.056-0.009zM22.096 2.646c-2.442 0.371-4.556 1.557-6.1 3.268l-0.008 0.009c-1.555-1.71-3.669-2.888-6.051-3.245l-0.056-0.007c-0.013-0-0.029-0-0.045-0-0.491 0-0.952 0.129-1.351 0.355l0.014-0.007c-1.718 0.991-2.103 4.079-1.216 7.954-3.804 1.175-6.278 3.053-6.278 5.032 0 1.987 2.487 3.87 6.302 5.036-0.88 3.89-0.487 6.983 1.235 7.973 0.378 0.217 0.832 0.344 1.315 0.344 0.022 0 0.044-0 0.065-0.001l-0.003 0c2.442-0.371 4.556-1.558 6.1-3.27l0.008-0.009c1.555 1.711 3.669 2.889 6.051 3.246l0.056 0.007c0.015 0 0.034 0 0.052 0 0.488 0 0.947-0.128 1.344-0.351l-0.014 0.007c1.717-0.99 2.103-4.078 1.216-7.954 3.79-1.165 6.264-3.047 6.264-5.029 0-1.987-2.487-3.87-6.302-5.039 0.88-3.886 0.487-6.982-1.235-7.973-0.382-0.219-0.84-0.348-1.328-0.348-0.013 0-0.026 0-0.039 0l0.002-0zM18.787 16.005c0 1.543-1.251 2.794-2.794 2.794s-2.794-1.251-2.794-2.794c0-1.543 1.251-2.794 2.794-2.794 0.772 0 1.47 0.313 1.976 0.818v0c0.506 0.506 0.818 1.204 0.818 1.976 0 0 0 0 0 0v0z"></path>
</svg>
</a>
</div>

# Global Styles

Basil resets all default margins and padding and sets the box-sizing property to border-box for every element on the page.

```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

# CSS Variables

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

# Typography

Links (elements) are styled with the accent color. 
<a href>
Hover effect changes the link color to the secondary color
</a>.

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

# Width and Height

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

# Grid Layout

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

# Flexbox

Basil includes a series of utility classes for flexbox layout. These classes are named in a predictable manner:

Start with .flex-row or .flex-col for row or column direction.
Append -center, -around, or -between for justify-content.
Append -center again for align-items.

## Columns

- `.col-1` to `.col-8` will each span their number of columns. For example, `.col-1` will span 1 column, and `.col-8` will span 8 columns.
- At a minimum screen width of 764px, the `.big:col-1` to `.big:col-8` classes behave similarly, allowing you to adjust your layout for larger screens.

## Rows

- The `.row` class should be used to define a horizontal row. It utilizes CSS grid layout's `grid-template-columns` to automatically divide the row into 8 equal parts. The grid gap (spacing between cells) is defined using the small size CSS variable (`--sm`).
- For larger screens (minimum width of 764px), use `.big:row` to define a row. The functionality is the same as the `.row` class.

# Utility Classes

## Width and Height

Basil provides classes for controlling the width and height of elements:

- `.w-10` to `.w-90` and `.full-width` will set the width of an element to the specified percentage of its parent. For larger screens (minimum width of 764px), use `.big:w-10` to `.big:w-90` and `.big:full-width`.
- `.h-10` to `.h-90` and `.full-height` will set the height of an element to the specified percentage of its parent. For larger screens (minimum width of 764px), use `.big:h-10` to `.big:h-90` and `.big:full-height`.
- `.vh-10` to `.vh-100` will set the height of an element to the specified percentage of the viewport height. For larger screens (minimum width of 764px), use `.big:vh-10` to `.big:vh-100`.

## Flex Display

Basil includes several utility classes for easily applying `display: flex;` and its related properties:

- `.flex-row` and `.flex-col` change the flex direction.
- Additional classes are provided for controlling alignment along both axes: `.flex-row-center`, `.flex-col-center`, `.flex-row-between`, `.flex-col-between`, etc.
- For larger screens (minimum width of 764px), the same functionality is available with the `.big:` prefix.

## Padding and Margin

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
