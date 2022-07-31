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


//switch statement
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