//#region Логика открытия-закрытия фильтров
const accordionCollapseBtnArray = document.querySelectorAll(
  '.accordion__collapse-btn'
)
const accordionBody = document.querySelectorAll('.accordion__body')

function toggleAccordionBody(event) {
  //    accordionBody.classList.toggle('accordion__body_hide');
  //    accordionCollapseBtn.classList.toggle('accordion__collapse-btn_collapsed');

  // Как получить кнопку по которой мы кликнули из объекта event?
  const accordionCollapseBtn = event.target
  accordionCollapseBtn.classList.toggle('accordion__collapse-btn_collapsed')

  // Получаем прародителя кнопки по которой мы кликнули
  const accordionItem = event.target.parentNode.parentNode
  const accordionBody = accordionItem.querySelector('.accordion__body')
  accordionBody.classList.toggle('accordion__body_hide')
}

accordionCollapseBtnArray.forEach(function (btn) {
  btn.addEventListener('click', toggleAccordionBody)
})
//#endregion

//#region Логика выбранных тегов
const allCheckboxes = document.querySelectorAll('.checkbox__item')
const tagContainer = document.querySelector('.card-filters__tags')

const activeTags = []

allCheckboxes.forEach((item) => {
  item.addEventListener('click', checkboxLogic)
})

function checkboxLogic(e) {
  const input = e.target
  if (input.checked) {
    addTag(input)
  } else {
    removeTag(input)
  }
}

function addTag(input) {
  const text = input.parentNode.textContent
  const tag = document.createElement('button')
  tag.textContent = text
  activeTags.push([tag, input])

  function tagLogic(e) {
    e.preventDefault()
    const currentTag = e.target
    let currentInput
    activeTags.forEach((elem) => {
      if (elem[0] === currentTag) {
        currentInput = elem[1]
      }
    })
    currentInput.checked = false
    delete currentTag
    currentTag.remove()
  }
  tag.addEventListener('click', tagLogic)
  tagContainer.append(tag)
}

function removeTag(input) {
  let currentTag
  activeTags.forEach((elem) => {
    if (elem[1] === input) {
      currentTag = elem[0]
    }
  })
  if (currentTag) {
    delete currentTag
    currentTag.remove()
    input.checked = false
  }
}
//#endregion
