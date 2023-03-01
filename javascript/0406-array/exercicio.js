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
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

const carros2 = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
