const mes = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];

const estacao_ano = ["primavera", "verão", "outono", "inverno"];

const primavera = [
  { nome: "Rosa chá", cor: "rgb(255, 182, 193)" },
  { nome: "Lilás", cor: "rgb(200, 162, 200)" },
  { nome: "Verde menta", cor: "rgb(152, 255, 152)" },
  { nome: "Amarelo limão", cor: "rgb(255, 250, 85)" },
  { nome: "Peônia", cor: "rgb(255, 105, 180)" }
];

const verao = [
  { nome: "Turquesa", cor: "rgb(64, 224, 208)" },
  { nome: "Verde limão", cor: "rgb(173, 255, 47)" },
  { nome: "Amarelo ouro", cor: "rgb(255, 223, 0)" },
  { nome: "Laranja pastel", cor: "rgb(255, 179, 71)" },
  { nome: "Coral", cor: "rgb(255, 127, 80)" }
];

const outono = [
  { nome: "Amarelo suave", cor: "rgb(255, 239, 184)" },
  { nome: "Bege claro", cor: "rgb(210, 180, 140)" },
  { nome: "Pêssego suave", cor: "rgb(255, 218, 185)" },
  { nome: "Marrom claro", cor: "rgb(222, 184, 135)" },
  { nome: "Laranja pastel", cor: "rgb(255, 160, 122)" }
];

const inverno = [
  { nome: "Azul gelo", cor: "rgb(240, 248, 255)" },
  { nome: "Branco gelo", cor: "rgb(240, 255, 255)" },
  { nome: "Lavanda", cor: "rgb(230, 230, 250)" },
  { nome: "Azul suave", cor: "rgb(135, 206, 235)" },
  { nome: "Azul profundo", cor: "rgb(0, 191, 255)" }
];

let i_estacao = 0;
let vet_estacao = primavera;
let intervalo;

function calcula_estacao() {
  clearInterval(intervalo);

  const num_mes = parseInt(document.getElementById("i_mes").value);
  document.getElementById("nome_mes").textContent = mes[num_mes - 1];

  let nome = "";
  if ([3, 4, 5].includes(num_mes)) {
    nome = "outono";
    vet_estacao = outono;
  } else if ([6, 7, 8].includes(num_mes)) {
    nome = "inverno";
    vet_estacao = inverno;
  } else if ([9, 10, 11].includes(num_mes)) {
    nome = "primavera";
    vet_estacao = primavera;
  } else {
    nome = "verão";
    vet_estacao = verao;
  }

  document.getElementById("nome_estacao").textContent = nome;


  if (num_mes < 1 || num_mes > 12 || isNaN(num_mes)) {
  alert("Por favor, digite um número de mês entre 1 e 12.");
  return;
}

 
  const estacoes = document.getElementsByClassName("estacao");
  for (let i = 0; i < estacoes.length; i++) {
    estacoes[i].style.display = "none";
  }

  
  document.querySelector("." + nome).style.display = "block";

  coresEstacao();
  intervalo = setInterval(coresEstacao, 3000);
}

let num_cor = 0;

function coresEstacao() {
  const div_cores = document.getElementsByClassName("cor");
  const estacoes_div = document.getElementById("estacoes");

  for (let i = 0; i < div_cores.length; i++) {
    div_cores[i].textContent = vet_estacao[i].nome;
    div_cores[i].style.backgroundColor = vet_estacao[i].cor;
  }

  estacoes_div.style.backgroundColor = vet_estacao[num_cor].cor;
  num_cor = (num_cor + 1) % vet_estacao.length;
}