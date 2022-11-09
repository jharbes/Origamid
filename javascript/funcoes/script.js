function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4) // 16
areaQuadrado(5) // 25
areaQuadrado(2) // 4

console.log(areaQuadrado) // sem os parenteses ele retornara a própria funcao em si


// IMPORTANTE***: Diferenca entre parametros e argumentos
// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

imc(80, 1.80) // 80 e 1.80 são os argumentos
imc(60, 1.70) // 60 e 1.70 são os argumentos


// Em JavaScript nao precisamos necessariamente passar argumentos para funcoes quando ela tiver parametros
function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu';
  } else if(cor === 'verde') {
    return 'Você gosta de mato';
  } else {
    return 'Você não gosta de nada';
  }
}
corFavorita(); // retorna 'Você não gosta de nada'



// Argumentos podem ser funções
// Chamadas de callback, geralmente são funcoes que ocorrem apos algum evento
addEventListener('click', function() {
  console.log('Clicou');
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

// Funções anonimas : 
// function () {} ou () => {}

// A funcao acima possui funcionamento identico a de baixo:

function mostraConsole(){
  console.log('Clicou')
}
addEventListener('click',mostraConsole)



function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(80, 1.80); // retorna o imc que esta no console log dentro da funcao
console.log(imc2(80, 1.80)); // retorna o imc e undefined (retorno nativo de funcao sem retorno)



// uma funcao pode retornar qualquer tipo de dado, inclusive outras funcoes
// *** NAO É UMA BOA PRÁTICA retornar diferentes tipos de dados na mesma funcao
function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
// console.log(totalPaises); // erro, totalPaises não definido


// A VARIAVEL DEFINIDA NO ESCOPO ACIMA PERMANECE VALIDA DENTRO DA FUNCAO  

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro



// HOISTING, a funcao é içada para o inicio do código, só funciona
// para funcoes que tenham utilizado a sintaxe padrao function

imc3(80, 1.80); // imc aparece no console

function imc3(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}


