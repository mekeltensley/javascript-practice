const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: true
    }
];

//For of loop

for (let todo of todos) {
    console.log(todo);
    console.log(todo.text);
    console.log(todo[1].text);
}

// forEach

todos.forEach(function(todo) {
    console.log(todo.text);
});

// map - returns an array

const todoText = todos.map(function(todo) {
    return todo.text
});

console.log(todoText);

// filter where todo is completed AND get only the text for ones completed

const todoCompleted = todos.map(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text
})

console.log(todoCompleted);