const hiddenInput = document.querySelector('.form__item_el_hidden')
const visibleInput = document.querySelector('.form__item_el_visible')

hiddenInput.addEventListener('keydown', e => {
  if (e.ctrlKey) {
    if (e.keyCode == 65 || e.keyCode == 97) {
      visibleInput.focus()
      visibleInput.select()
    }
  }
})

visibleInput.addEventListener('keydown', e => {
if (e.keyCode=== 9){
return
}
  else if (e.keyCode === 39) {
    hiddenInput.setSelectionRange(
      hiddenInput.value.length - 1,
      hiddenInput.value.length
    )
  } else if (e.keyCode === 37) {
    hiddenInput.setSelectionRange(0, 1)
  }
  else{
  hiddenInput.focus()
  }
})

function showStars() {
  visibleInput.value = Array(hiddenInput.value.length).fill('*').join('')
}
