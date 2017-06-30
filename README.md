# redux-actions-generator

Flux Standard Action type generator for Redux.

[![NPM](https://nodei.co/npm/redux-actions-generator.png?downloads=true)](https://nodei.co/npm/redux-actions-generator/)

## Installation

The npm package provides a CommonJS build for use in Node.js, and with bundlers like Webpack and Browserify. It also includes an ES modules build that works well with Rollup and Webpack2's tree-shaking.

```bash
npm install --save redux-actions-generator
```
or
```bash
yarn add redux-actions-generator
```

## Usage
### `createAction(prefix<string>, actions <Array<string>>)`

```js
import createActions from 'redux-actions-generator';

const actions = createActions(
    'TODO', 
    [
        'ADD_TODO',
        'TOGGLE_TODO',
        'SET_VISIBILITY_FILTER',
    ]
)

expect(actions).to.deep.equal({
    ADD_TODO: 'TODO/ADD_TODO',
    TOGGLE_TODO: 'TODO/TOGGLE_TODO',
    SET_VISIBILITY_FILTER: 'TODO/SET_VISIBILITY_FILTER',
});

```

### Real world example
#### `actions.js`
```js
import createActions from 'redux-actions-generator';

const actions = createActions('', [
    'ADD_TODO',
    'TOGGLE_TODO',
    'SET_VISIBILITY_FILTER',
])

export default actions;
```