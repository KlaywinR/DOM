var produtos = [
  { nome: "Adenium obesum", quantidade: 12, minimo: 5 },
  { nome: "Adenium arabicum", quantidade: 2, minimo: 5 },
  { nome: "Vaso pequeno", quantidade: 20, minimo: 10 },
  { nome: "Substrato 1kg", quantidade: 3, minimo: 8 },
  { nome: "Adubo NPK", quantidade: 15, minimo: 6 }
];

var divEstoque = document.getElementById("lista-estoque");

for (var i = 0; i < produtos.length; i++) {
  var produto = produtos[i];

  var div = document.createElement("div");
  div.classList.add("produto");
  div.textContent = produto.nome + " - Quantidade: " + produto.quantidade;


  if (produto.quantidade < produto.minimo) {
    div.classList.add("estoque-baixo");
    div.textContent += " (estoque baixo!)";
  }

  divEstoque.appendChild(div);
}
