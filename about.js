// the navigation bar
const toggler = document.querySelector(".toggler")
const navLinks = document.querySelector(".navlinks")


function navToggle() {
    if (navLinks.style.display === "block") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "block";
    }
    console.log(navLinks);
  }
  
  toggler.addEventListener('click',navToggle)

let displayUs = document.getElementById("displaythem")
let usDisplay = document.querySelector(".usdisplay")
let display = document.querySelector("display")

function show(){
  if (usDisplay.style.display === "block") {
    usDisplay.style.display = "none";
    display.style.display ="none"
    displayUs.textContent ="See All"
  } else {
    usDisplay.style.display = "block";
    display.style.display ="none"
    displayUs.textContent ="See Less"
  }
}

displayUs.addEventListener("click",show)