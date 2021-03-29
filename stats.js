// P/ executar o node utiliza-se node stats.js

// API : Application Programming Interface: É um pedaço de progrma que pode ser usado por outro pedaço de programa, em ordem de basicamente permitir que aplicações se comunicarem entre si e trocam informações (dados).
// HTTP REQUEST: Client faz uma requisição de maneira assincrona, ou seja, solicita (get) ou envia (post) algum dado a um web server que normalmente contem uma API. O web server ira retornar uma resposta contendo o dado solicitado por meio

// Require -> Importando modulos no Node
const os = require("os");
const logger = require("log");

setInterval(() => {
  const { freemem, totalmem } = os;

  const total = Math.trunc(totalmem() / 1024 / 1024);
  const mem = Math.trunc(freemem() / 1024 / 1024);
  const percentageMem = Math.trunc((mem * 100) / total);

  const stats = {
    freeMemory: `${mem} MB`,
    totalMemory: `${totalmem} MB`,
    usagePercentage: `${percentageMem}%`,
  };

  console.clear();
  console.log("======= PC STATUS =======");
  console.table(stats);
}, 1000);

window.prompt();
logger(window.prompt("Bem vindo usuario !!"));
console.log("Teste");
