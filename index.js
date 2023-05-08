// DAY 1: Write a function createHelloWorld. It should return a new function that always returns the string 'Hello World'.
console.log('=== DAY 1 ===');

const createHelloWorld = () => (...args) => "Hello World";
console.log(createHelloWorld()());

// DAY 2: Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
console.log('=== DAY 2 ===');

let n = 0;
const createCounter = (n)=> () => ++n;

const counter = createCounter(n);
console.log(counter());
console.log(counter());
console.log(counter());