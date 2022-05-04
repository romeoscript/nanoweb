var count = document.getElementById("counter");
let count2 = setInterval(update);
let count3 = setInterval(update2);
let counts = setInterval(updated);
let upto = 0;
function updated() {
  count.innerHTML = ++upto;
  if (upto === 500) {
    clearInterval(counts);
  }
}

let option = 10;
function update() {
  var counted = document.getElementById("counter2");
  counted.innerHTML = ++option;
  if (option === 1000) {
    clearInterval(count2);
  }
}
let option1 = 10;
function update2() {
  var counted = document.getElementById("counter3");
  counted.innerHTML = ++option1;
  if (option1 === 1000) {
    clearInterval(count3);
  }
}
count.addEventListener("scroll", updated);
// const navSlide = ()=>{
//     const burger = document.querySelector(".burger")
//     const nav =d
// }

// the navigation bar
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".navlinks");

function toggler() {
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
  console.log(navLinks);
}
