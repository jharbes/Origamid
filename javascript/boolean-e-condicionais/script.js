var possuiGraduacao = true;
var possuiDoutorado = false;

var possuiGraduacao = true;

if(possuiGraduacao) {
  console.log('Possui graduação');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação e não executa o else


// operacoes que retornam como falso em javascript:
// Falsy
if(false);
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``


// operacoes que retornam como true em javascript:
// Truthy
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({});


// operador logico de negacao
// a negacao dupla pode ser utilizada para verificar qual o valor daquela expressao
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!''); // false


// operadores de comparação, retornam valor booleano
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false


// quando possui === torna-se uma identidade, ou seja, o tipo do dado também deve ser igual
10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true



// IMPORTANTE***: Se ambos os valores forem true ele irá retornar o último valor verificado,
// se algum valor for falso ele irá retorna-lo  e não irá continuar a verificar os próximos

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

// Exemplo:
console.log('Gato' && 'Cão') // retorna 'Cão'
console.log((5-5)&&(5+5)) // retorna 0



// IMPORTANTE***: O operador OU sempre retorna o primeiro verdadeiro, caso não haja nenhum valor
// verdadeiro ele retornará false

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

// Exemplo:
var condicional2=5-5||5+5||10-2
console.log(condicional2)



// SWITCH:
var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}
