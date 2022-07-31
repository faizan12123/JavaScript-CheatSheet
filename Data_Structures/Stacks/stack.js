/* 
think of it like a stack of books. The last book you put on the stack is the book on the top.
if you remove that book, the second to last book you put on the stack is the one that is exposed and is on the top (FILO)
*/


/*
Functions:

push- for placing data onto a stack
pop- to remove an element on the top of a stack
peek- for displaying the top element of a stack
length- for determining how many elements are on a stack
*/


/*
In JS an array already has all the functions that you need for a stack
*/








//--------------------------Stack using an array to find palandrome (words that are spelled the same way if they were reversed like bob and mom)------------------------

let letters = []; //this is our stack

let word = "hello"; //our given word

let rword = ""; //our reversed word. We will use stack to fill this variable with the letters from the "word" variable


//put letters of "word" into stack
for (let i = 0; i < word.length; i++){
    letters.push(word[i]); //takes each letter of variable "word" and push it onto letter stack
}

//pop off letters from "letters" array into the rword variable in reverse order
for(let i=0; i < word.length; i++) {
    rword += letters.pop()
}


if (rword === word) {
    console.log(`${word} is a palindrome`);
} else {
    console.log(`${word} is not a palindrome`);
}












//---------------------stack by creating a stack class(manually using stack)----------------------------------


// Creates a stack
class Stack {
    constructor(count, storage) {
    this.count = 0;
    this.storage = {};
    }
    // Adds a value onto the end of the stack
    pushFunction(value) {
        this.storage[this.count] = value;
        this.count++;
    }
    
    // Removes and returns the value at the end of the stack
    popFunction() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--; //this.count is the index right ontop of the newest added item(which is where you would add the new item) so you must subtract it by 1 to reach the top item of the stack
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    
    sizeFunction() {
        return this.count;
    }
    
    // Returns the value at the end of the stack
    peekFunction() {
        return this.storage[this.count-1]; //this.count is the index right ontop of the newest added item(which is where you would add the new item) so you must subtract it by 1 to reach the top item of the stack
    }
}

var myStack = new Stack();

myStack.pushFunction(1);
myStack.pushFunction(2);
console.log(myStack.peekFunction());
console.log(myStack.popFunction());
console.log(myStack.peekFunction());
myStack.pushFunction("freeCodeCamp");
console.log(myStack.sizeFunction());
console.log(myStack.peekFunction());
console.log(myStack.popFunction());
console.log(myStack.peekFunction());