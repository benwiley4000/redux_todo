/* js/index.js */

const React = require('react');
const ReactDOM = require('react-dom');
const { createStore } = require('redux');

const reducer = require('./reducers/todoapp');

const TodoApp = require('./components/TodoApp');

ReactDOM.render(
  <TodoApp store={createStore(reducer)} />,
  document.getElementById('main')
);
