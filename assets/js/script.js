const dropdown = document.querySelector('.dropdown')
const drop = document.querySelector('.drop')
const menu = document.querySelector('.menu')


dropdown.addEventListener('mouseover', () => {
  menu.style.display = 'flex'
  drop.style.transform = 'rotate3d(0, 0, 1, 180deg)'
})

dropdown.addEventListener('mouseleave', () => {
  menu.style.display = 'none'
  drop.style.transform = 'rotate3d(0, 0, 1, 0deg)'
})
function getImagePreview(event) {
  var image = URL.createObjectURL(event.target.files[0]);
  var imagediv = document.getElementById("preview");
  var newimg = document.createElement("img");
  imagediv.innerHTML = "";
  newimg.src = image;
  newimg.width = "250";
  imagediv.appendChild(newimg);
}

let reviewBtn = document.querySelectorAll('.review_btn')
let reviewPost = document.querySelectorAll('.review_post')

reviewBtn.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    reviewPost.forEach((post)=>{
      if (e.target.id == post.id) {
        post.classList.toggle("review_item");
    } else {
        post.classList.remove("review_item");
    }
    })
  })
})