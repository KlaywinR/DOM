var form = document.getElementById("form-imc");
var resultado = document.getElementById("resultado-imc");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);

  if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    resultado.textContent = "Por favor, preencha peso e altura corretamente.";
    return;
  }

  var imc = peso / (altura * altura);
  var classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 25) {
    classificacao = "Peso normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else {
    classificacao = "Obesidade";
  }

  resultado.textContent = "Seu IMC é " + imc.toFixed(2) + " - " + classificacao;
});
