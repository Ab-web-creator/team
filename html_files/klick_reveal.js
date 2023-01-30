const  clickReveal  = (target_word, target_foto) => {
    const word = document.querySelector(target_word)
    const fotka = document.querySelector(target_foto)

    word.addEventListener("click", () => {
        console.log("cliked 1-gap")
        fotka.style.visibility = "visible"
        fotka.style.color = "red"
       
        // word.style.color = "gray"
        // // word.style.color = "green"
        // word.style.background = "pink"

        // setTimeout(() => {
        //     fotka.style.border = "5px solid lightgray"
        // }, 4000)

        // setTimeout(() => {
        //     word.style.background = "none"
        // }, 6000)
    })
   }
   
   clickReveal(".soz1", ".hidden_underlined1")
   clickReveal(".soz2", ".hidden_underlined2")
   clickReveal(".soz3", ".hidden_underlined3")
   clickReveal(".soz4", ".hidden_underlined4")
   clickReveal(".soz5", ".hidden_underlined5")
   clickReveal(".soz6", ".hidden_underlined6")
  
   

