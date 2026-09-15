var btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", function () {
  // alterna a classe no body, o css cuida das cores
  document.body.classList.toggle("tema-escuro");
});
