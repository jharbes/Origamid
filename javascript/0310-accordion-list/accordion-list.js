const accordionList=document.querySelectorAll('.js-accordion dt')

function activeAccordion(){
    this.classList.add('ativo')
    this.nextElementSibling.classList.add('ativo')
}


accordionList.forEach((item)=>{
    item.addEventListener('click', activeAccordion)
})

