import { createTodo, refrestTodoList, todos } from "./todo";
function loadNav() {
  const nav = document.createElement("nav");
  nav.classList.add("nav-container");
  nav.appendChild(createButton("Add Todo"));
  return nav;
}

function createButton(name) {
  const btn = document.createElement("button");
  btn.textContent = name;
  btn.classList.add("nav-item");
  btn.addEventListener("click", handleAddClick);
  return btn;
}

function handleAddClick() {
  const todo = createTodo("Buy Groceries", "But Amul Milk from local store");
  todos.push(createTodo("Buy Monitor", "Get a good 27' from Amazon"));
  todos.push(todo);
  refrestTodoList();
  alert(`Add Btn is clicked`);
}

export default loadNav;
