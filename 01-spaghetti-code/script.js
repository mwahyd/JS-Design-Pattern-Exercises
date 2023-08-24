const input = document.querySelector("input");
const submit = document.querySelector("button");
const ul = document.querySelector("#list");

// vars
const people = ["william", "laura", "simone", "davids"];

// handlers
function addItem(event) {
  event.preventDefault();

  if (!isInput()) {
    alert("Enter a name.");
    return;
  }

  const name = isInput();
  console.log(name);
}

function displayOnDOM(event) {
  ul.innerHTML = "";
  people.forEach((person, index) => {
    const li = document.createElement("li");
    const name = document.createElement("span");
    const del = document.createElement("span");

    li.setAttribute("data-index", index);
    name.classList.add("name");
    del.classList.add("delete");

    name.textContent = person;
    del.textContent = "X";

    li.appendChild(name);
    li.appendChild(del);

    ul.appendChild(li);
  });
}

// action functions
function isInput() {
  input.value.trim() === "" ? false : input.value.trim().toLowerCase();
}

// event listeners
submit.addEventListener("click", addItem);
document.addEventListener("DOMContentLoaded", displayOnDOM);
