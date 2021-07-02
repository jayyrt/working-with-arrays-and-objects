/*
  Once you complete a problem, refresh ./destructuring.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}
// Do not edit the code above.

/*
  Use object destructuring to save the property values from the object carDetails into new variables. 
*/

//Code Here

let carColor = carDetails.color;
let carMake = carDetails.make;
let carModel = carDetails.model;
let carYear = carDetails.year; 

////////// PROBLEM 2 //////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/

function greeting( obj ) {
  //Code Here
  let obj = {
    firstName: 'Kenia',
    lastName: 'Romero',
    title: 'Miss'
  }
  // Do not edit the code below.
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
  // Do not edit the code above.
}

greeting(obj);

////////// PROBLEM 3 //////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/

//Code Here
let totalPopulation = {
  utah: 8000,
  california: 10000,
  texas: 5000,
  arizona: 3000
}

let utah = totalPopulation.utah;
let california = totalPopulation.california;
let texas = totalPopulation.texas;
let arizona = totalPopulation.arizona

function add(totalPopulation){
  return utah + california + texas + arizona;
}

////////// PROBLEM 4 //////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/

//Code Here

let ingredients = {
  carb: '100 carbs',
  fat: '25 fats',
  protein: '25 proteins',
}

function newIngredients(ingredients){
    return ([ ingredients.carb, ingredients.fat, ingredients.protein ])
}

newIngredients(ingredients);

////////// PROBLEM 5 //////////

/*
  Now we will use object destructuring as the function's parameter instead of destructuring the object inside of the function declaration.
  Example:
    function example( {one, two, three} ) {
      return one + two + three
    }

  Write a function called largeNumbers that will take a destructured object as it's parameter.
  The object properties will be named first, second, and third and their values will be numbers.
  Find the smallest number of the three and return that number.
*/

//Code Here

let numbers = {
  first: 10,
  second: 18,
  third: 23
}

function largeNumbers(numbers) {
  return numbers.first
}

largeNumbers(numbers);

////////// PROBLEM 6 //////////

/*
  Write a function called numberGroups that will take a destructured object as it's parameter.
  The object properties will be named a, b, and c and their values will be arrays of numbers.
  Find the longest array and return that array.
*/

//Code Here

let letters = {
  a: [1, 2, 3, 4, 5], 
  b: [6, 7, 8, 9, 10],
  c: [11, 12, 13, 14, 15, 16]
}

function numberGroups(letters){
 return c
}

numberGroups(letters);