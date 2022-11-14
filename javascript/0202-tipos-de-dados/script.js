var nome='Andre'
let idade=28
let time
let time2=null
let simbolo=Symbol()

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof time,typeof time2,typeof simbolo)

var nome='Jorge'
var sobrenome='Harbes'
var nomeCompleto=nome+sobrenome

console.log(nomeCompleto)

var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String

console.log(frase1,frase2)

/*
Utilizando aspas em strings

'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
"JavaScript é "super" fácil"; // Inválido

*/

var melhor='teste'
var frase3='Esse é o melhor '+melhor+' jogo'
console.log(frase3)

templateString=`Testando as "aspas" em template string`
console.log(templateString)