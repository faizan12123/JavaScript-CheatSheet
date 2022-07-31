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