//Arrays- variables that hold multiple values

// create an array
const fruits = ['apples', 'oranges', 'pears', 10, true]; // JS allows multiple data types in a single array
const cars = new Array("Saab", "Volvo", "BMW");
const points = new Array(40); // Create an array with 40 undefined elements
const points2 = [40, 100, 1, 5, 25, 10];
console.log(fruits)
console.log(cars)

// add to an array
fruits[5] = 'grapes'; //adds 6th item at index 5 that is 'grapes'
fruits.push('mangos'); //adds to the end of the array
fruits.unshift('Strawberries'); //adds 'Strawberries' to the front of the array
console.log(fruits.concat("peaches")) //adds to end of array
fruits.splice(2, 0, "Lemon", "Kiwi"); // The first parameter (2) defines the position where new elements should be added (spliced in). The second parameter (0) defines how many elements should be removed. The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
console.log(fruits)

// Changing an array element
cars[0] = "Opel";
console.log(cars)

// delete from array
fruits.pop(); //takes off last item in array
fruits.shift(); // delete first item
fruits.splice(0, 1); // The first parameter (0) defines the position where new elements should be added (spliced in). The second parameter (1) defines how many elements should be removed.
const citrus = fruits.slice(2, 5); // The slice() method creates a new array. The slice() method does not remove any elements from the source array. The method then selects elements from the start argument, and up to (but not including) the end argument.
console.log("Fruits array after deleting: " + fruits)
console.log("Citrus: " + citrus)

// Get index
console.log("index of oranges is: " + fruits.indexOf('oranges')); 

// Access data from array  (In JavaScript, arrays use numbered indexes and objects use named indexes. If you use named indexes, JavaScript will redefine the array to an object.)
console.log(fruits[2]); //prints the index 2

// Length of an arrays
console.log("Length of fruits array is " + fruits.length)


// Array of objects
const todos = [
    {
        id:1, 
        text: 'take out trash',
        isCompleted: true
    },
    {
        id:2, 
        text: 'meeting with boss',
        isCompleted: true
    },
    {
        id:3, 
        text: 'dentist app',
        isCompleted: false
    }
];

// Access data from array of objects
console.log(todos[1].text); //prints out the text from the second object in the array; "meeting with boss"

// Turn array into JSON format
const todoJson = JSON.stringify(todos);
console.log(todoJson);


//map (to create a new array based off of an array)
const todoText = todos.map(function(todo){
    return todo.text; //returns an array with all of the text values within todo array
});
console.log(todoText);

//filter
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted == true; //return the todos that are completed (iscompleted = true)
});
console.log(todoCompleted);

//map and filter combined
const todoCompletedAndText = todos.filter(function(todo){
    return todo.isCompleted == true; //return the todos that are completed (iscompleted = true)
}).map(function(todo){
    return todo.text;
});
console.log(todoCompletedAndText);

//convert array into string
console.log(fruits.toString())
console.log(fruits.join(" * ")) // lets u specify the separator

// Merging arrays
console.log(fruits.concat(cars)) // concat() method can take any number of array arguments

// Sorting an array alphabetically
console.log("Sorted fruits: " + fruits.sort())

// Reversing an array 
console.log("Reversed fruits: " + fruits.reverse())

// Numeric Sort ascending
console.log(points2.sort(function(a, b){return a - b}))

// Numeric Sort descending
console.log(points2.sort(function(a, b){return b - a}))

// Sorting an Array in Random Order
console.log(points2.sort(function(a, b){return 0.5 - Math.random()})); //

// Find highest number in an array
console.log(Math.max.apply(null, points2))

// Find the lowest number in an array
console.log(Math.min.apply(null, points2))

// Reduce (reduce() method runs a function on each array element to produce (reduce it to) a single value. The reduce() method does not reduce the original array.)
console.log( points2.reduce((total, value) => total + value))
