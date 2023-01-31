/*

STR.REPEAT(N)
Repete a string (n) vezes.

*/

const frase2 = 'Ta';

frase2.repeat(5); // TaTaTaTaTa
console.log(frase2.repeat(5))




/*

STR.REPLACE(REGEXP|SUBSTR, NEWSTR|FUNCTION)
Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

Veremos mais sobre Regular Expression

*/

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', '); // Camisas, Bonés, Calças, Bermudas, Vestidos, Saias
console.log(listaItens)

let listaItens2 = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens2=listaItens2.replace(' ',', ') // Camisas, Bonés Calças Bermudas Vestidos Saias
console.log(listaItens2)

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'
console.log(preco)




/*

STR.SPLIT(PADRAO)
Divide a string de acordo com o padrão passado e retorna uma array.

join é um método de Array

*/

const listaItens1 = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens1.split(' '); // ['Camisas', 'Bonés', 'Calças', 'Bermudas', 'Vestidos', 'Saias']
console.log(arrayItens)

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
console.log(htmlArray) // ['<', '>O melhor item</', '><', '>A melhor lista</', '>']
const htmlNovo = htmlArray.join('section');
console.log(htmlNovo) // <section>O melhor item</section><section>A melhor lista</section>




/*

STR.TOLOWERCASE() E STR.TOUPPERCASE()
Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.

*/

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

(sexo1.toLowerCase() === 'feminino'); // true
(sexo2.toLowerCase() === 'feminino'); // true
(sexo3.toLowerCase() === 'feminino'); // true




/*

STR.TRIM(), STR.TRIMSTART(), STR.TRIMEND()
Remove espaço em branco do início ou final de uma string.

*/

const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'
