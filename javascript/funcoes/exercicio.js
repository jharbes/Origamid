// Crie uma função para verificar se um valor é Truthy

function isTrue(valor){
  return !!valor?true:false
}

console.log(isTrue(5>2))
console.log(isTrue(2!=2))
console.log('teste',isTrue(5))
console.log('teste2',isTrue(''))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

const perimetroQuadrado=(lado)=>{
  return 4*lado
}

console.log(perimetroQuadrado(2))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

const nomeCompleto=function(nome,sobrenome){
  return `${nome} ${sobrenome}`
}

console.log(nomeCompleto('Jorge','Harbes'))

// Crie uma função que verifica se um número é par

function ehPar(numero){
  return numero%2==0?true:false
}

console.log(ehPar(4))
console.log(ehPar(7))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

const tipoDado=function(dado){
  return typeof dado
}

console.log(tipoDado(2))
console.log(tipoDado(ehPar))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

document.addEventListener('scroll',function(){
  console.log('Jorge Nami Harbes')
})


// Corrija o erro abaixo

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
console.log(precisoVisitar(20))
jaVisitei(20);
console.log(jaVisitei(20))
