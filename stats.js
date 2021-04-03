// P/ executar o node utiliza-se node stats.js

/*  Request response model 
   Client faz uma requisição de maneira assincrona, ou seja, solicita (get) ou envia (post) algum dado a um web server que normalmente contem uma API. O web server ira retornar uma resposta contendo o dado ou uma página web solicitada.

   Endereço: https://wwww.restcountries.eu/rest/v2/alpha/PT
   -https: Protoculo utilizado no processo de request response
   -www.restcountries.eu : Dominio 
   -/rest,/v2,/alpha e /PT : São denominados recursos, identifica os dados desejados.  
   
   O dominio não é o endereço real de uma página web e sim o ip, o servidor responsável pelo processo de conversão do endereço de dominio para o endereço IP é o DNS (DOMAIN NAME SERVER) que funcionam como uma lista telefonica. 

   Quando acessamos um página web o browser faz uma requisição para o DNS e o servidor irá parear o endereço de dominio com o enderço de ip isso ocorre no servidor do provedor de internet. Após o endereço IP ser enviado ao browser pelo DNS será feita uma chamada por este endereço ip

   Endereço ip: https://104.27.142.889:443 , onde: https - protocolo, 104.27.142.889 - ip, 443 - porta que sera acessado no servido que identifica um serviço especifico que esta rodando no servidor.  

   Além disso, será feita uma conexão entre o web server e o client que ficara ativa durante toda transferência de dado. Esta comunicação é definida pelo protocolo TCP/IP que é responsável por "ditar" como o dado trafega pela web.
   
   Como funciona o TCP/IP?

    O TCP será responsável por quebra as requisições em pequenos chunks (blocos) chamados de pacotes antes de serem envidas, facilitando assim o "trafego" da requisição. Uma vez que estes pacotes chegaram até o destino final o TCP remontam todas eles para o formato original da requisição ou resposta.
    O papel do protocolo ip é definir as rotas a partir do endereço ip onde foi solicitada a requisição destes pacotes e os envia.
   
   Em seguida, o client faz uma requisição ao web server que segue o protocolo http. Toda requisição tem o formato seguinte:

   Link: http://prntscr.com/1110jci

   Quando a requisição chega no servidor, este ira acessa os dados  em um banco de dados ou um JSON vindo de uma API ou o html de uma página que queremos acessar e quando estes estiverem "prontos", o servidor efetua uma HTTP response que tem o seguinte formado  

   Link: http://prntscr.com/1110nas

   Imagem de todo processo: Link: http://prntscr.com/1110wur


*/

// API : Application Programming Interface: É um pedaço de progrma que pode ser usado por outro pedaço de programa, em ordem de basicamente permitir que aplicações se comunicarem entre si e trocam informações (dados) por meio da especificicação e regras.
// Online API: é uma aplicação que esta rodando em um servidor que recebe requisições do client (solicitação de um dado) e em seguida obtem os dados solicitados em um DB e o retorna ao client. Hoje em dia, na maioria dos casos, estes dados são retornados na forma de um JSON:
/* JSON FORMAT
 {
   "publisher": "101 Cookbooks",
   "title": "Best Pizza Dough Ever",
   "recipe_id" : "477466",
   "sociial_rank" : 100
 }

 Quando trabalhamos com uma API todas as requisições precisam ter uma identificação, estas são denomidas rotas (/produtos/mouse). Toda rota devera ter um recurso, este é o que define a rota (produtos). O servidor identifica a rota solicitada pelo client, acessa sua regra de negocio. A troca entre as requests e responses definem a API.

 Quando executamos uma aplicação em um sistema operacional, estas são carregadas na memoria, e viram um processo. O processo é um conjunto de instruções, dados e estados (dormindo, rodando, parado)
 Thread: É a capacidade de um processador processar diversas instruções simultaneamente, um pedaço de um processo capaz de executar determinada tarefa 
*/

/* Promisses: É um objeto que irá conter o resultado de uma operação assincrona, quando esta foi bem sucedida dizemos que a promisse foi preenchida (fullfiled).
Ex: Quando compramos um bilhete de loteria tem-se a promessa que vamos receber o dinheiro se acertarmos os valores da loteria, ou seja, essa promessa pode ser bem sucedidada (fullfilled) ou não (error). A loteria ocorre de maneira assincrona, não precisamos parar nossa "vida" até o fim da loteria. 

Ciclo de uma vida de uma promisse:
1) Pending
2) Settled: Estado em que a operação assincrona é finalizada
   Fullfilled : A operação assincrona foi bem sucedida e a promisse foi preenchida com um valor esperada.
   Rejected: Houve um erro na operação assincrona e a promisse não foi preenchida corretamente. 


// Consumindo dados de uma API usando a Fetch API:

O metodo fetch executa uma requisição do tipo get a um Web Server que, normalmente, contem uma API. 

Ao utilizarmos a função fetch da Fetch Api, para fazermos a requisição de um dado vindo através de uma API, esta cria uma promisse, que irá armazenar a resposta vinda de uma API. A promisse contém o metodo then, este metodo é executado quando a promisse for preenchida (fullfiled), para acessarmos o body da resposta, ou seja, os dados retornados pela API no formato de JSON, utiliza-se o metodo json().

OBS: o metodo then sempre retorna uma promisse, se retornarmos um valor no then este será o valor preenchido na promisse (fullfilled value).

// Identificando erros na requisição:
Podemos identificar erros na operação assincrona (requisição) usando o metodo then, uma vez que o segundo parâmetro do metodo é uma callback que é executada em caso a promisse não seja preenchida 

      .then(callbackPromiseWasFullfilled, callbackPromiseWasRejected)

A callback promiseWasRejected recebe como parâmetro o erro. Por padrão, a callback identifica apenas o erro devido a perda de conexão do client, entretanto, pode-se identificar outros tipos de erros como o 404 que indica "page not found";

Uma outra forma de "identificarmos" erros em operações assincronas é utilizando o metodo catch. Este dispara uma callback toda vez que uma promisse for rejeitada, assim em uma cadeia de promisses, o metodo é disparado toda vez que ocorrer um erro independente do local onde ocorreu o mesmo, ou seja, no meio, no final, no inicio da cadeia de promisses. Assim como a segunda callback do then, o catch recebe como parâmetro o objeto error.

A linha de código, throw new error(msgDeErro), faz um retorno em caso de erro, ou seja, sai do escopo onde foi declarada, rejeitando a operação e o parâmetro msgDeErro é armazenado na propriedade message do objeto error que foi "instanciado". Além disso todo erro declarado através deste código propaga até o metodo catch() visto anteriormente 

O metodo finally sempre dispara sua callback, independente se houve erro na operação assincrona ou se a promise foi preenchida. Isso normalmente, é utilizado nos componentes de loading. 

OBS: Quando ocorre um 404 (page not found) a promise é preenchida, ou seja, para a promise não houve um rejeição. Assim, será necessário tratar tal comportamento. O retorno desta promisse contem a propriedade ok, em caso do erro 404, o estado desta propriedade é false, dessa forma, se estado de ok for falso "criamos" um novo erro, usando throw new error.


*/

// Consumindo Promisses -> Acessando dados de uma API -> Rest Countries API

const btnWhereAmI = document.querySelector(".btnWhereAmI");
btnWhereAmI.addEventListener("click", function () {
  getCountryData("brazil");
  errSpan.textContent = "";
});

const errSpan = document.querySelector(".errMsg");

const getCountryData = function (countryName) {
  // Fetch => http request.get(), retorna uma promisse
  const request = fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);
  request
    .then((response) => {
      // O response é o valor que foi preenchido na promisse que foi retornada da função fetch. Como o fetch() efetua uma requisição do tipo Get a um web server que contém uma API, denominamos tal parâmetro como response

      // É um metodo do objeto response que permite acessar o body da response -> parse

      // ou response.status === 404
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then((data) => {
      const [countryData] = data;
      console.log(countryData);
      const [neighbour] = countryData.borders;

      if (!neighbour) return;

      // Neighbour Data
      return fetch(`https://restcountries.eu/rest/v2/name/${neighbour}`);
    })
    .then((res) => res.json())
    .then((data) => {
      const [neighbourData] = data;
      console.log(neighbourData);
    })
    .catch((error) => {
      errSpan.textContent = `Something went wrong: ${error.message} 💣💣`;
      console.dir(error);
      throw new Error(`Falha na requisição: ${error} 💣💣`);
    });
};

// Node

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
