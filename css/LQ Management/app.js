

const element = document.querySelector(".nav-item");

element.addEventListener("mouseover", event => {
  console.log("Mouse over");
});

element.addEventListener("mouseout", event => {
  console.log("Mouse out");
});
