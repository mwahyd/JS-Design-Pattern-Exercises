const input = document.querySelector("input");
const submit = document.querySelector("button");
const ul = document.querySelector("#list");

// vars
const people = ["william", "laura", "simone", "davids"];

// handlers
function displayOnDOM() {
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

function addToList(event) {
  event.preventDefault();

  const name = isInput();
  input.value = "";
  if (!name) {
    alert("please enter a name");
    return;
  }
  people.push(name);

  displayOnDOM();
}

function checkKeyPress(event) {
  if (event.key === "Enter") {
    addToList(event);
  }
}

function deleteItem(event) {
  if (!event.target.classList.contains("delete")) {
    return;
  }
  const index = event.target.parentElement.getAttribute("data-index");
  people.splice(index, 1);

  displayOnDOM();
}

// action functions
function isInput() {
  return input.value.trim() === "" ? false : input.value.trim().toLowerCase();
}

// event listeners
submit.addEventListener("click", addToList);
input.addEventListener("keypress", checkKeyPress);
document.addEventListener("DOMContentLoaded", displayOnDOM);
ul.addEventListener("click", deleteItem);
