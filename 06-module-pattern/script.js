/* 
! The factory functions and the Module Pattern are very similar. They can create APIs
The main difference is how they are created.

- The "Module Pattern" uses private and public attributes and methods // * BUT it is invoked IMMEDIATELY IIFE

- Facotry Functions also uses private and public attrs and methods // * BUT can be used over and over again

- In Both METHODS: we use the // * Return statement and pass everything we want to be publicly available in an object (key value pairs)
... therefore which creates // ? APIs 
*/

// ! NOTE:
/* 
1. we need to wrap the function with parantheses, since we need the code to be EVALUATED FIRST before calling
2. since we are using a FUNCTION instead of an object, we do not need to create an "init()" to initialise

* The 'LOCAL SCOPE' of the FUNCTION itself is the // ? INIT method.

* Since it is function scoped, we do not need to use the // ? "THIS" keyword

*/

const peopleAdder = (function (...names) {
  const _people = names;

  //   cache DOM
  const _mainContainer = document.querySelector(".container");
  const _input = _mainContainer.querySelector("#forename");
  const _button = _mainContainer.querySelector(".submit");
  const _ul = _mainContainer.querySelector("#list");

  //   bind events
  _button.addEventListener("click", addName);
  _input.addEventListener("keypress", _checkEnterKey);

  function _render() {
    _ul.innerHTML = "";
    _people.forEach((person, index) => {
      const li = document.createElement("li");
      const name = document.createElement("span");
      const del = document.createElement("span");

      li.setAttribute("data-index", index);
      del.classList.add("delete");
      name.textContent = person;
      del.textContent = "X";

      li.appendChild(name);
      li.appendChild(del);

      _ul.appendChild(li);
    });
  }

  _render();

  //   handler function
  function addName(eventORval) {
    // accept name from API call and from input field
    const name =
      typeof eventORval === "string"
        ? eventORval.trim().toLowerCase()
        : _input.value.trim().toLowerCase();

    if (name === "") {
      alert("Name field cannot be empty");
      return;
    }
    _input.value = "";
    _people.push(name);
    _render();
  }

  function _checkEnterKey(event) {
    if (event.key === "Enter") {
      addName(event);
    }
  }

  return {
    addName,
  };
})("jessie", "ash", "brock", "meowth");
