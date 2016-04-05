/* js/index.js */

const React = require('react');
const ReactDOM = require('react-dom');
const { createStore } = require('redux');

const { counter, todoApp } = require('./reducer');
const Counter = require('./components/counter');

const counterStore = createStore(counter);
const todoStore = createStore(todoApp);

const render = () => {
  ReactDOM.render(
    <Counter
      value={ counterStore.getState() }
      onIncrement={() =>
        counterStore.dispatch({
          type: 'INCREMENT'
        })
      }
      onDecrement={() =>
        counterStore.dispatch({
          type: 'DECREMENT'
        })
      }
    />,
    document.getElementById('main')
  );
};

counterStore.subscribe(render);
render();

console.log(todoStore.getState());
console.log('Dispatching ADD_TODO');
todoStore.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn Redux'
});
console.log(todoStore.getState());

console.log('Dispatching SET_VISIBILITY_FILTER');
todoStore.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
});
console.log(todoStore.getState());
