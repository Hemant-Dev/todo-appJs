let todos = [];

function loadTodo() {
  const todoContainer = document.createElement("main");
  todoContainer.classList.add("todo-container");
  // todos.push(createTodo("Buy Monitor", "Get a good 27' from Amazon"));
  return todoContainer;
}

function createTodo(title, description) {
  const todo = document.createElement("div");
  const titleElement = document.createElement("h3");
  const descriptionElement = document.createElement("p");

  todo.classList.add("todo-item");
  todo.style.backgroundColor = "lime";
  titleElement.textContent = title;
  descriptionElement.textContent = description;
  todo.appendChild(titleElement);
  todo.appendChild(descriptionElement);
  return todo;
}

function refrestTodoList() {
  const todoContainer = document.querySelector(".todo-container");
  todoContainer.textContent = "";

  for (let todo of todos) {
    todoContainer.appendChild(todo);
  }
}

export default loadTodo;
export { createTodo, todos, refrestTodoList };
