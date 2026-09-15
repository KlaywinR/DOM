var tarefas = document.querySelectorAll("#lista-tarefas li");

for (var i = 0; i < tarefas.length; i++) {
  tarefas[i].addEventListener("click", function () {
    this.classList.toggle("concluida");
  });
}
