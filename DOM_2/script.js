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

  const username = document.getElementById("userName").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const password = document.getElementById("password").value.trim();
  const email = document.getElementById("email").value.trim();
  const gender = document.querySelector("input[name='gender']:checked");
  const terms = document.getElementById("terms").checked;

  if (username.length < 2 || username.length > 20) {
    return errorHandler("username is not valid");
  }

  if (lastname.length < 4 || lastname.length > 30) {
    return errorHandler("lastname is not valid");
  }
  if (password.length < 8) {
    return errorHandler("password is too short");
  }
  if (email.length < 8 || email.length > 30) {
    return errorHandler("email is not valid");
  }
  if (!gender) {
    return errorHandler("please select your gender");
  }
  if (!terms) {
    return errorHandler("please read our terms");
  }

  const user = {
    name: username,
    lastname: lastname,
    mail: email,
    password: password,
    gender: gender.value,
    terms: terms,
  };
  console.log(user);
});

function errorHandler(errorText) {
  error_message.textContent = errorText;
}
