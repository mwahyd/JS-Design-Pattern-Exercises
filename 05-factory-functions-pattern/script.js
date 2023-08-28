/* 
! The factory functions and the Module Pattern are very similar. They can create APIs
The main difference is how they are created.

- The "Module Pattern" uses private and public attributes and methods // * BUT it is invoked IMMEDIATELY IIFE

- Facotry Functions also uses private and public attrs and methods // * BUT can be used over and over again

- In Both METHODS: we use the // * Return statement and pass everything we want to be publicly available in an object (key value pairs)
... which therefore creates // ? APIs 
*/

// ! NOTE:
/* 
1. since we are using a FUNCTION instead of an object, we do not need to create an "init()" to initialise

* The 'LOCAL SCOPE' of the FUNCTION itself is the // ? INIT method.
The Closure is only able to access vars in its own scope and its lexical scope AKA parent Function's scope. It cannot get ...
... vars from sibling function's scopes.

* Since it is function scoped, we do not need to use the // ? "THIS" keyword

*/

// - Factory Functions Pattern

const peopleAdder = function (...names) {
  const _people = names;

  // cache DOM
  const _mainContainer = document.querySelector(".container");
  const _input = _mainContainer.querySelector("#forename");
  const _button = _mainContainer.querySelector(".submit");
  const _ul = _mainContainer.querySelector("#list");

  // bind events
  _button.addEventListener("click", addName);

  // root functions

  // private functions

  // public functions
  function addName(eventORvalue) {
    const name =
      typeof eventORvalue === "string"
        ? eventORvalue.trim().toLowerCase()
        : _input.value.trim().toLowerCase();

    if (name === "") {
      alert("Input field empty");
      return;
    }

    _input.value = "";
    _people.push(name);
    console.log(_people);
  }

  return {
    addName: addName,
  };
};

const people = peopleAdder("james", "jessie", "laurent", "cindy");
