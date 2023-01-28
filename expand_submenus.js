const  expand_submenus  = (knopka, target) => {
    const knopkam = document.querySelector(knopka)
    const submenum = document.querySelector(target)
    knopkam.addEventListener("click", () => {
        submenum.classList.toggle("expanded")
    })
   }
   
   expand_submenus(".li_tema1", ".ul_tema1")
   expand_submenus(".li_tema2", ".ul_tema2")
   expand_submenus(".li_tema3", ".ul_tema3")
   expand_submenus(".li_tema4", ".ul_tema4")
   expand_submenus(".li_tema5", ".ul_tema5")
   expand_submenus(".li_tema6", ".ul_tema6")
   expand_submenus(".li_tema7", ".ul_tema7")
   expand_submenus(".li_tema8", ".ul_tema8")
   