// Duplique o menu e adicione ele em copy

const copy=document.querySelector('.menu').cloneNode(true)

// Selecione o primeiro DT da dl de Faq

const primeiroDt=document.querySelector('.faq-lista').children[0]


// Selecione o DD referente ao primeiro DT

const ddDoPrimeiroDt=primeiroDt.nextElementSibling


// Substitua o conteúdo html de .faq pelo de .dragoes

const docFaq=document.querySelector('.faq')
const tituloFaq=docFaq.querySelector('.titulo')
const faqLista=docFaq.querySelector('.faq-lista')
const dragoes=document.querySelector('.dragoes')

docFaq.removeChild(tituloFaq)
docFaq.replaceChild(dragoes,faqLista)