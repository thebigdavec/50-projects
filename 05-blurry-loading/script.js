const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
let int = setInterval(blurring, 30)

function blurring() {
  load++
  const blur = 30 - load * 0.333
  bg.style.filter = `blur(${blur}px)`
  loadText.innerText = `${load}%`
  loadText.style.opacity = 4 - load * 0.04
  if (load > 99) {
    clearInterval(int)
  }
}
