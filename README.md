# Semantic UI w/ React Test

An example on how to integrate the React version of Semantic UI into a Create React App.

## How to integrate Semantic UI

### Add the JavaScript library
```bash
$ yarn add semantic-ui-react
```

### Add the default CSS
```bash
$ yarn add semantic-ui-css
```

### Include the minified CSS in `index.js`
```js
import 'semantic-ui-css/semantic.min.css';
```

### Start using Semantic UI in the components
```js
import { Container, Header, Button, Segment } from 'semantic-ui-react';
```

## Notes

### No need to install Normalize.CSS

No need to install `normalize.css`; It is already included in Semantic UI's base CSS.

### No need to set `box-sizing: border-box`

Semantic UI's base CSS already includes a number of resets including `box-sizing: border-box`.

> [Semantic UI - Reset](https://semantic-ui.com/globals/reset.html)
