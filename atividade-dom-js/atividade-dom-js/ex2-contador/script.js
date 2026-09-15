var numeroTela = document.getElementById("numero");
var btnMais = document.getElementById("btn-aumentar");
var btnMenos = document.getElementById("btn-diminuir");

var quantidade = 1;

btnMais.addEventListener("click", function () {
  quantidade = quantidade + 1;
  numeroTela.textContent = quantidade;
});

btnMenos.addEventListener("click", function () {
  // não deixa a quantidade ficar menor que 1
  if (quantidade > 1) {
    quantidade = quantidade - 1;
    numeroTela.textContent = quantidade;
  }
});
