import loadHeader from "./header";
import "./styles/website.css";
function initializeWebsite() {
  const container = document.createElement("div");
  const body = document.querySelector("body");
  container.classList.add("container");
  body.appendChild(container);
  loadHeader();
}

initializeWebsite();
