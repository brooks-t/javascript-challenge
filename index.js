// DAY 1: (2667) Write a function createHelloWorld. It should return a new function that always returns the string 'Hello World'.
/*=================================================================
console.log('=== DAY 1 ===');

const createHelloWorld = () => (...args) => "Hello World";
console.log(createHelloWorld()());
=================================================================*/


// DAY 2: (2620) Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
/*=================================================================
console.log('=== DAY 2 ===');

let n = 0;
const createCounter = (n)=> () => n++; // n++ is post increment, ++n is pre increment

const counter = createCounter(n);
console.log(counter());
console.log(counter());
console.log(counter());
=================================================================*/


/* DAY 3: (2665) Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
The three functions are: 1) increment() increases the current value by 1 and then returns it.
2) decrement() decreases the current value by 1 and then returns it. 3) reset() sets the current value to init and then returns it. */
console.log('=== DAY 3 ===');

const createCounter2 = (init) => {
    let current = init;
    console.log(`current is now: ${current}`);
    return {
        increment: () => ++current,
        decrement: () => --current,
        reset: () => current = init
    }
}

const counter2 = createCounter2(0);
// note that when you're calling the function, you're not passing in any arguments, because the argument is already set to 0 in the createCounter2 function
console.log(counter2.increment()); // note that this skips 'let current = init' and the console.log; and goes straight to ++current
console.log(counter2.reset());
console.log(counter2.decrement());