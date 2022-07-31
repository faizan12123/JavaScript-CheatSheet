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