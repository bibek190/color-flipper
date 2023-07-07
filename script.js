const color = document.querySelector(".color");
const wrapper = document.querySelector(".wrapper");
const button = document.querySelector("#btn");

const changeBg = () => {
  const random = Math.random().toString(16).substring(2, 8);
  wrapper.style.backgroundColor = `#${random}`;
  color.innerHTML = `#${random}`;
  color.style.color = `#${random}`;
};
button.addEventListener("click", changeBg);
