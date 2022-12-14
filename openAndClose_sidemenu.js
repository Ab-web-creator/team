// const main = document.querySelector(".main-1");
const menu = document.querySelector("#menuBtn");
const cross = document.querySelector("#close_sidemenu");
const goHome = document.querySelector("#home_sidemenu");
const blurs = document.querySelector(".blur");
const side = document.querySelector("aside");


// menu.addEventListener("click", () => {
//     console.log("Menu is clicked");
//     blurs.classList.add("active");
//     side.classList.add("active");
//     // figure.classList.add("active");
// })

menu.addEventListener("click", () => {
    setTimeout(() => {
        side.classList.add("active");
    }, 50)

    setTimeout(() => {
        blurs.classList.add("active");
    }, 51)
})

cross.addEventListener("click", () => {
    setTimeout(() => {
        blurs.classList.remove("active");
        side.classList.remove("active");
    }, 51)
})

goHome.addEventListener("click", () => {
    blurs.classList.remove("active");
    side.classList.remove("active");
    figure.className = '';
    window.open("../index.html", "_self")
})




blurs.addEventListener("click", () => {
    setTimeout(() => {
    blurs.classList.remove("active");
    side.classList.remove("active");
    }, 100)
})
