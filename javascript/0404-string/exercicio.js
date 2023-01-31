// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes1 = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

let somaTaxa=0
let somaRecebimento=0
transacoes1.forEach((item)=>{
    if (item.descricao.includes('Taxa')){
        somaTaxa+=parseFloat(item.valor.slice(3))
    }
    else if(item.descricao.includes('Recebimento')){
        somaRecebimento+=parseFloat(item.valor.slice(3))
    }
})
console.log('Taxa '+somaTaxa)
console.log('Recebimento '+somaRecebimento)
  
  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
  const arrayTransportes=transportes.split(';')
  console.log(arrayTransportes)
  
  // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;
  
  // Retorne o último caracter da frase
  const frase5 = 'Melhor do ano!';
  
  // Retorne o total de taxas
  const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  
  
  