let numeroSecreto = Math.floor(Math.random() * 100);

function verificar() {
  let input = document.getElementById("inputNumero").value;
  let resultado = document.getElementById("resultado");
  let box = document.getElementById("box");

  let numero = Number(input);

  if (numero === numeroSecreto) {
    resultado.innerText = "Acertou!";
    box.style.setProperty("background-color", "green");
  } else if (numero > numeroSecreto) {
    resultado.innerText = "Muito alto!";
    box.style.setProperty("background-color", "red");
  } else {
    resultado.innerText = "Muito baixo!";
    box.style.setProperty("background-color", "red");
  }
}