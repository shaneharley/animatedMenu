const menuWrapper = document.querySelector('.menuWrapper')
const menuHeadings = document.querySelectorAll('.listItems h1')
const menuNumbers = document.querySelectorAll('.listItems .menuNumber')
const toggleMenuButton = document.querySelector('#toggleMenuButton')
const closeMenuIcon = document.querySelector('#closeMenuIcon')

let delay = .5

toggleMenuButton.addEventListener('click', () => {
  menuWrapper.classList.add('visible')
  animateMenuItems()
})

const toggleVisibleClass = (object) => {
  object.forEach(val => {
    console.log(delay)
    val.classList.toggle('visible')
    val.style.transitionDelay = delay + 's'
    delay = delay + 0.2
  })
}

const resetStyleOverride = (object) => {
  setTimeout(() => {
    object.forEach(val => {
      val.style = ''
    })
  }, delay)
}

const resetDelay = () => {
  delay = 0
}

const animateMenuItems = () => {
  toggleVisibleClass(menuNumbers)
  toggleVisibleClass(menuHeadings)
  resetStyleOverride(menuNumbers)
  resetStyleOverride(menuHeadings)
  resetDelay()
}

menuHeadings.forEach(item => {
  let number = item.previousElementSibling
  const toggleHover = () => {
    item.classList.toggle('hover')
    number.classList.toggle('hover')
  }
  item.addEventListener('mouseover', () => {
    toggleHover()
  })
  item.addEventListener('mouseleave', () => {
    toggleHover()
  })
})

closeMenuIcon.addEventListener('click', () => {
  menuWrapper.classList.remove('visible')
  toggleVisibleClass(menuNumbers)
  toggleVisibleClass(menuHeadings)
  resetStyleOverride(menuNumbers)
  resetStyleOverride(menuHeadings)
  resetDelay()
})
