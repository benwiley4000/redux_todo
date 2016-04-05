const React = require('react');

const AddTodo = require('./AddTodo');
const VisibleTodoList = require('./VisibleTodoList');
const Footer = require('./Footer');

const TodoApp = ({ store }) => (
  <div>
    <AddTodo store={store} />
    <VisibleTodoList store={store} />
    <Footer store={store} />
  </div>
);

module.exports = TodoApp;
