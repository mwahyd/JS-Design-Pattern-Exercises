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

  bindEvents: function () {
    this.button.addEventListener("click", this.addToList.bind(this));
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
    console.log(this.people);
  },

  isInput: function () {
    return this.input.value.trim() === ""
      ? false
      : this.input.value.trim().toLowerCase();
  },
};

peopleAdder.init();
