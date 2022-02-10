

const accordionCollapseBtnArray = document.querySelectorAll('.accordion__collapse-btn');
const accordionBody = document.querySelectorAll('.accordion__body')



function toggleAccordionBody(event){
//    accordionBody.classList.toggle('accordion__body_hide');
//    accordionCollapseBtn.classList.toggle('accordion__collapse-btn_collapsed');

  // Как получить кнопку по которой мы кликнули из объекта event?
    const accordionCollapseBtn = event.target;
    accordionCollapseBtn.classList.toggle('accordion__collapse-btn_collapsed');

    // Получаем прародителя кнопки по которой мы кликнули
    const accordionItem = event.target.parentNode.parentNode;
    const accordionBody = accordionItem.querySelector('.accordion__body');
    accordionBody.classList.toggle('accordion__body_hide');



}

accordionCollapseBtnArray.forEach(function(btn){
   btn.addEventListener('click', toggleAccordionBody)
});