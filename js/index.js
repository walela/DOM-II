// Your code goes here
let navLinks = document.querySelectorAll("nav a");

const audio = new Audio("./js/buttonclick.mp3");

navLinks.forEach(function(link) {
  link.addEventListener("dblclick", function() {
    audio.play();
  });
  link.addEventListener("mouseover", function(e) {
    e.target.style.padding = "10px";
    e.target.style.backgroundColor = "#D3D3D3";
    e.target.style.textDecoration = "underline";
  });
  link.addEventListener("mouseout", function(e) {
    e.target.style.padding = null;
    e.target.style.backgroundColor = null;
    e.target.style.textDecoration = null;
  });
});

function LogSize(width, height) {
  let heading = document.querySelector(".container h6");
  heading.textContent = `Current Size: ${width}px x ${height}px`;
}

window.addEventListener("load", function() {
  LogSize(window.innerWidth, window.innerHeight);
});

window.addEventListener("resize", function() {
  LogSize(window.innerWidth, window.innerHeight);
});
