// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
}
// console.log(var, marca, portas)
// var é uma palavra reservada e não uma variavel em si, marca é uma const que possui escopo de bloco e foi declarada dentro de um, ou seja, inacessivel fora, idem para portas que foi declarado como let


// Como corrigir o erro abaixo?
const dois=2
function somarDois(x) {
    return x + dois;
}
function dividirDois(x) {
    return x + dois;
}
console.log(somarDois(4))
console.log(dividirDois(6))


console.log('//-----------------------------------------------------------------------------')
// O que fazer para total retornar 500?
var numero = 50;

for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total);

// Bastou alterar a declaracao do contador do for de var para let, assim ele nao sobrescreveu o 50 inicial da variavel numero