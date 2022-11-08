// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade=39,idadeIrmao=37

if (minhaIdade>idadeIrmao)
    console.log('É maior')
else if (minhaIdade<idadeIrmao)
    console.log('É menor')
else
    console.log('É igual')


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)
// 3 && 5 && 3 = 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // true
console.log(!!nome)
var idade = 28; // true
console.log(!!idade)
var possuiDoutorado = false; // false
console.log(!!possuiDoutorado)
var empregoFuturo; // false
console.log(!!empregoFuturo)
var dinheiroNaConta = 0; // false
console.log(!!dinheiroNaConta)

console.log('----------------------------------------------------')
// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
console.log(china===brasil)

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
// imprime 'Falso'

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

// imprime Cão