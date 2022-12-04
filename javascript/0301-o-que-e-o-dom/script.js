console.log(window) // observe no console que ele retorna um objeto, esse objeto possui atributos e metodos como qualquer outro objeto e nada mais eh do que toda a tela disponivel

window.alert('Isso mesmo') // Utiliza o metodo de alerta para mostrar uma mensagem na tela

console.log(window.location) // Mostra todas as informacoes de localizacao (site), mais um atributo (objeto) de window

console.log(window.location.href) // Mostra, por exemplo, o endereco do site (sendo um atributo do objeto location de window)

const href=window.location.href // Nesse caso podemos nomear uma variavel ou constante como um objeto e/ou atributo para melhor manipularmos ele

if (href==='http://127.0.0.1:5500/0301-o-que-e-o-dom/index.html')
    console.log('HREF é igual')

