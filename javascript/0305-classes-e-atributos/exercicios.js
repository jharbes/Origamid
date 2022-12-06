// 1- Adicione a classe ativo a todos os itens do menu

const todosItensMenu=document.querySelectorAll('.menu a')

todosItensMenu.forEach(item=>{
    item.classList.add('ativo')
    console.log(item)
})




// 2- Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

todosItensMenu.forEach((item,indice)=>{
    if (indice!=0)
        item.classList.remove('ativo')
    console.log(item)
})




// Verifique se as imagens possuem o atributo alt

const imgs=document.querySelectorAll('img')

imgs.forEach(item=>{
    item.hasAttribute('alt')?console.log(item,'Tem atributo Alt'):console.log(item,'Nao tem atributo alt')
})



// Modifique o href do link externo no menu

/*

todosItensMenu[--todosItensMenu.length].setAttribute('href','https://www.origamid.com')

*/

document.querySelector('a[href^="http"').setAttribute('href','https://www.origamid.com')

console.log(document.querySelector('a[href^="http"'))