/*

PODEMOS RETORNAR OUTROS VALORES

*/

const aulas3 = [
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
  
  const listaAulas = aulas3.reduce((acumulador, atual, index) => {
    acumulador[index] = atual.nome;
    console.log("file: script2.js:30 ~ listaAulas ~ acumulador", acumulador)
    return acumulador;
  }, {}) // o {} eh um objeto vazio sendo passado como acumulador inicial
  // o retorno de tudo sera um objeto onde o atributo será o indice do array e o valor do atributo sera o valor do atributo nome do array inicial
  