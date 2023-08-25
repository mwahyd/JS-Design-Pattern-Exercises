// ? constructor pattern / NEW keyword - people adder

function PeopleAdder(...names) {
  this.people = names;
}

// initialiser
PeopleAdder.prototype.init = function () {
  this.cacheDOM();
  this.bindEvents();
  this.render();
};

// hander functions
PeopleAdder.prototype.cacheDOM = function () {
  this.mainContainer = document.querySelector(".container");
  this.input = this.mainContainer.querySelector("#forename");
  this.button = this.mainContainer.querySelector(".submit");
  this.ul = this.mainContainer.querySelector("#list");
};

PeopleAdder.prototype.bindEvents = function () {
  this.button.addEventListener("click", this.addToList.bind(this));
  this.input.addEventListener("keypress", this.checkKeypress.bind(this));
  this.ul.addEventListener("click", this.deleteItem.bind(this));
};

PeopleAdder.prototype.render = function () {
  this.ul.innerHTML = "";
  this.people.forEach((person, index) => {
    const li = document.createElement("li");
    const name = document.createElement("span");
    const del = document.createElement("span");

    li.setAttribute("data-index", index);
    del.classList.add("delete");

    name.textContent = person;
    del.textContent = "X";

    li.appendChild(name);
    li.appendChild(del);

    this.ul.appendChild(li);
  });
};

PeopleAdder.prototype.addToList = function (event) {
  event.preventDefault();

  const name = this.isInput();
  this.input.value = "";
  if (!name) {
    alert("Text field cannot be empty");
    return;
  }
  this.people.push(name);

  this.render();
};

PeopleAdder.prototype.deleteItem = function (event) {
  if (!event.target.classList.contains("delete")) {
    return;
  }
  const index = event.target.parentElement.getAttribute("data-index");
  this.people.splice(index, 1);
  this.render();
};

// support functions
PeopleAdder.prototype.isInput = function () {
  return this.input.value.trim() === ""
    ? false
    : this.input.value.trim().toLowerCase();
};

PeopleAdder.prototype.checkKeypress = function (event) {
  if (event.key === "Enter") {
    this.addToList(event);
  }
};

const people = new PeopleAdder("mandy", "arnold", "jessica", "bobby");

people.init();
