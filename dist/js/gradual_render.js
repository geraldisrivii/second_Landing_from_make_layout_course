let main_content = document.querySelector(".main-content");
let grid_box = document.querySelector(".grid-box");
let programm_cards = document.querySelector(".programm-cards");
let review_box = document.querySelector(".review-box");
window.addEventListener("scroll", function () {
    let amount = window.scrollY + this.document.documentElement.clientHeight;
    console.log(amount)
    for (const element of main_content.children) {
        if(amount > element.offsetTop) {
            element.classList.add("active");
        }
    }
    for (const element of grid_box.children) {
        if(amount > element.offsetTop) {
            element.classList.add("active");
        }
    }
    for (const element of programm_cards.children) {
        if(amount > element.offsetTop) {
            element.classList.add("active");
        }
    }
    for (const element of review_box.children) {
        if(amount > element.offsetTop) {
            element.classList.add("active");
            element.style.transform = "skew(-20deg)"
        }
    }
})