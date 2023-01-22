const accordionList=document.querySelectorAll('.js-accordion dt')
const classeAtivo='ativo'


if (accordionList.length){
    accordionList[0].classList.add(classeAtivo)
    accordionList[0].nextElementSibling.classList.add(classeAtivo)

    function activeAccordion(){
        this.classList.toggle(classeAtivo) // usamos toggle para em vez de simplesmente adicionar a classe ela trocar adicionar e remover a cada click
        this.nextElementSibling.classList.toggle(classeAtivo)
    }


    accordionList.forEach((item)=>{
        item.addEventListener('click', activeAccordion)
    })
}
