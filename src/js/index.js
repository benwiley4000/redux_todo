/* js/index.js */

const React = require('react');
const ReactDOM = require('react-dom');

const TodoApp = require('./components/TodoApp');
const store = require('./stores/todoapp');

const render = () => {
  ReactDOM.render(
    <TodoApp
      {...store.getState()}
    />,
    document.getElementById('main')
  );
};

store.subscribe(render);
render();
