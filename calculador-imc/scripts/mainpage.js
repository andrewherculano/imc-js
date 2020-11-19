const display = document.getElementById("display");
const pesoInput = document.getElementById("peso-atual");
const alturaInput = document.getElementById("altura");

//console.log(display.textContent);

calculateImc = () => {
  const peso = parseFloat(pesoInput.value.replace(",", "."));
  const altura = parseFloat(alturaInput.value.replace(",", "."));

  var imcResult = peso / (altura * altura);

  display.textContent = imcResult.toFixed(2);
};

document.getElementById("calculate").addEventListener("click", calculateImc);
