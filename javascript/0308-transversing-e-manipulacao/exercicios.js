// Duplique o menu e adicione ele em copy

const menu=document.querySelector('.menu')
const copy=document.querySelector('.copy')

const cloneMenu=menu.cloneNode(true)

copy.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq

const faq=document.querySelector('.faq')
const primeiroDt=faq.querySelector('dt')


// Selecione o DD referente ao primeiro DT

const ddDoPrimeiroDt=primeiroDt.nextElementSibling
console.log(ddDoPrimeiroDt)


// Substitua o conteúdo html de .faq pelo de .dragoes

const dragoes=document.querySelector('.dragoes')

faq.innerHTML=dragoes.innerHTML