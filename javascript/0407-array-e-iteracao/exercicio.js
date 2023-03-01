// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const todosCursos=Array.from(document.querySelectorAll('.curso'))
console.log("file: exercicio.js:6 ~ todosCursos", todosCursos)
console.log(todosCursos[0].innerText)


const novaArray=todosCursos.map((item) => {
    const titulo=item.querySelector('h1').innerText
    const descricao=item.querySelector('p').innerText
    const aulas=item.querySelector('.aulas').innerText
    const horas=item.querySelector('.horas').innerText
    return {
        'titulo':titulo,
        'descricao':descricao,
        'aulas':aulas,
        'horas':horas
    }
})
console.log("file: exercicio.js:11 ~ novaArray", novaArray)





// Retorne uma lista com os
// números maiores que 100
const numeros8 = [3, 44, 333, 23, 122, 322, 33];


const numeros8Maiores=numeros8.filter(item => item>100)
console.log("file: exercicio.js:34 ~ numeros8Maiores", numeros8Maiores)



// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const baixoFazParte=instrumentos.some(item => item==='Baixo')
console.log("file: exercicio.js:43 ~ baixoFazParte", baixoFazParte)




// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]


const totalCompras=compras.reduce((acumulador,objeto)=> {
    precoReal=(objeto.preco).replace('R$ ','').replace(',','.')
    precoReal=Number(precoReal)
    return acumulador+precoReal
},0)
console.log("file: exercicio.js:74 ~ totalCompras", totalCompras)
