// objects

const colors = ["red", "green", "blue"];

// const user = {}; //how objects are created

const user = {
  userName: "athena",
  age: 23,
  isActive: true,
  themes: {
    darkMode: "black",
    lightMode: "white",
  },
  right: ["get", "delete"],
};

user.themes.darkMode = "grey";

console.log(user.age);

const colorsTwo = colors;

colorsTwo[0] = "purple";

console.log(colors);
console.log(colorsTwo);

const admin = user;

admin.post = true;

//
//make a copy - spread op.

const obj = {
  name: "magda",
};

const adminOne = {
  ...user,
  ...obj,
};

adminOne.post = true;

//

const newArr = [...colors];

newArr.push("yellow");
console.log(newArr);

//also named reference types
//მუტაციური- განიცდის ორიგინალი ცვლილებას

//

// value types - mnishvnelobebzea damokidebuli
//არა მუტაციური- არ განიცდის ორიგინალი ცვლილებას
const number = 25;
const string = "text";

const new1 = string.toUpperCase();
console.log(new1);

//
const arr2 = [1, 2, 3, 4, 5];

const mergeArr = [...colors, ...arr2];
console.log(mergeArr);

//

const webUser = {
  name: "magda",
  surname: "chi",
  image: "./hi.png",
  age: 20,
  isActive: true,
};

const profileImg = document.getElementById("profile_img");
const userName = document.querySelector(".userName");
const age = document.getElementById("age");
const isActive = document.getElementById("is_active");

profileImg.setAttribute("src", webUser.image);

console.log(profileImg);
console.log(webUser.image);

age.textContent = webUser.age;
userName.textContent = webUser.name + " " + webUser.surname;
// isActive.textContent = webUser.isActive;
webUser.isActive
  ? (isActive.textContent = "online")
  : (isActive.textContent = "offline");
// userName.textContent = `name is ${webUser.name} surname is ${webUser.surname}`
