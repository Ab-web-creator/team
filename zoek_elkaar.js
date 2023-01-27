const  zoekElkaar  = (target_word, target_foto) => {
    const word = document.querySelector(target_word)
    const fotka = document.querySelector(target_foto)

    word.addEventListener("click", () => {
    

        fotka.style.border = "5px solid green"
        console.log("cliked 1-gap")
        word.style.color = "gray"
        // word.style.color = "green"
        word.style.background = "pink"

        setTimeout(() => {
            fotka.style.border = "5px solid lightgray"
        }, 4000)

        setTimeout(() => {
            word.style.background = "none"
        }, 6000)
        
    })
   }
   
   zoekElkaar(".kalima1", ".fotka2")
   zoekElkaar(".kalima2", ".fotka6")
   zoekElkaar(".kalima3", ".fotka1")
   zoekElkaar(".kalima4", ".fotka3")
   zoekElkaar(".kalima5", ".fotka5")
   zoekElkaar(".kalima6", ".fotka4")