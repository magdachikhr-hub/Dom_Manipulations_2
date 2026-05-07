//form validation
// same code as main.js

//preventDefault() - prevents elements default
// value - when you want to know what was written inside the input
//const usernamevalue = username.value - can also be used like this

const form = document.getElementById("register_form");
const error_message = document.getElementById("error_message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  error_message.textContent = "";

  const username = document.getElementById("userName").value;
  const lastname = document.getElementById("lastname").value;

  if (username.length < 2) {
    return errorHandler("username is too short");
  }

  if (lastname.length < 4) {
    return errorHandler("lastname is too short");
  }
});

function errorHandler(errorText) {
  error_message.textContent = errorText;
}
