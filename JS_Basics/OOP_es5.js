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