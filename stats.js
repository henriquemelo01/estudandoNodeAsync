// P/ executar o node utiliza-se node stats.js

// Require -> Importando modulos no Node
const os = require("os");

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
