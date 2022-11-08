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
