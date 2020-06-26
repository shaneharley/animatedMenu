const menuHeadings = document.querySelectorAll('.listItems h1')

const animateMenuItems = () => {
  let delay = 0
  menuHeadings.forEach(menu => {
    menu.classList.add('active')
    menu.style.transitionDelay = delay + 's'
    delay = delay + 0.2
  })
  setTimeout(() => {
    menuHeadings.forEach(menu => {
      menu.style.transitionDelay = 0 + 's'
    })
  }, delay)
}

document.addEventListener('mouseover', () => {
  animateMenuItems()
})
