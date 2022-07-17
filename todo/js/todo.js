const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

let toDos = [];

function saveToDo(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const todo_text = document.createElement("span");
    todo_text.innerText = newTodo.text;
    const todo_button = document.createElement("button");
    todo_button.innerText = "X";
    todo_button.addEventListener("click", deleteToDo);
    
    li.appendChild(todo_text);
    li.appendChild(todo_button);

    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDo();
    }

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDo = localStorage.getItem("todos");

if (savedToDo !== null){
    const parsedToDo = JSON.parse(savedToDo);
    toDos = parsedToDo;
    parsedToDo.forEach(paintToDo);
}