const mainDiv = document.querySelector('.main-1')
const h1 = document.querySelector('.head-1')
const h2 = document.querySelector('.head-2')
const h3 = document.querySelector('.head-3')
const h4 = document.querySelector('.head-4')

const l1 = document.querySelector('.login-1')
const l2 = document.querySelector('.login-2')
const l3 = document.querySelector('.login-3')
const l4 = document.querySelector('.login-4')

const page1 = document.getElementById('page-1')
const page2 = document.getElementById('page-2')
const page3 = document.getElementById('page-3')
const page4 = document.getElementById('page-4')

// // // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
// let vh = window.innerHeight * 0.01
// // Then we set the value in the --vh custom property to the root of the document
// document.documentElement.style.setProperty('--vh', `${vh}px`)

// console.log(document.querySelector('.main-1'))
mainDiv.addEventListener('scroll', () => {
  //   console.log(mainDiv.scrollHeight)

  const scrollHeight = mainDiv.scrollHeight

  //   console.log(page1.scrollHeight)

  //   console.log(page2.scrollHeight)

  const top = mainDiv.scrollTop

  console.log(top)

  if (
    (top == 0 &&
      top <
        scrollHeight -
          (page2.scrollHeight + page3.scrollHeight + page4.scrollHeight)) ||
    (top > 0 &&
      top <
        scrollHeight -
          (page2.scrollHeight + page3.scrollHeight + page4.scrollHeight))
  ) {
    console.log(
      '1',
      top <
        scrollHeight -
          (page2.scrollHeight + page3.scrollHeight + page4.scrollHeight),
    )
    console.log('1')
    h2.classList.remove('active')
    l2.classList.remove('active')
    h3.classList.remove('active')
    l3.classList.remove('active')
    h4.classList.remove('active')
    l4.classList.remove('active')
    

    h1.style.opacity = 1
    l1.style.opacity = 1
    
    h1.classList.add('active')
    l1.classList.add('active')


  }

  if (
    (top ==
      scrollHeight -
        (page2.scrollHeight + page3.scrollHeight + page4.scrollHeight) &&
      top < scrollHeight - (page3.scrollHeight + page4.scrollHeight)) ||
    (top >
      scrollHeight -
        (page2.scrollHeight + page3.scrollHeight + page4.scrollHeight) &&
      top < scrollHeight - (page3.scrollHeight + page4.scrollHeight))
  ) {
    console.log('2')
    
    h1.classList.remove('active')
    l1.classList.remove('active')

    h1.style.opacity = 0
    l1.style.opacity = 0

    h3.classList.remove('active')
    l3.classList.remove('active')

    h4.classList.remove('active')
    l4.classList.remove('active')

    h2.classList.add('active')
    l2.classList.add('active')
  }

  if (
    (top == scrollHeight - (page3.scrollHeight + page4.scrollHeight) &&
      top < scrollHeight - page4.scrollHeight) ||
    (top > scrollHeight - (page3.scrollHeight + page4.scrollHeight) &&
      top < scrollHeight - page4.scrollHeight)
  ) {
    console.log('3')
    h1.classList.remove('active')
    l1.classList.remove('active')

    h2.classList.remove('active')
    l2.classList.remove('active')

    h4.classList.remove('active')
    l4.classList.remove('active')

    h3.classList.add('active')
    l3.classList.add('active')
  }

  if (top == scrollHeight - page4.scrollHeight) {
    console.log('4')
    h1.classList.remove('active')
    l1.classList.remove('active')
    h2.classList.remove('active')
    l2.classList.remove('active')
    h3.classList.remove('active')
    l3.classList.remove('active')
    h4.classList.add('active')
    l4.classList.add('active')
  }
})
