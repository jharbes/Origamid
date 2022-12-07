// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links


const linksInternos=document.querySelectorAll('a[href^="#"]')

function toogleAtivo(event){
    event.currentTarget.classList.toggle('ativo')
    event.preventDefault()
}

linksInternos.forEach(item=>{
    item.addEventListener('click',toogleAtivo)
})



// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
