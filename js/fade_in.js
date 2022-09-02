// Old script. We are not using it for this website.


const sections = document.querySelectorAll('.logo')
console.log(sections)
const options = {
  root: null,
  threshold: 0,
  rootMargin: '0px',
}

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return
    }
    console.log(entry)
    if (entry.target.classList.contains('fade_in')) {
      entry.target.classList.remove('fade_in')
      setTimeout(() => {
        entry.target.classList.add('fade_in')
      }, 200)
    } else {
      setTimeout(() => {
        entry.target.classList.add('fade_in')
      }, 200)
    }
  })
}, options)

sections.forEach((section) => {
  observer.observe(section)
})



// the second element

const blueContainers = document.querySelectorAll('.blue_container')
console.log(blueContainers)
const settings = {
  root: null,
  threshold: 0,
  rootMargin: '0px',
}

const watcher = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return
    }
    console.log(entry)
    if (entry.target.classList.contains('fade_in')) {
      entry.target.classList.remove('fade_in')
      setTimeout(() => {
        entry.target.classList.add('fade_in')
      }, 200)
    } else {
      setTimeout(() => {
        entry.target.classList.add('fade_in')
      }, 200)
    }
  })
}, settings)

blueContainers.forEach((section) => {
  watcher.observe(section)
})
