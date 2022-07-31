// var, let, const -> three different ways to create variables. Should not really use var anymore.
//const is better to use than let if u are not going to change the values of the variable throughout the code.







/*
// data types: String, Numbers, Boolean, Null, undefined. Examples of these data types:
const name = 'John'; //string
const age = 30; //number
const rating = 4.5; //number
const isCool = true; //boolean
const x = null; //null
const y =undefined; //undefined
let z; //undefined
 */






/*
const name = 'john';
const age =30;
//Concatenation
console.log('My name is ' + name + ' and I am ' + age);
//template string (the better way to concatenate)
console.log(`My name is ${name} and I am ${age}`)
*/






/*
const s= 'Hello World';
console.log(s.length); // gets length of string
console.log(s.toUpperCase()); //makes upper case
console.log(s.substring(0,7).toUpperCase()); // takes the first 8 characters of string and makes them cap
console.log(s.split('')); //splits string into an array with each letter as an index: (11) ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
*/







/*
//Arrays- variables that hold multiple values

const fruits = ['apples', 'oranges', 'pears', 10, true]; // JS allows multiple data types in a single array

fruits[5] = 'grapes'; //adds 6th item at index 5 that is 'grapes'

fruits.push('mangos'); //adds 'mangos' to the end of the array
fruits.unshift('Strawberries'); //adds 'Strawberries' to the front of the array
fruits.pop(); //takes off last item in array

console.log(fruits.indexOf('oranges')); //gets the index of a string or any item inside of the array

console.log(fruits[1]); //prints the index 1 (oranges)
console.log(fruits);
*/






/*
// Object literals are just key-value pairs
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.firstName, person.lastName); // prints person  object first and last name
console.log(person.hobbies[1]); //gets the first item in movies array in person object
console.log(person.address.city); // gets city from nested section from person object
const {firstName, lastName, address: {city}} = person; // puls out firstName and lastName and city from address from the person object so that it can be used elsewhere in the code. This is called destructuring.
console.log(firstName); 
person.email = 'john@gmail.com'; // adds email to the person object
console.log(person);
*/











/*
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
*/











/*
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

//for loop
for(let i  = 0; i <=10; i++) {
    console.log(`For loop Number: ${i}`);
}

//while loop
let i = 0;
while(i<=10){
    console.log(`While loop Number: ${i}`);
    i++;
}

//loop through arrays
for(let i  = 0; i < todos.length; i++) {
    console.log(`first for loop: ${todos[i].text}`);
}

//different and better way to loop through arrays
for(let todo of todos) {
    console.log(`newer for loop ${todo.isCompleted}`);
}

//foreach (better way to loop through array)
todos.forEach(function(todo){
    console.log(todo.text);
});

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
*/













/*
//conditionals

//if else
const x= 4;
if(x===10) { // "==" is matching the characters themselves so data type does not matter, but 
            //for "===" Matches data type so string '10' is not the same as int 10
    console.log('x is 10');
} else if (x>10) {
    console.log('x is greater than 10')
} else { 
    console.log('x is less than 10');
}


//Turnary statement
const y=4;

const color = y > 10 ? 'red' : 'blue' // this says if y>10 then color is red, else color is blue
//'y' means "then"
console.log(color);


//switche statement
switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default: 
    console.log('Color is NOT red or blue');
}
*/










/*
//functions

//normal functions
function addNums(num1, num2) {
    return(num1+num2);
}

console.log(addNums(5,4)); //passing in 5 as num1 and 4 as num2

//arrow functions
const addNumsArrow = (num1, num2) => num1+num2; //arrow returns whatever it is pointing at

console.log(addNumsArrow(5,5)); //passing in 5 as num1 and 4 as num2
*/
















/*
// --------------------------------Object Oriented Programming in ES5-----------------------------





//constructor function
function Person(firstName, lastName, dob) { //constructor function's names should be capatalized
    this.firstName = firstName; //"this" is setting them up as properties of the object
    this.lastName = lastName; 
    this.dob = new Date(dob); // creating an object of dob
}


//creating a prototype of a constructor function is used to create other functions that do not need all the different parameters such as first name, dob, last name etc.
Person.prototype.getBirthYear = function(){ //creates a function that returns birth year
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function(){ //creates a function that returns the full name of person
    return `${this.firstName} ${this.lastName}`;
}



//Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Jason', 'Smith', '3-6-1982');

console.log(person1);
console.log(person2.firstName); //without "this" when calling person2.firstName, code would not recognize firstName is a property of "Person"
console.log(person2.dob.getFullYear());

console.log(person1.getBirthYear()); //prints the person1's birth year
console.log(person1.getFullName()); //prints the person1's full name
*/










/*
// --------------------------------Object Oriented Programming in ES6(using classes)-----------------------------



//class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName; //"this" is setting them up as properties of the object
        this.lastName = lastName; 
        this.dob = new Date(dob); // creating an object for date
    }

    getBirthYear() {
        return this.dob.getFullYear(); //creates a method(a function within a class) that returns birth year
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`; //creates a method that returns the full name of person
    }
}


//Instantiate object
const person1 = new Person('John', 'ManDoe', '4-3-1980');
const person2 = new Person('Jason', 'Smith', '3-6-1982');

console.log(person1);
console.log(person2.firstName); //without "this" when calling person2.firstName, code would not recognize firstName is a property of "Person"
console.log(person2.dob.getFullYear());

console.log(person1.getBirthYear()); //prints the person1's birth year
console.log(person1.getFullName()); //prints the person1's full name


*/



















/*
//selecting items from DOM (user-interface)


//console.log(window); //this is the element which contains all elements

//single element selectors
console.log(document.getElementById('my-form')); //referencing the form ID
console.log(document.querySelector('.container')); // query selector allows you to select classes or ID or any type of elements




//multiple element selectors
console.log(document.querySelectorAll('.item')); // gives us a node list and allows all element types such as tags and ID and classes
const items = document.querySelectorAll('.item')

items.forEach((item) => console.log(item));
*/
















/*
//Manipulating the DOM


//removing all the items from web-page
const ul = document.querySelector('.items');
ul.remove();


//removes the last item from web-page
const ul = document.querySelector('.items');
ul.lastElementChild.remove();



// edit content
const ul = document.querySelector('.items');
ul.firstElementChild.textContent = 'Hello';// changed the first item to display 'Hello' instead of 'Item 1'
ul.children[1].innerText = 'Brad'; // changes the second item to display brad
ul.lastElementChild.innerHTML = '<h1>Hello</h1>' //adds html dynamically to third text box


//changing the style
const btn = document.querySelector('.btn');
btn.style.background = 'red' // changes the submit button to red




//events
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => { //listens for a click on the submit button. There are other events than just click, like mouseOver, etc.
    e.preventDefault(); //this is used to stop the default behavior so that console.log continues to be displayed in console
    console.log(e.target.id); //printing the class's ID for the submit button
    document.querySelector('#my-form').style.background = '#ccc'; //changes the background of the "add user" page to gray when any submit button is selected
    document.querySelector('body').classList.add('bg-dark'); //changes the background to black and text fields to white once submit button is selected
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'; //changes text

});
*/











//Turning the Add User Page into an actual app

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg'); //to prompt any error messages to DOM
const userList = document.querySelector('#users'); //to store the users entered


myForm.addEventListener('submit', onSubmit); //listens for the submit button

function onSubmit(e) { //function that is ran when someone clicks submit button
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') { //to tell people to enter all fields before tying to submit if they click submit before adding both name and email
        msg.classList.add('error') //makes msg field red by calling 'error' class from CSS file
        msg.innerHTML = 'Please enter all fields' //changes the empty msg to have a warning sign

        setTimeout(() => msg.remove(), 3000) //removes the error message after 3 seconds using setTimeout(which takes in a function. When then used arrow function to call msg.remove)
    } else {
        const li = document.createElement('li'); //creates a list item(element) and puts it into the DOM
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`)) //adding a text node with the input values. Basically adds something inside of list
        
        userList.appendChild(li); //append the li to the ul(user-list). AppendChild just means add something into it. So this is adding something into the userlist

        //clear the fields
        nameInput.value = '';
        emailInput.value = '';
    }
    //console.log(nameInput.value); //prints input for name field to console
}

