/*let blogDate = document.getElementById('date')
let body = document.querySelector('body')

function generateDate() {
  let monthArray = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  if (blogDate.textContent === '') {
    const date = new Date()

    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear() % 100 // I only want the last two digits of the year so 2025 % 100 becomes 25.
    let fullDate = `${day} ${monthArray[month]} ${year}`

    blogDate.textContent = fullDate
  }
}

generateDate()
*/

let lastScrollY = 0
const navBar = document.querySelector('header')

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY

  if (currentScrollY > lastScrollY) {
    navBar.classList.add('hidden')
  } else {
    navBar.classList.remove('hidden')
  }
  if (currentScrollY === 0) {
    navBar.classList.remove('hidden')
  }

  lastScrollY = currentScrollY
})
