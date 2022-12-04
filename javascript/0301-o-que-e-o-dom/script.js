console.log(window) // observe no console que ele retorna um objeto, esse objeto possui atributos e metodos como qualquer outro objeto e nada mais eh do que toda a tela disponivel

window.alert('Isso mesmo') // Utiliza o metodo de alerta para mostrar uma mensagem na tela

console.log(window.location) // Mostra todas as informacoes de localizacao (site), mais um atributo (objeto) de window

console.log(window.location.href) // Mostra, por exemplo, o endereco do site (sendo um atributo do objeto location de window)

const href=window.location.href // Nesse caso podemos nomear uma variavel ou constante como um objeto e/ou atributo para melhor manipularmos ele

if (href==='http://127.0.0.1:5500/0301-o-que-e-o-dom/index.html')
    console.log('HREF é igual')

const h1Selecionado=document.querySelector('h1') // inclui o h1 na constante h1Selecionado para que possamos utiliza-lo conforme necessario.

document.body // retorna automaticamente todo o body do documento

alert('teste') // observe que mesmo sendo utilizado sem o window ele funciona como um atalho

console.log(h1Selecionado.classList) // observe que o console retornará a lista de classes que estao na constante h1Selecionado que é a primeira tag h1 do documento html.

const h1Classes=h1Selecionado.classList // Aqui selecionamos a lista de classes de h1 e colocamos na constante h1Classes

const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

titulo.addEventListener('click', function(){
    console.log('Clicou em ',h1Selecionado)
    console.log('Clicou em ',h1Selecionado.innerText)
});
// ativa a função callback ao clicar no titulo (no caso o h1 selecionado por meio da constante titulo)

