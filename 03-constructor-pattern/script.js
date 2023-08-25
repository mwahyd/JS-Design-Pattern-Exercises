// ? constructor pattern / NEW keyword - people adder

function PeopleAdder(...names) {
  this.people = names;
}

// initialiser
PeopleAdder.prototype.init = function () {
  this.cacheDOM();
  this.bindEvents();
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
  console.log(this.people);
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
console.log(people);
