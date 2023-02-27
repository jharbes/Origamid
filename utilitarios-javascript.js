** Comentar linha inteira no VSCode --> CTRL + ;

function formataDinheiro(n) {
return "R$ " + n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
}

preco4.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49
preco4.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}); // R$ 59,49

valor..toLocaleString('pt-BR') apenas colocar . acima de mil e , nos decimais
