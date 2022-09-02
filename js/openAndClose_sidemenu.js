// const main = document.querySelector(".main-1");
const menu = document.querySelector("#menuBtn");
const cross = document.querySelector(".close_sidemenu");
const blurs = document.querySelector(".blur");
const side = document.querySelector("aside");
const figure = document.querySelector("figure");


menu.addEventListener("click", () => {
    console.log("Menu is clicked")
    blurs.classList.add("active");
    side.classList.add("active");
    figure.classList.add("active");
    
})


blurs.addEventListener("click", () => {
    blurs.classList.remove("active");
    side.classList.remove("active");
    figure.className = '';
})

cross.addEventListener("click", () => {
    blurs.classList.remove("active");
    side.classList.remove("active");
    figure.className = '';
})
