const form = document.getElementById("register_form");
const errorMessage = document.getElementById("error_message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  errorMessage.textContent = "";

  const name = document.getElementById("userName");
  const lastName = document.getElementById("lastname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const gender = document.querySelector('input[name="gender"]:checked');
  const terms = document.getElementById("terms");

  if (name.value.length < 2) {
    errorHandler("please enter longer name");
  }
  if (lastName.value.length < 2 || lastName.value.length > 20) {
    errorHandler("please enter valid lastname");
  }
  if (email.value.length < 10 || email.value.length > 30) {
    errorHandler("please enter valid email");
  }
  if (password.value.length < 8) {
    errorHandler("please enter password longer that 8 character");
  }
  if (!terms.checked) {
    errorHandler("please agree with terms");
  }
  if (!gender) {
    errorHandler("please select your gender");
  }

  const user = {
    userName: name.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    gender: gender,
    terms: terms.checked,
  };
  console.log(user);
});

function errorHandler(text) {
  errorMessage.textContent = text;
}
