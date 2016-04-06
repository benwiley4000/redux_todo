/* js/index.js */

const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const { createStore } = require('redux');

const reducer = require('./reducers/todoapp');

const TodoApp = require('./components/TodoApp');

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <TodoApp />
  </Provider>,
  document.getElementById('main')
);
