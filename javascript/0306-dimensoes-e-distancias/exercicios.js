// Verifique a distância da primeira imagem
// em relação ao topo da página

console.log(document.querySelector('img').offsetTop)



// Retorne a soma da largura de todas as imagens


const todasImagens=document.querySelectorAll('img')

let somaWidth=0
todasImagens.forEach((item,index)=>{
    somaWidth+=item.getBoundingClientRect().width
})

console.log(somaWidth)



// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)


const todosLinks=document.querySelectorAll('a')

todosLinks.forEach((item,index)=>{
    if (item.getBoundingClientRect().width>=48 && item.getBoundingClientRect().height>=48)
        console.log(`Link de numero ${index} de acordo com especificacoes Google`)
    else
        console.log(`Link de numero ${index} em desacordo com as especificacoes Google`)
})



// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
