const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
  if (currentActive < circles.length) currentActive++
  updateView()
})

prev.addEventListener('click', () => {
  if (currentActive > 1) currentActive--
  updateView()
})

function updateView() {
  updateCircles()
  updateButtons()
  updateProgressBar()
}
function updateCircles() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })
}
function updateButtons() {
  if (currentActive > 1) {
    prev.disabled = false
  } else {
    prev.disabled = true
  }
  if (currentActive < circles.length) {
    next.disabled = false
  } else {
    next.disabled = true
  }
}
function updateProgressBar() {
  const progressWidth = ((currentActive - 1) / (circles.length - 1)) * 100
  progress.style.width = `${progressWidth}%`
}
