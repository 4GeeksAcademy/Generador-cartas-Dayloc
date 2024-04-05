/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const paLo = [`♠`, `♦`, `♣`, `♥`];
  const numEro = [`A`, 2, 3, 4, 5, 6, 7, 8, 9, `J`, `Q`, `K`];

  console.log(numEro);

  function getRandomNum(numeros) {
    return numeros[Math.floor(Math.random() * numeros.length)];
  }
  const barajaAleatoria = getRandomNum(numEro);
  console.log(barajaAleatoria);

  const paLoAleatorio = getRandomNum(paLo);
  console.log(paLoAleatorio);

  document.querySelector("#paloA").textContent = paLoAleatorio;
  document.querySelector("#paloB").textContent = paLoAleatorio;

  if (paLoAleatorio === `♠` || paLoAleatorio === `♣`) {
    const cambioColor = document.querySelector("div");
    cambioColor.style.color = "black";
  } else {
    const cambioColor2 = document.querySelector("div");
    cambioColor2.style.color = "red";
  }

  const cartaLoca = document.querySelector("#numero").textContent;

  document.querySelector("#numero").textContent = barajaAleatoria;

  function clickbtn() {
    document.location.reload();
  }
  const accion = document.getElementById("myBoton");
  accion.onclick = clickbtn;
  setInterval(() => {
    document.location.reload();
  }, 100000);
};
