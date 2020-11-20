const display = document.getElementById("display");
const pesoInput = document.getElementById("peso-atual");
const alturaInput = document.getElementById("altura");
const nomeInput = document.getElementById("nome");

calculateImc = () => {
  const peso = parseFloat(pesoInput.value.replace(",", "."));
  const altura = parseFloat(alturaInput.value.replace(",", "."));
  const nome = nomeInput.value;

  const imcResult = peso / (altura * altura);

  if (imcResult <= 17) {
    display.textContent = `${nome} seu IMC atual é de: ${imcResult.toFixed(
      2
    )}, Magreza grave`;
  } else if (imcResult <= 18.5) {
    display.textContent = `${nome} seu IMC atual é de: ${imcResult.toFixed(
      2
    )}, Magreza leve`;
  } else if (imcResult <= 25) {
    display.textContent = `${nome} seu IMC atual é de: ${imcResult.toFixed(
      2
    )}, Saudável`;
  } else if (imcResult <= 30) {
    display.textContent = `${nome} seu IMC atual é de: ${imcResult.toFixed(
      2
    )}, Sobrepeso`;
  } else if (imcResult <= 35) {
    display.textContent = `${nome} seu IMC atual é de: ${imcResult.toFixed(
      2
    )}, Obesidade Grau I`;
  } else if (imcResult <= 40) {
    display.textContent = `${nome} seu IMC atual é de: ${imcResult.toFixed(
      2
    )}, Obesidade Grau II (considerada severa)`;
  } else {
    display.textContent = `${nome} seu IMC atual é de: ${imcResult.toFixed(
      2
    )}, Obesidade Grau III (considerada mórbida`;
  }
};

document.getElementById("calculate").addEventListener("click", calculateImc);
