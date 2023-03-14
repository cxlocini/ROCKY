//função para corrigir o texto
function corrigirTexto(array) {
  array = array.replace(/ø/g, "o").replace(/æ/g, "a");
  return array;
}

//função para corrigir numero
function corrigirNumero(texto) {
  if (typeof texto === "string")
    return Number(texto);
  return texto;
}
//função para exportar texto corrigido
function exportar(database, nome){
  const fs = require('fs');
  
  fs.writeFileSync(nome, JSON.stringify(database));
};

let jsonData1 = require('./data_base1.json');

jsonData1.forEach(veiculo =>
{
  veiculo.nome = corrigirTexto(veiculo.nome);
  veiculo.vendas = corrigirNumero(veiculo.vendas)
});


let jsonData2 = require('./data_base2.json');

jsonData2.forEach(marca =>
{
  marca.marca = corrigirTexto(marca.marca);
});

exportar(jsonData1, "novoData1Corrigido.json");
exportar(jsonData2, "novoData2Corrigido.json");

console.log("FIM");

process.exit();