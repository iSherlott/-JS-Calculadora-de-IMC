function calc() {
  let peso = parseFloat(document.querySelector("#peso").value);
  let altura = parseFloat(document.querySelector("#altura").value);
  let imc;

  if (!peso) return (document.querySelector("p").innerText = `Peso Inválido`);
  if (!altura)
    return (document.querySelector("p").innerText = `Altura Inválido`);

  if (peso <= 0 || peso >= 600) {
    imc = 0;
  } else {
    imc = peso / altura ** 2;

    if (imc == 0) {
      document.querySelector("p").style.background = "#6959CD";
      document.querySelector("p").innerText = `Valores Inválido`;
    } else if (imc > 0 && imc < 18.5) {
      document.querySelector("p").style.background = "#6959CD";
      document.querySelector("p").innerText = `${imc.toFixed(
        2
      )}Kg/m² Abaixo do peso`;
    } else if (imc >= 18.5 && imc <= 24.9) {
      document.querySelector("p").style.background = "#DDA0DD";
      document.querySelector("p").innerText = `${imc.toFixed(
        2
      )}Kg/m² Peso Normal`;
    } else if (imc >= 25 && imc <= 29.9) {
      document.querySelector("p").style.background = "#8B008B";
      document.querySelector("p").innerText = `${imc.toFixed(
        2
      )}Kg/m² Sobrepeso`;
    } else if (imc >= 30 && imc <= 34.9) {
      document.querySelector("p").style.background = "#FF6347";
      document.querySelector("p").innerText = `${imc.toFixed(
        2
      )}Kg/m² Obesidade grau 1`;
    } else if (imc >= 35 && imc <= 39.9) {
      document.querySelector("p").style.background = "#B22222";
      document.querySelector("p").innerText = `${imc.toFixed(
        2
      )}Kg/m² Obesidade grau 2`;
    } else if (imc >= 40) {
      document.querySelector("p").style.background = "#FF0000";
      document.querySelector("p").innerText = `${imc.toFixed(
        2
      )}Kg/m² Obesidade grau 3`;
    }
  }
}
