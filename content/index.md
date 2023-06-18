# Basil CSS

Basil is a lightweight UI framework made with the goal of bridging the gap between developers who like using UI frameworks and those who prefer styling apps without them. Basil follows mobile first design principles.

## # What is Basil CSS

By using Basil you speed up your development by only sprinkling the bare minimum of basil on your spaghetti code. Basil only uses CSS grids, flexbox, fontsize, margin, padding and media queries. That leaves you to style the rest of the app with whatever CSS method you want.

If a product is build originally with Basil, the maintainer can jump into the prjoect and change it simply by adding more CSS classes the way he likes best, thus embracing the complexity and chatotic nature of maintaning CSS.

[If you wish to help out with the development of the framework, feel free to make a pull request in the repo](https://github.com/Basilcss)

# Quick start

## # Installation

Installation is simple. If you are running a Node.js application follow these steps:

1. In your terminal run `yarn add basilcss` or `npm i basilcss`
2. Go to your root file and add this line above your global CSS file `import 'basilcss/basil.css'`
3. Start styling your HTML template.

## # Grids

### Row

Basil uses a flexible 8 row grid system. Use the `row` class to initiate the grid.

```html
<div class="row">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
</div>
```

<div class="row docs-border">
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
<div>7</div>
<div>8</div>
</div>

### Column

If you have two elements you can organize them with the `col` class.

#### Example 1

```html
<div class="row">
  <div class="col-2">1</div>
  <div class="col-6">2</div>
</div>
```

<div class="row docs-border">
    <div class="col-2">1</div>
    <div class="col-6">2</div>
</div>

#### Example 2

```html
<div class="row">
  <div class="col-4">1</div>
  <div class="col-4">2</div>
</div>
```

<div class="row docs-border">
    <div class="col-4">1</div>
    <div class="col-4">2</div>
</div>

#### Example 3

```html
<div class="row">
  <div class="col-8">1</div>
</div>
```

<div class="row docs-border">
    <div class="col-8">1</div>
</div>

## # Flexbox

Flexbox is a key component in Basil CSS.

#### Example 1

Here we use the `flex-row` class to initiate the default flexbox behaviour.

```html
<div class="row">
  <div class="col-1 flex-row">
    <p>🪴</p>
  </div>
</div>
```

<div class="row docs-border">
  <div class="col-1 docs-height flex-row">
    <p>🪴</p>
    <p>🪴</p>
    <p>🪴</p>
    <p>🪴</p>
  </div>
</div>

#### Example 2

Here we use the `flex-column` class to turn the row into a column.

```html
<div class="row">
  <div class="col-1 flex-column">
    <p>🪴</p>
  </div>
</div>
```

<div class="row docs-border">
  <div class="col-1 docs-height flex-column">
    <p>🪴</p>
    <p>🪴</p>
    <p>🪴</p>
    <p>🪴</p>
  </div>
</div>

## # Width

## # Buttons

## # Font size

## # Margin

## # Padding

## # Screen Size
