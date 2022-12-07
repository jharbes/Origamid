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

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
