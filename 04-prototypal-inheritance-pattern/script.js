// ? Prototypal inheritance (Object OOP) pattern using {OBJECTS}

const adder = {
  people: ["kate", "amber", "brick", "chester"],
};

// root functions
const rootFuncs = Object.create(adder); // inherits prototype of adder
rootFuncs.cacheDOM = function () {
  this.mainContainer = document.querySelector(".container");
  this.input = this.mainContainer.querySelector("#forename");
  this.button = this.mainContainer.querySelector(".submit");
  this.ul = this.mainContainer.querySelector("#list");
};

rootFuncs.bindEvents = function () {
  this.button.addEventListener("click", this.addToList.bind(this));
};

// handler functions
const handlerFuncs = Object.create(rootFuncs); // inherits proto of root funcs
handlerFuncs.addToList = function (event) {
  event.preventDefault();

  const name = this.isInput();
  this.input.value = "";
  if (!name) {
    alert("input field cannot be empty");
    return;
  }
  this.people.push(name);
};

handlerFuncs.isInput = function () {
  return this.input.value.trim() === ""
    ? false
    : this.input.value.trim().toLowerCase();
};

const init = Object.create(handlerFuncs); // inherits proto of handlerFuncs
init.cacheDOM();
init.bindEvents();

console.dir(init);
