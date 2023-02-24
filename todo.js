    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
  // console.log(arrayOfTodos[0].userId)
  const olElement = document.getElementById('todo-list')
  for (let index = 0; index < arrayOfTodos.length; index++) {
    const todo = arrayOfTodos[index]
    const addLi = document.createElement('li')
    const newText = document.createTextNode(todo.title)
    addLi.appendChild(newText)
    olElement.appendChild(addLi)
  }
}
