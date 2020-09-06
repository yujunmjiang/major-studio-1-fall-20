/*
  Exercise 2
  JavaScript quirks and tricks
*/

var schoolName = "Parsons";
var schoolYear = 1936;

// Task
// What is the value of test3?
var test1;
if (1 == true) {
  test1 = true;
} else {
  test1 = false;
}

var test2;
if (1 === true) {
  test2 = true;
} else {
  test2 = false;
}

var test3 = test1 === test2;

// This returns false
console.log(test3);

// Task
// Change this code so test4 is false and test5 is true. Use console.log() to confirm your cod works.

var test4 = 0 == "false";
var test5 = 1 === "1";

console.log("test4 is", test4, "and test 5 is", test5);

// Task
// What are the values of p, q, and r? Research what is going on here.
var w = 0.1;
var x = 0.2;
var y = 0.4;
var z = 0.5;

// Here we have p = 0.1 + 0.2
var p = w + x;

// Here we have q = 0.5 - 0.2
var q = z - x;

// Here we have r = 0.4 - 0.1
var r = y - w;

// Should return p = 0.3, q = 0.3, r = 0.3
// But JS return a float on p and r
// Answer to this has to do with JS's conversion of Number values to Strings
// https://stackoverflow.com/questions/50778431/why-does-0-1-0-2-return-unpredictable-float-results-in-javascript-while-0-2
console.log(p);
console.log(q);
console.log(r);