// DAY 1: Write a function createHelloWorld. It should return a new function that always returns the string 'Hello World'.
const createHelloWorld = () => { return (...args) => { return 'Hello World' } };
console.log(createHelloWorld()()); // 'Hello World'