var form = document.getElementById("form-cadastro");
var msgErro = document.getElementById("mensagem-erro");
var divResultado = document.getElementById("resultado");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var idade = document.getElementById("idade").value;

  if (nome === "" || email === "" || idade === "") {
    msgErro.textContent = "Por favor, preencha todos os campos!";
    divResultado.style.display = "none";
    return;
  }

  msgErro.textContent = "";

  divResultado.style.display = "block";
  divResultado.innerHTML =
    "<strong>Cadastro realizado:</strong><br>" +
    "Nome: " + nome + "<br>" +
    "E-mail: " + email + "<br>" +
    "Idade: " + idade + " anos";

  form.reset();
});
