console.log("Script is running...");

let todos = [
  {
    text: "Learn JavaScript",
    completed: false,
  },
  {
    text: "Learn React",
    completed: true,
  },
  {
    text: "do assignment",
    completed: true,
  },
  {
    text: "Take out the trash",
    completed: false,
  },
];

function addTodo() {
  //To-Do
  const inputElement = document.getElementById("todo-input");
  const inputValue = inputElement.value;

  if (inputValue != "") {
    todos.push({
      text: inputValue,
      completed: false,
    });
  }

  inputElement.value = "";

  renderTodos();
}

function toggleTodo(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
  //To-Do
}

function clearAll() {
  todos = [];
  renderTodos();
}

function renderTodos() {
  const todoContainer = document.getElementById("todo-container");
  todoContainer.innerHTML = "";
  todos.forEach((todo, index) => {
    //Create the div element
    const todoElement = document.createElement("div");
    todoElement.className = "todo-item";

    //Create the input checkbox element
    const todoCheckbox = document.createElement("input");
    todoCheckbox.type = "checkbox";
    todoCheckbox.checked = todo.completed;

    todoCheckbox.onclick = () => {
      toggleTodo(index);
    };

    const todoText = document.createElement("p");
    todoText.textContent = todo.text;

    if (todo.completed) {
      todoText.className = "completed";
    }

    todoElement.appendChild(todoCheckbox);
    todoElement.appendChild(todoText);

    todoContainer.appendChild(todoElement);
  });
}

renderTodos();
