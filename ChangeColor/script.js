const bodybcg = document.querySelector("body");
const colorBtn = document.querySelector(".colorbtn");

const colors = ["yellow", "green", "red", "#3b5998"];

colorBtn.addEventListener("click", changeColor);

function changeColor() {
  // bodybcg.style.backgroundColor = colors[2];
  let random = Math.floor(Math.random() * colors.length);
  bodybcg.style.backgroundColor = colors[random];
}
