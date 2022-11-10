//TUDO É OBJETO
// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

// Uma string herda propriedades e métodos do construtor String()

var nome = 'André';

nome.length; // 5
nome.charAt(1); // 'n'
nome.replace('ré', 'rei'); // 'Andrei'
nome; // 'André'



// NUMEROS
// Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos
// Por isso ele nao se torna um objeto em si, continua sendo um number
var altura = 1.8;

altura.toString(); // '1.8' 
altura.toFixed(); // '2'


