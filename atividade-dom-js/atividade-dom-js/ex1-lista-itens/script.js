
var itens = document.querySelectorAll("#lista-produtos li");

var limit = 20;

for (var i = 0; i < itens.length; i++) {
  var texto = itens[i].textContent;

  if (texto.length > limit) {
    itens[i].classList.add("nome-grande");
  }
}
