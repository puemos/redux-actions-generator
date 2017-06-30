# redux-generate-actions

generate actions object with a prefix

```js
import reduxGenerateActions from 'redux-generate-actions';

const actions = reduxGenerateActions('TODO', [
    'ADD_TODO',
    'TOGGLE_TODO',
    'SET_VISIBILITY_FILTER',
])

// will produce:

{
    ADD_TODO: 'TODO/ADD_TODO',
    TOGGLE_TODO: 'TODO/TOGGLE_TODO',
    SET_VISIBILITY_FILTER: 'TODO/SET_VISIBILITY_FILTER',
}
```

### Real world example
#### `actions.js`
```js
import reduxGenerateActions from 'redux-generate-actions';

const actions = reduxGenerateActions('', [
    'ADD_TODO',
    'TOGGLE_TODO',
    'SET_VISIBILITY_FILTER',
])

export default actions;
```