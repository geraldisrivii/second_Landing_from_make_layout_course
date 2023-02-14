// Define elements
let list = document.querySelector(".grid-box")
let button = document.querySelector('.button-gamburger')
let nav_bar = document.querySelector(".nav-bar")
let nav_list = document.querySelector(".nav-bar__list")
let header = document.querySelector(".first-container-description__header")

button.onclick = () => {
  let max_hand = Math.max(window.innerWidth, window.innerHeight)
  if(button.checked){
    nav_bar.style.transform = `scale(${(max_hand / nav_bar.clientWidth) * 2.5})`
    nav_list.style.width = "100%"
    nav_list.style.opacity = "1"
  }
  else{
    nav_bar.style.transform = "scale(1)"
    nav_list.style.width = "0%"
    nav_list.style.opacity = "0"
  }
}
