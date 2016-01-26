'use strict';

// Question 1
// Write a function that takes zero or more arguments
// and returns the minimum from that set
// assume that all the argument are numbers
var min = function min() {
  if(arguments === undefined) {
    return undefined;
  }
  let min = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] < min) {
      min = arguments[i];
    }
  }
  return min;
};

// Question 2
// Write a function that takes zero or more arguments
// and returns the sum of that set
// assume that all the argument are numbers
var sum = function sum() {
  if(arguments[0] === undefined) {
    return 0;
  }
  let sum = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

// Question 3
// Write a function that returns an array of the specified length
// with all the elements set to defaultValue
var newArray = function newArray(length, defaultValue) {
  let array = new Array(length);
  array.fill(defaultValue);
  return array;
};

// Question 4
// Write a function that returns an array of the specified length
// with all the elements set to the value returned from
// invoking the argument defaultsFunction
// defaultsFunction should be passed the index of the array element to be set
var newArray2 = function newArray2(length, defaultsFunction) {
  let array = new Array(length);
  array.forEach(defaultsFunction(cV));
  return array;
};

// Questions 5
// Write a function that adds or replaces a method on an object
// using the given propertyName
// If the argument obj is unset, create a new object
// The function you write should return
// the object passed in as an argument or the object created
var addMethod = function addMethod(propertyName, method, obj) {
  if (obj === undefined) {
    let obj = new Object();
  }
  obj[propertyName] = method;
  return obj;
};

// Used by testing
module.exports = {
  min: min,
  sum: sum,
  newArray: newArray,
  newArray2: newArray2,
  addMethod: addMethod
};
