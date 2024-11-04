let todos = [];

function addTodo() {
  const input = document.getElementById("todo-input");
  const todoText = input.value.trim();

  if (todoText) {
    todos.push({
      text: todoText,
      completed: false,
    });
    input.value = "";
    renderTodos();
  }
}

function toggleTodo(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function renderTodos() {
  const container = document.getElementById("todo-container");
  container.innerHTML = "";

  todos.forEach((todo, index) => {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.onclick = () => toggleTodo(index);

    const todoText = document.createElement("span");
    todoText.className = `todo-text ${todo.completed ? "completed" : ""}`;
    todoText.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTodo(index);

    todoDiv.appendChild(checkbox);
    todoDiv.appendChild(todoText);
    todoDiv.appendChild(deleteButton);
    container.appendChild(todoDiv);
  });
}
