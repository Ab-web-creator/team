const  lishniysi_qaysi  = (target, color, brdColor, colorTimeDuration, borderTimeDuration, chiziq) => {
    const button = document.querySelectorAll(target)
    // const span_in = document.querySelector(".correct_choise_span")
   

    button.forEach((b) => {
        b.addEventListener("click", () => {
            b.style.color = color
            b.style.borderBottom = brdColor
           
            setTimeout(() => {
                b.classList.add(chiziq)
            }, 1000)

            setTimeout(() => {
                b.style.borderBottom = "0.1px solid lightgray"
            }, borderTimeDuration)

            setTimeout(() => {
                b.style.color = "blue"
            }, colorTimeDuration)
         })
    })
   }

    lishniysi_qaysi(".correct_choise", "green", "0.1px solid", 400000, 2000, "chizib_tashla")
    lishniysi_qaysi(".incorrect_choise", "red", "0.1px solid", 2000, 1000, "chizma")

    