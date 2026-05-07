//form validation
// same code as main.js

//preventDefault() - prevents elements default
// value - when you want to know what was written inside the input
//const usernamevalue = username.value - can also be used like this

const form = document.getElementById("register_form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const lastname = document.getElementById("lastname").value;

  if (username.length < 2) {
    error_message.textcontent = "username is too short";
  }

  if (lastname.length < 4) {
    error_message.textcontent = "lastname is too short";
  }
});

function errorHandler(errorText) {
  error_message.textcontent = errorText;
}
