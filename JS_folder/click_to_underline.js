const  click_to_underline  = (target_undrln) => {
    const button = document.querySelector(target_undrln)
    button.addEventListener("click", () => {
       button.style.textDecoration = "underline"
    })
   }
 
   click_to_underline(".hebben_form1")
   click_to_underline(".hebben_form2")
   click_to_underline(".hebben_form3")
   click_to_underline(".hebben_form4")
   click_to_underline(".hebben_form5")
   click_to_underline(".hebben_form6")
   click_to_underline(".hebben_form7")