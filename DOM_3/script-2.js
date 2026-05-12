// second version

const form = document.getElementById("register_form");

//
const fileInput = document.getElementById("file");
//
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
    file: data.get("file_upload"),
  };

  //   const reader = new FileReader(user.file);
  //   reader.onload = (e) => {
  //     console.log(e.target.result);
  //   };
});

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    console.log(e.target.result);
    let img = document.createElement("img");

    img.setAttribute("src", e.target.result);
    document.body.append(img);
  };
  //   reader.readAsText(file);
  reader.readAsDataURL(file);
});

//formdata connects to the name attribute

// const form  = document.getElementById('register_form')

// form.addEventListener('submit', (e) =>{
//     e.preventDefault()

//     const data = new FormData(form)

//     const name = data.get('username')

//     if(name.length < 2){
//       return  errorHandler('name is invalid')
//     }

//     const user = {
//         name: name,
//         lastname: data.get('lastname'),
//         email: data.get('email'),
//         password: data.get('password'),
//         gender: data.get('gender'),
//         terms: data.get('terms')
//     }

//     console.log(user)

// })

// function errorHandler(errorText) {
//   error_message.textContent = errorText;
// }
