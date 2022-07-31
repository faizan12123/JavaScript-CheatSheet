//Arrays- variables that hold multiple values

const fruits = ['apples', 'oranges', 'pears', 10, true]; // JS allows multiple data types in a single array

fruits[5] = 'grapes'; //adds 6th item at index 5 that is 'grapes'

fruits.push('mangos'); //adds 'mangos' to the end of the array
fruits.unshift('Strawberries'); //adds 'Strawberries' to the front of the array
fruits.pop(); //takes off last item in array

console.log(fruits.indexOf('oranges')); //gets the index of a string or any item inside of the array

console.log(fruits[1]); //prints the index 1 (oranges)
console.log(fruits);



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

console.log(todos[1].text); //prints out the text from the second object in the array; "meeting with boss"

const todoJson = JSON.stringify(todos); //turns todos array into json format
console.log(todoJson);


//map- to create a new array based off of an array
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
//filter
const todoCompletedAndText = todos.filter(function(todo){
    return todo.isCompleted == true; //return the todos that are completed (iscompleted = true)
}).map(function(todo){
    return todo.text;
});
console.log(todoCompletedAndText);