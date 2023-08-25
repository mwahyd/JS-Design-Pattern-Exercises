// ? Prototypal inheritance pattern using OBJECTS

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
  console.log(event.target);
  event.preventDefault();

  const name = this.isInput();
};
