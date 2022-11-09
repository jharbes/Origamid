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


