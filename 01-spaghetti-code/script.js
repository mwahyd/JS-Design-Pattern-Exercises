const input = document.querySelector("input");
const submit = document.querySelector("button");
const ul = document.querySelector("#list");

// handlers
function addItem(event) {
  event.preventDefault();

  if (!isInput()) {
    alert("Enter a name.");
    return;
  }

  const name = isInput();
  console.log(name);
}

// action functions
function isInput() {
  input.value.trim() === "" ? false : input.value.trim().toLowerCase();
}
// event listeners
submit.addEventListener("click", addItem);
