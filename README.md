# CSS-to-go


A bit of CSS that makes a plain HTML document somewhat more pleasant to look at.

It makes a _gentle_ reset, and then applies some global styles for common elements.  There are also a small number of utility classes made available.

Learn more by looking at the [description overview](https://npup.github.io/css-to-go/) and the [examples](https://npup.github.io/css-to-go/examples/).

## Installation

    npm i css-to-go


## Usage
### Via cdn

An easy way to use it, here getting the latest and greatest version:

    `index.html` (excerpt):

    <head>
        ...
        <link href="https://unpkg.com/css-to-go" rel="stylesheet" />
    </head>

### Importing it in your build

Import it for your bundler to handle

`App.(jsx|svelte|whatever)`:

    import "css-to-go";


or just link to it inside node_modules.

`index.html` (excerpt):

    <head>
      ...
      <link rel="stylesheet"
        href="[path to]/node_modules/css-to-go/dist/css-to-go.min.css"
      />
    </head>

Then apply the "root selector" class `ctg-root` to trigger the styles (and possibly the utility class `ctg-container` too).  I normally make the document's `body` be that root:

`index.html` (excerpt):

    <body class="
        ctg-root         <!-- enables all styling -->
        ctg-container    <!-- optional (just some container/wrapper behaviour) -->
        ctg-theme--light <!-- optional (dark theme is the default)  -->
    ">
        <!-- your HTML here -->
    </body>
## View examples

    npm start

Navigate to http://localhost:3003/
