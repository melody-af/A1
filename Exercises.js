/**
 * Welcome to Exercises.js!
 * 
 * This file is imported in App.js and the functions below (ex1, ex2, ex3) are
 * ran whenever the app is reloaded. You can view the output of these functions
 * in the terminal.
 * 
 * To complete this part of the assignment, fill in code for ex1, ex2, and
 * makeCircle. 
 * 
 * Once you're done, you can set RUN_EXERCISES to false so the output from these
 * exercises don't keep spamming your terminal.
 */

const RUN_EXERCISES = true;

const ONE_TO_A_HUNDRED = Array(100).fill(1).map((n, i) => n + i);

/**
 * Print the numbers from 1 to 100. But for multiples of three, print "Fizz" 
 * instead of the number and for the multiples of five, print "Buzz". 
 * For numbers which are both multiples of three and five, print "FizzBuzz". 
 * 
 * An array of numbers is provided for you as a variable called ONE_TO_A_HUNDRED.
 */
const ex1 = () => {
    // TODO: Fill this in!
}

/**
 * Print an array containing the squares for all the even numbers between 
 * 1 and 100, using the map() and filter() methods of arrays.
 * 
 * An array of numbers is provided for you as a variable called ONE_TO_A_HUNDRED.
 * 
 * The resulting array should look something like: 
 *   [4, 16, 36, ..., 9216, 9604, 10000]
 */
const ex2 = () => {
    // TODO: Fill this in!
}

// TODO: Replace this!
const makeCircle = () => {}; // empty function

/**
 * Write a function called makeCircle that, given the radius of a circle, returns
 * an object containing two properties: 
 *  - "radius", which contains the given radius
 *  - "area", which contains the area of the circle (pi * radius ^ 2)
 */
const ex3 = () => {
    console.log(makeCircle(1));
    console.log(makeCircle(50));
    console.log(makeCircle(-10));
}

// Don't modify this code!
export default runExercises = () => {
    if (RUN_EXERCISES) {
        console.log("\x1b[32m", 'Output for Exercise 1 (FizzBuzz):');
        ex1();
        console.log("\x1b[32m", 'Output for Exercise 2 (Squares):');
        ex2();
        console.log("\x1b[32m", 'Output for Exercise 3 (Circle):');
        ex3();
        console.log("\x1b[32m", 'End of output for the JS exercises. To disable this, set RUN_EXERCISES to false in Exercises.js.');
    } else {
        console.log("\x1b[31m", "Exercises skipped. Please make sure you've completed the exercises in Exercises.js before submitting.");
    }
}