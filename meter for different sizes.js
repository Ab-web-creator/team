// We are not using this js for this project 

  let btn = document.querySelector('button');
  let screenSize = document.querySelector('#screenSize');
  let windowSize = document.querySelector('#windowSize');
  let contentSize = document.querySelector('#contentSize');

  btn.addEventListener('click', () => {
    screenSize.innerText = `Screen height: ${screen.height}. Screen width: ${screen.width}.`
    windowSize.innerText = `window height: ${window.outerHeight}. window width: ${window.outerWidth}.`
    contentSize.innerText = `content height: ${window.innerHeight}. Content width: ${window.innerWidth}.`
    
  })
