/* js/index.js */

const React = require('react');
const ReactDOM = require('react-dom');
const { createStore } = require('redux');

const reducer = require('./reducers/todoapp');

const TodoApp = require('./components/TodoApp');

class Provider extends React.Component {
  getChildContext () {
    return {
      store: this.props.store
    };
  }

  render () {
    return this.props.children;
  }
}
Provider.childContextTypes = {
  store: React.PropTypes.object
};

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <TodoApp />
  </Provider>,
  document.getElementById('main')
);
