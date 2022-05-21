/* eslint-disable */
import "bootstrap";
import "./style.css";

function shuffle() {
  let palos = ["♦", "♥", "♠", "♣"];
  let randomPalo = palos[Math.floor(Math.random() * palos.length)];

  let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let randomNumero = numero[Math.floor(Math.random() * numero.length)];

  document.getElementById("myCard").classList.remove("redCard");
  document.getElementById("myCard").classList.remove("blackCard");

  if (randomPalo === "♥" || randomPalo === "♦") {
    document.getElementById("myCard").classList.add("redCard");
  } else {
    document.getElementById("myCard").classList.add("blackCard");
  }
  document.querySelector("#paloTop").innerHTML = randomPalo;
  document.querySelector("#paloBottom").innerHTML = randomPalo;
  document.querySelector(".numero").innerHTML = randomNumero;
}

window.onload = shuffle();

document.getElementById("newCard").addEventListener("click", shuffle);
