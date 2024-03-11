import loadHeader from "./header";
import loadNav from "./nav";
import loadTodo from "./todo";
import "./styles/website.css";

function initializeWebsite() {
  const container = document.createElement("div");
  const body = document.querySelector("body");
  container.classList.add("container");
  body.appendChild(container);
  container.appendChild(loadHeader());
  container.appendChild(loadNav());
  container.appendChild(loadTodo());
}

initializeWebsite();
