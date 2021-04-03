const panels = document.querySelectorAll('.panel')
let activePanel = panels[0]
activePanel.classList.add('active')

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    activePanel.classList.remove('active')
    panel.classList.add('active')
    activePanel = panel
  })
})
