// ARRAY
// É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames[0] // Switch
videoGames[2] // Xbox


// MÉTODOS E PROPRIEDADES DE UMA ARRAY
// Existem diversos outros métodos, como map, reduce, forEach e mais que veremos mais à frente

var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3 (retorna o tamanho do array ou numero de elementos)


//-----------------------------------------------------------------------------


// FOR LOOP
// Fazem algo repetidamente até que uma condição seja atingida.
// O for loop possui 3 partes, início, condição e incremento

for (var numero = 0; numero < 10; numero++) {
    console.log(numero);
}
// Retorna de 0 a 9 no console



//-----------------------------------------------------------------------------

// WHILE LOOP
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console
// O for loop é o mais comum



//-----------------------------------------------------------------------------


// ARRAYS E LOOPS
// O for loop é o mais comum

var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

