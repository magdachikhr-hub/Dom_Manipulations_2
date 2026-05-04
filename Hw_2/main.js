const text = document.querySelector(".paragraph");
const textTwo = document.querySelector(".text_two");
const clickBtn = document.querySelector(".btn");
const btn = document.querySelector(".btn_two");
const textThree = document.querySelector(".text_three");
const btnTwo = document.querySelector(".btn_toggle");
const textFour = document.querySelector(".text_four");

//

text.addEventListener("click", () => {
  text.textContent = "show less";
});

clickBtn.addEventListener("click", () => {
  textTwo.textContent = "text changed";
});

btn.addEventListener("click", () => {
  textThree.classList.add("hidden");
});

btnTwo.addEventListener("click", () => {
  textFour.classList.toggle("hidden");
});
