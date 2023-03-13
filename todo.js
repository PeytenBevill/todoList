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
let olElement = document.getElementById('todo-list')
const populateTodos = () => {
  // console.log(arrayOfTodos[0].userId)
  for (let index = 0; index < arrayOfTodos.length; index++) {
    const todo = arrayOfTodos[index]
    const addLi = document.createElement('li')
    const newText = document.createTextNode(todo.title)
    addLi.appendChild(newText)
    olElement.appendChild(addLi)
  }
}

const filterTodos = () => {
  olElement.innerHTML = null
  // const getUserID = document.getElementById('userIDnumber').value
  let getUserID = document.getElementById('userIDnumber').value
  const filteredTodos = arrayOfTodos.filter(todo => {
    todo.userId
    if (parseInt(getUserID) === todo.userId) {
      return todo
    }
  })
  for (let index = 0; index < filteredTodos.length; index++) {
    const todo = filteredTodos[index]
    const addLi = document.createElement('li')
    const newText = document.createTextNode(todo.title)
    addLi.setAttribute('type', 'checbox')
    document.body.appendChild(addLi)
    addLi.appendChild(newText)
    olElement.appendChild(addLi)
  }


  
  console.log('filterTodos:', filteredTodos)
}
