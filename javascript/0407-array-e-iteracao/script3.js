/*

[].FIND() E [].FINDINDEX()
[].find(), retorna o valor atual da primeira iteração que retornar um valor truthy. Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.

*/

const numeros6 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros6.find(x => x > 45); // 88

const frutas4 = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = frutas4.findIndex((fruta) => {
  return fruta === 'Uva'; 
}); // 2




/*

[].FILTER()
[].filter(), retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.

A ausencia do return faz com que retorne undefined, lembrando que na arrow function de apenas uma linha o return eh implicito

*/

const frutas5 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayLimpa = frutas5.filter((fruta) => {
  return fruta; 
}); // ['Banana', 'Uva', 'Maçã']

const numeros7 = [6, 43, 22, 88, 101, 29];
const buscaMaior45_2 = numeros7.filter(x => x > 45); // [88, 101]


// FILTER EM OBJETOS

const aulas4 = [
    {
      nome: 'HTML 1',
      min: 15
    },
    {
      nome: 'HTML 2',
      min: 10
    },
    {
      nome: 'CSS 1',
      min: 20
    },
    {
      nome: 'JS 1',
      min: 25
    },
  ]
  
  const aulasMaiores = aulas4.filter((aula) => { 
    return aula.min > 15;
  });
  // [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]
  