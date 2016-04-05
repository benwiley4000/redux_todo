/* js/index.js */

const React = require('react');
const ReactDOM = require('react-dom');
const { createStore } = require('redux');

const { counter } = require('./reducer');
const Counter = require('./components/counter.js');

const counterStore = createStore(counter);

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
