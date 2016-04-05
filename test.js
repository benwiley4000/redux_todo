const expect = require('expect');
const deepFreeze = require('deep-freeze');

const counter = require('./src/js/reducer.js');

const addCounter = (list) => {
  return list.concat([0]);
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
};

testAddCounter();
console.log('Tests passed!');
