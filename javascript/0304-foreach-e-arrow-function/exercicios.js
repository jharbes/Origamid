// 1- Mostre no console cada parágrado do site

todosParagrafos=document.querySelectorAll('p')
console.log(document.querySelectorAll('p').forEach(item=>console.log(item)))

todosParagrafos.forEach(item=>console.log(item)) // alternativa



// 2- Mostre o texto dos parágrafos no console

console.log(document.querySelectorAll('p').forEach(item=>console.log(item.innerText)))

todosParagrafos.forEach(item=>console.log(item.innerText)) // alternativa



// 3- Como corrigir os erros abaixo:


const imgs5 = document.querySelectorAll('img');

/*

imgs.forEach(item, index => {
  console.log(item, index);
});

*/

/*

let i = 0;
imgs.forEach( => {
  console.log(i++);
});

*/

/*

imgs5.forEach(() => i++);

*/


imgs5.forEach((item, index) => {
    console.log(item, index);
});


let j = 0;
imgs5.forEach(() => {
  console.log(j++);
});


imgs5.forEach(() => j++);
console.log(j)