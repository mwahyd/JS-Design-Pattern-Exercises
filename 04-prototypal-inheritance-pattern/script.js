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
  this.input.addEventListener("keypress", this.checkKeypress.bind(this));
};

rootFuncs.render = function () {
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

  this.render();
};

handlerFuncs.checkKeypress = function (event) {
  if (event.key === "Enter") {
    this.addToList(event);
  }
};

handlerFuncs.isInput = function () {
  return this.input.value.trim() === ""
    ? false
    : this.input.value.trim().toLowerCase();
};

const init = Object.create(handlerFuncs); // inherits proto of handlerFuncs
init.cacheDOM();
init.bindEvents();
init.render();

console.dir(init);
