// const main = document.querySelector(".main-1");
const menu = document.querySelector("#menuBtn");
const menu2 = document.querySelector("#dmenuBtn");
const cross = document.querySelector("#close_sidemenu");
const goHome = document.querySelector("#home_sidemenu");
const blurs = document.querySelector(".blur");
const side = document.querySelector("aside");


menu.addEventListener("click", () => {
    console.log("Menu is clicked");
    blurs.classList.add("active");
    side.classList.add("active");
    // figure.classList.add("active");
})

cross.addEventListener("click", () => {
    blurs.classList.remove("active");
    side.classList.remove("active");
    // figure.className = '';
})

goHome.addEventListener("click", () => {
    blurs.classList.remove("active");
    side.classList.remove("active");
    figure.className = '';
    window.open("../index.html", "_self")
})

menu2.addEventListener("mouseover", () => {
    setTimeout(() => {
        side.classList.add("active");
        figure.classList.add("active");
    }, 500)

    setTimeout(() => {
        blurs.classList.add("active");
    }, 1000)
})


blurs.addEventListener("click", () => {
    setTimeout(() => {
    blurs.classList.remove("active");
    side.classList.remove("active");
    }, 100)
})
