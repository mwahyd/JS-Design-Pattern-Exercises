// object literal pattern - people adder

const peopleAdder = {
  people: ["jackson", "fisher", "bobby"],

  init: function () {
    this.cacheDOM();
    this.bindEvents();
    this.render();
    console.log("this works");
  },

  cacheDOM: function () {
    this.mainContainer = document.querySelector(".container");
    this.input = this.mainContainer.querySelector("#forename");
    this.button = this.mainContainer.querySelector(".submit");
    this.ul = this.mainContainer.querySelector("#list");
  },

  render: function () {
    this.ul.innerHTML = "";
    this.people.forEach((person, index) => {
      const li = document.createElement("li");
      const name = document.createElement("span");
      const del = document.createElement("span");

      li.setAttribute("data-index", index);
      name.textContent = person;
      del.classList.add("delete");
      del.textContent = "X";

      li.appendChild(name);
      li.appendChild(del);

      this.ul.appendChild(li);
    });
  },

  bindEvents: function () {
    this.button.addEventListener("click", this.addToList.bind(this));
    this.input.addEventListener("keypress", this.checkKeypress.bind(this));
    this.ul.addEventListener("click", this.deleteItem.bind(this));
    this.ul.addEventListener("click", this.changeBgColour.bind(this));
  },

  // handler functions
  addToList: function (event) {
    event.preventDefault();

    const name = this.isInput();
    this.input.value = "";
    if (!name) {
      alert("Text field cannot be empty.");
      return;
    }
    this.people.push(name);

    this.render();
  },

  checkKeypress: function (event) {
    if (event.key === "Enter") {
      this.addToList(event);
    }
  },

  deleteItem: function (event) {
    if (!event.target.classList.contains("delete")) {
      return;
    }
    const index = event.target.parentElement;
    this.people.splice(index, 1);

    this.render();
  },

  changeBgColour: function (event) {
    if (event.target.nodeName !== "LI") {
      return;
    }
    const colour = Math.round(Math.random() * 255);
    const colour2 = Math.round(Math.random() * 255);
    const colour3 = Math.round(Math.random() * 255);
    event.target.style.backgroundColor = `rgb(${colour}, ${colour2}, ${colour3})`;
  },

  // support functions
  isInput: function () {
    return this.input.value.trim() === ""
      ? false
      : this.input.value.trim().toLowerCase();
  },
};

peopleAdder.init();
