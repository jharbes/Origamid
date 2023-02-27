// Retorne um número aleatório
// entre 1050 e 2000

console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050)




// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';

numerosArray=numeros.split(',')
console.log(Math.max.apply(null, numerosArray))




// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

const limpaPrecos=(arrayPrecos)=>{
    novoArrayPrecos=[]
    arrayPrecos.forEach((item)=>{
        item=item.toLowerCase()
        item=item.replace(',','.').replace('r','').replace('$','').trim()
        item=+item
        item=+item.toFixed(2)
        novoArrayPrecos.push(item)
    })
    return novoArrayPrecos
}
console.log(limpaPrecos(listaPrecos))
console.log(listaPrecos)