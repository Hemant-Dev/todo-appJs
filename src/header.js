function craeateHeader(string) {
  const header = document.createElement("h1");
  header.textContent = string;
  return header;
}

function loadHeader() {
  const header = craeateHeader("Todo App");
  const container = document.querySelector(".container");
  container.appendChild(header);
}

export default loadHeader;
