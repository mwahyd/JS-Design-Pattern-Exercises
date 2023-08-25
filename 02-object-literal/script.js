// object literal pattern - people adder

const peopleAdder = {
  people: ["jackson", "fisher", "bobby"],

  init: function () {
    this.cacheDOM();
    this.bindEvents();
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
    document.addEventListener("DOMContentLoaded", this.render.bind(this));

    this.button.addEventListener("click", this.addToList.bind(this));
    this.input.addEventListener("keypress", this.checkKeypress.bind(this));
  },

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

  isInput: function () {
    return this.input.value.trim() === ""
      ? false
      : this.input.value.trim().toLowerCase();
  },

  checkKeypress: function (event) {
    if (event.key === "Enter") {
      this.addToList(event);
    }
  },
};

peopleAdder.init();
