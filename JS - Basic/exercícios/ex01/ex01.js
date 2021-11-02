"use strict";

const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputWeight = e.target.querySelector("#weight");
  const inputHeight = e.target.querySelector("#height");
  const name = e.target.querySelector("#name");

  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);

  if (!weight) {
    setResult(`Invalid Weight `, false);
    return;
  }

  if (!height) {
    setResult(`Invalid Height `, false);
    return;
  }

  const imc = getIMC(weight, height);
  const level = getIMCLevel(imc);

  const msg = `${name}, seu IMC é ${imc} (${level}).`;
  setResult(msg, true);
});

function getIMCLevel(imc) {
  const level = [
    "Abaixo do peso",
    "Peso Normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return level[5];

  if (imc >= 35 && imc <= 39.9) return level[4];

  if (imc >= 30 && imc <= 34.9) return level[3];

  if (imc >= 25 && imc <= 29.9) return level[2];

  if (imc >= 18.5 && imc <= 34.9) return level[1];

  if (imc < 18.5) return level[0];
}

function getIMC() {
  const imc = weight / height ** 2;
  return imc.toFixed(2);
}

function createP() {
  const p = document.createElement("p");
  return p;
}

function setResult(msg, isValid) {
  const result = document.querySelector("#result");
  result.innerHTML = "";

  const p = createP();

  if (isValid) {
    p.classList.add("p-result");
  } else {
    p.classList.add("bad-result");
  }

  p.innerHTML = msg;
  result.appendChild(p);
}
