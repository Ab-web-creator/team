const  waar_of_niet_waar  = (target, color="pink") => {
 const button = document.querySelector(target)
 button.addEventListener("click", () => {
    button.style.background = color
 })
}

waar_of_niet_waar(".red_green1", "lightgreen")
waar_of_niet_waar(".red_green2", "red")
waar_of_niet_waar(".red_green3", "lightgreen")
waar_of_niet_waar(".red_green4", "red")
waar_of_niet_waar(".red_green5", "red")
waar_of_niet_waar(".red_green6", "lightgreen")
waar_of_niet_waar(".red_green7", "lightgreen")
waar_of_niet_waar(".red_green8", "red")
