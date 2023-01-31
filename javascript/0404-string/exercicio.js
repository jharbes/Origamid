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

const htmlArray1=html.split('span')
const htmlJoin=htmlArray1.join('a')
console.log(htmlJoin)




// Retorne o último caracter da frase
const frase5 = 'Melhor do ano!';
const ultimoCaractere=frase5[frase5.length-1]
console.log(ultimoCaractere)




// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalTaxas=0
transacoes2.forEach((item)=>{
    if (item.toLowerCase().includes('taxa'))
        totalTaxas+=1
})
console.log(totalTaxas)
  