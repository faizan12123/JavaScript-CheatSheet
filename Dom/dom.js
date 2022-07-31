
//selecting items from DOM (user-interface)


//console.log(window); //this is the element which contains all elements

//single element selectors
console.log(document.getElementById('my-form')); //referencing the form ID
console.log(document.querySelector('.container')); // query selector allows you to select classes or ID or any type of elements




//multiple element selectors
console.log(document.querySelectorAll('.item')); // gives us a node list and allows all element types such as tags and ID and classes
const items = document.querySelectorAll('.item')

items.forEach((item) => console.log(item));



//Manipulating the DOM

/*
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