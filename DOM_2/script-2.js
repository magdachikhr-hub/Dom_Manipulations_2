// second version

const form = document.getElementById("register_form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const user = {
    name: data.get("username"),
    lastname: data.get("lastname"),
    mail: data.get("email"),
    password: data.get("password"),
    gender: data.get("gender"),
    terms: data.get("terms"),
  };
});

//formdata connects to the name attribute
