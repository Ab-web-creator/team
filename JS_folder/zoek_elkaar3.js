const  zoekElkaar3 = (target_word, target_foto) => {
    const word = document.querySelector(target_word)
    const fotka = document.querySelector(target_foto)

    word.addEventListener("click", () => {
        fotka.style.border = "5px solid green"
        // fotka.style.visibility = "visible"

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
   
   zoekElkaar3(".kalima10", ".fotka50")
   zoekElkaar3(".kalima20", ".fotka10")
   zoekElkaar3(".kalima30", ".fotka40")
   zoekElkaar3(".kalima40", ".fotka20")
   zoekElkaar3(".kalima50", ".fotka60")
   zoekElkaar3(".kalima60", ".fotka30")
   