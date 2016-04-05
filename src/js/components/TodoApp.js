const React = require('react');

const store = require('../stores/todoapp');

const AddTodo = require('./AddTodo');
const VisibleTodoList = require('./VisibleTodoList');
const Footer = require('./Footer');

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

module.exports = TodoApp;
