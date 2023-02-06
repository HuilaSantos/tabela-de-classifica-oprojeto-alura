var listaDeJogadores = [];
var elementoTabela = document.getElementById("tabelaJogadores");

//elementoTabela.addEventListener("onload", exibirNaTela());

function exibirNaTela() {
  elementoTabela.innerHTML = "";
  listaDeJogadores.forEach((jogador, index) => {
    //console.log(jogador);
    elementoTabela.innerHTML += `
        <tr>
            <td>${jogador.nome}</td>
            <td>${jogador.vitoria}</td>
            <td>${jogador.empate}</td>
            <td>${jogador.derrota}</td>
            <td>${jogador.pontos}</td>
            <td><button onClick="adicionarVitoria(${index})">Vitória</button></td>
            <td><button onClick="adicionarEmpate()">Empate</button></td>
            <td><button onClick="adicionarDerrota(${index})">Derrota</button></td>
            <td><button onClick="limparPontuacaoJogador(${index})">Limpar Registros</button></td>
            <td><button onClick="removerJogador(${index})">Apagar Jogador</button></td>
          </tr>
    `;
  });
}

function criarJogador() {
  var nome = document.getElementById("campoNomeJogador").value;

  let i = 0;
  let jaExiste;

  while (i < listaDeJogadores.length) {
    if (nome === listaDeJogadores[i].nome) {
      jaExiste = true;
      break;
    }
    i++;
  }

  if (jaExiste) {
    alert("Esse jogador já existe!");
  } else {
    let vitorias = parseInt(document.getElementById("vitorias").value);
    let empates = parseInt(document.getElementById("empates").value);
    let derrotas = parseInt(document.getElementById("derrotas").value);
    listaDeJogadores.push({
      nome: nome,
      vitoria: vitorias,
      empate: empates,
      derrota: derrotas,
      pontos: vitorias * 3 + empates
    });
    document.getElementById("campoNomeJogador").value = "";
    document.getElementById("vitorias").value = "";
    document.getElementById("empates").value = "";
    document.getElementById("derrotas").value = "";

    exibirNaTela();
  }
}

function adicionarVitoria(index) {
  listaDeJogadores[index].vitoria++;
  listaDeJogadores[index].pontos = listaDeJogadores[index].pontos + 3;
  exibirNaTela();
}

function adicionarEmpate(index) {
  listaDeJogadores.forEach((jogador) => {
    jogador.empate++;
    jogador.pontos++;
  });
  exibirNaTela();
}

function adicionarDerrota(index) {
  listaDeJogadores[index].derrota++;
  exibirNaTela();
}

function limparPontuacaoJogador(index) {
  listaDeJogadores[index].vitoria = 0;
  listaDeJogadores[index].empate = 0;
  listaDeJogadores[index].derrota = 0;
  listaDeJogadores[index].pontos = 0;
  exibirNaTela();
}

function removerJogador(index) {
  listaDeJogadores.splice(index, 1);
  exibirNaTela();
}

function apagarJogadores() {
  listaDeJogadores = [];
  exibirNaTela();
}

var arrayValidar = [];

function validarPontos() {
  let vitorias = parseInt(document.getElementById("vitorias").value);
  let empates = parseInt(document.getElementById("empates").value);
  let derrotas = parseInt(document.getElementById("derrotas").value);

  for (let jogador of listaDeJogadores) {
    arrayValidar.push(jogador.vitoria + jogador.empate + jogador.derrota);
  }
  console.log(arrayValidar);

  for (let i = 1; i <= arrayValidar.length; i++) {
    if (i != arrayValidar.length) {
      if (arrayValidar[i] != arrayValidar[i - 1]) {
        alert("O número de partidas não bate!");
        break;
      } else {
        alert("O número de partidas é coerente.");
        break;
      }
    }
  }

  arrayValidar = [];
}