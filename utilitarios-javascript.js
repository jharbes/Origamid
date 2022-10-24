function formataDinheiro(n) {
return "R$ " + n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
}

valor.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'}) dólar
BRL real
EUR euro

valor..toLocaleString('pt-BR') apenas colocar . acima de mil e , nos decimais