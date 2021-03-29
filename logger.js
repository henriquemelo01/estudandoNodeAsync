// Arquivo que ira armazenar mensagens do sistema
const events = require("events");

// Criando um evento, como o addEventList que vai disparar uma mensagem quando o usuario digitar hi no console.
const sayHiEvent = new events.EventEmitter();

sayHiEvent.on("hi", () => console.log("Coe ze !!"));
const log = function (message) {
  sayHiEvent.emit(message);
};

module.exports = "log";

// document
//   .querySelector("button")
//   .addEventListener("click", (e) => console.log(e));
