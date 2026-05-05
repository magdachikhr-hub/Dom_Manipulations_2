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
