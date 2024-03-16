import { format } from "date-fns";
import { refreshTodoList, todos, createTodo } from "./todo";
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
  let date = format(new Date(2024, 1, 1), "yyyy-mm-dd");
  todos.push(
    createTodo("Buy Monitor", "Get a good 27' from Amazon", date, "High")
  );
  refreshTodoList();
  //   alert(`Add Btn is clicked`);
}

export default loadNav;
