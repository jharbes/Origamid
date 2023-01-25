/*

CONSTRUTORES NATIVOS
Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado.

*/

const pais = 'Brasil';
const cidade = new String('Rio'); // construtor de string

pais.charAt(0); // B
console.log(pais.charAt(0))
cidade.charAt(0); // R
console.log(cidade.charAt(0))

String.prototype;
console.log(String.prototype)
console.log(String) // os metodos e propriedades estao no prototype e nao na propria String





/*

É POSSÍVEL ACESSAR A FUNÇÃO DO PROTÓTIPO
É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array.

Existe o método Array.from()

*/

const lista = document.querySelectorAll('li');
console.log(lista) // criou uma NodeList que eh diferente de array pois possuem prototipos diferentes, ou seja, metodos e atributos possivelmente diferentes

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista); // a funcao Array() é um construtor de array
console.log(listaArray)




/*

MÉTODO DO OBJETO VS PROTÓTIPO
Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo.

dado.constructor.name, retorna o nome do construtor;

*/

Array.prototype.slice.call(lista);
console.log(Array.prototype.slice.call(lista))
Array.from(lista);
console.log(Array.from(lista))


// Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array);
console.log(Object.getOwnPropertyNames(Array))
Object.getOwnPropertyNames(Array.prototype);
console.log(Object.getOwnPropertyNames(Array.prototype))




/*

APENAS OS MÉTODOS DO PROTÓTIPO SÃO HERDADOS

*/

// [1,2,3].slice(); // existe
// [1,2,3].from(); // não existe




/*

ENTENDA O QUE ESTÁ SENDO RETORNADO
Os métodos e propriedades acessado com o . são referentes ao tipo de dados que é retornado antes desse .

Verifique o nome do construtor com .constructor.name

*/

const Carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  }
}

Carro // Object
console.log(Carro)
Carro.marca // String
console.log(Carro.marca)
Carro.preco // Number
console.log(Carro.preco)
Carro.acelerar // Function
console.log(Carro.acelerar)
Carro.acelerar() // Boolean
console.log(Carro.acelerar())
Carro.marca.charAt // Function
console.log(Carro.marca.charAt)
Carro.marca.charAt(0) // String
console.log(Carro.marca.charAt(0))

