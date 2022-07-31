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


