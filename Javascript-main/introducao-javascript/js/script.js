console.log("Console");

//---------------------------Daqui pra baixo começa o codigo

//alteração do titulo
//console.log(document);
//cria a variavel titulo e armazena o conteudo da classe dela
let titulo = document.querySelector(".titulo");
//console.log(titulo);
//atribuição de um valor na vriavel titulo
titulo.textContent = "Matheus Nutrição!"
//alteração da tabela
let paciente = document.querySelector("#primeiroPaciente");
let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura");

let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

let imc = peso / (altura * altura);

console.log(imc);