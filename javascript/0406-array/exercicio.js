const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiroValor=comidas.shift()
console.log("file: exercicio.js:4 ~ primeiroValor", primeiroValor)


// Remova o último valor de comidas e coloque em uma variável
const ultimoValor=comidas.pop()
console.log("file: exercicio.js:9 ~ ultimoValor", ultimoValor)

// Adicione 'Arroz' ao final da array
comidas.push('Arroz')
console.log("file: exercicio.js:13 ~ comidas", comidas)

// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe','Batata')
console.log("file: exercicio.js:17 ~ comidas", comidas)




const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort()
console.log("file: exercicio.js:25 ~ estudantes", estudantes)


// Inverta a ordem dos estudantes
estudantes.reverse()
console.log("file: exercicio.js:30 ~ estudantes", estudantes)


// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'))


// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'))




let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html=html.split('section').join('ul').split('div').join('li')
console.log("file: exercicio.js:51 ~ html", html)




const carros2 = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const cloneCarros=carros2.slice()
carros2.pop()
console.log("file: exercicio.js:60 ~ cloneCarros", cloneCarros)
console.log("file: exercicio.js:62 ~ carros2", carros2)
