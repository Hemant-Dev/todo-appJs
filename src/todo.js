// Global Todo Tasks
let todos = [];
function loadTodo() {
  const todoContainer = document.createElement("main");
  todoContainer.classList.add("todo-container");
  return todoContainer;
}

function createTodo(title, description, dueDate, priority) {
  const todo = document.createElement("div");
  const titleElement = document.createElement("h3");
  const descriptionElement = document.createElement("p");
  const dueDateElement = document.createElement("p");
  const priorityElement = document.createElement("span");

  todo.classList.add("todo-item");
  todo.style.backgroundColor = "lime";
  titleElement.textContent = title;
  descriptionElement.textContent = description;
  dueDateElement.textContent = dueDate;
  priorityElement.textContent = priority;
  todo.appendChild(titleElement);
  todo.appendChild(descriptionElement);
  todo.appendChild(dueDateElement);
  todo.appendChild(priorityElement);
  return todo;
}

function refreshTodoList() {
  const todoContainer = document.querySelector(".todo-container");
  todoContainer.textContent = "";
  for (let todo of todos) {
    todoContainer.appendChild(todo);
  }
}

export default loadTodo;
export { createTodo, todos, refreshTodoList };
