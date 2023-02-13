function allowDrop(div) {
    div.preventDefault();
  }
  function drag(div) {
    // console.log(div.target.id);
    // console.log(div.dataTransfer);

    div.dataTransfer.setData('text', div.target.id);
  }
  async function drop(div) {
    if (div.target.id != 'div1') {
      return;
    }

    console.log(div.target.id);
    div.preventDefault();

    let isOccupied = false;

    var array = Array.prototype.slice.call(div.target.children);

    // console.log('array', array);

    await array.forEach(async (element) => {
      // console.log(element.getAttribute('draggable'));

      if (element.getAttribute('draggable')) {
        // console.log(element);
        isOccupied = true;
        // console.log(isOccupied);s
      }
    });

    // console.log(isOccupied);

    if (isOccupied) {
      // console.log('runs  if occupied');
      return;
    }
    var data = div.dataTransfer.getData('text');

    div.target.appendChild(document.getElementById(data));
  }




// Checking the result: 

const ctrl = document.querySelector('.check_your_results')
const nishon = document.querySelectorAll('.nishon')

ctrl.addEventListener('click', () => {
  console.log('cliked 1-gap')

  nishon.forEach((resultat) => {
    // console.log(resultat)

    const containerClassName = resultat.getAttribute('class')

    if (
      containerClassName.includes('dropzone1') &&
      resultat.querySelector('#drag3')
    ) {
      resultat.style.boxShadow = "0 0 5px green"
    } else if (
      containerClassName.includes('dropzone2') &&
      resultat.querySelector('#drag5')
    ) {
      resultat.style.boxShadow = "0 0 5px green"
    } else if (
      containerClassName.includes('dropzone3') &&
      resultat.querySelector('#drag1')
    ) {
      resultat.style.boxShadow = "0 0 5px green"
    } else if (
      containerClassName.includes('dropzone4') &&
      resultat.querySelector('#drag2')
    ) {
      resultat.style.boxShadow = "0 0 5px green"
    } else if (
      containerClassName.includes('dropzone5') &&
      resultat.querySelector('#drag4')
    ) {
      resultat.style.boxShadow = "0 0 5px green"
    } else {
      resultat.style.boxShadow = "0 0 5px red"
    }
  })
})


// remove all results 

const reset = document.querySelector('.reset_your_results')
reset.addEventListener('click', () => {
  console.log('cliked 1-gap')

  nishon.forEach((resultat) => {
    resultat.style.boxShadow = ""
  })
})