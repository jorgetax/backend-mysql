const modal = document.getElementById('modal')
const modalShow = document.getElementById('modal-show')

modalShow.addEventListener('click', () => {
  modal.style.display = 'block'
})

window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none'
})