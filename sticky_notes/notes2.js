const questions = document.querySelectorAll(".savol");

questions.forEach(function (question) {
    const btn = question.querySelector(".savol-btn");
    const savol = question.querySelector(".savol-text");

    savol.addEventListener("click", function() {
        questions.forEach(function (ddd) {
            if (ddd !== question) {
                ddd.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");
    });
});



// const btns = document.querySelectorAll(".savol-btn");

// btns.forEach(function (btn) {
//     btn.addEventListener("click", function(e) {
//         const savol = e.currentTarget.parentElement.parentElement;
//         savol.classList.toggle("show-text")
//     })
// })