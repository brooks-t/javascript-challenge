// DAY 1: (2667) Write a function createHelloWorld. It should return a new function that always returns the string 'Hello World'.
/*=================================================================
console.log('=== DAY 1 ===');

const createHelloWorld = () => (...args) => "Hello World";
console.log(createHelloWorld()());
=================================================================*/


/*=================================================================
DAY 2: (2620) Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
console.log('=== DAY 2 ===');

let n = 0;
const createCounter = (n)=> () => n++; // n++ is post increment, ++n is pre increment

const counter = createCounter(n);
console.log(counter());
console.log(counter());
console.log(counter());
=================================================================*/

/*=================================================================
DAY 3: (2665) Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
The three functions are: 1) increment() increases the current value by 1 and then returns it.
2) decrement() decreases the current value by 1 and then returns it. 3) reset() sets the current value to init and then returns it. */

/* console.log('=== DAY 3 ===');

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

console.log(counter2.increment()); // note that this skips 'let current = init' and the console.log; and goes straight to ++current
console.log(counter2.reset());
console.log(counter2.decrement());
=========================================================================================*/

/*===============================================================
DAY 4: (2635) Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element. The returned array should be created such that returnedArray[i] = fn(arr[i], i). Please solve it without the built-in Array.map method.
console.log('=== DAY 4 ===');
var map = function (arr, fn) {
    let returnedArr = [];
    for (let i = 0; i < arr.length; i++) {
        returnedArr.push(fn(arr[i], i)); // fn is multiplying each element by its index and pushing it to the returnedArr
    }
    return returnedArr;
}

const arr = [1, 2, 3, 4, 5];
const fn = (x, i) => x * i;
console.log(map(arr, fn));
=================================================================*/

/*===============================================================
DAY 5: (2634) Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements. The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value. Please solve it without the built-in Array.filter method. */
console.log('=== DAY 5 ===');
const filter = (arr, fn) => {
    let returnedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            returnedArr.push(arr[i]);
        }
    }
    return returnedArr;
}

const arr = [1, 2, 3, 4, 5];
const fn = (x, i) => x % 2 === 0;
console.log(filter(arr, fn));