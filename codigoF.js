// função que pega uma lista com 6 numeros do dados e sorteia para retornar 1 valor
const dado = (numeros) => numeros[Math.floor(Math.random() * numeros.length)] 

// função que decide quem começa a jogar
const quemComeca = () => {
  const j1 = dado([1, 2, 3, 4, 5, 6])
  const j2 = dado([1, 2, 3, 4, 5, 6])
  document.getElementById('numero1').innerHTML = j1;
  document.getElementById('numero2').innerHTML = j2;

  setTimeout(() => {
    const empate = (j1) => (j2) =>
      j1 === j2 ? (alert("Empate! Role novamente"), quemComeca()) : // Caso de empate ele emite o alerta e rola os dados novamente 
        (alert(j1 > j2 ? "Jogador 1 irá começar" : "Jogador 2 irá começar"),
          window.location.href = "jogo.html?primeiro=" + (j1 > j2 ? "Jogador 1" : "Jogador 2")) // Redireciona para pagina do jogo
    empate(j1)(j2)
  }, 200)
}

// função para decidir quem começa
setTimeout(() => {
  const params = new URLSearchParams(window.location.search)
  const primeiro = params.get("primeiro")
  document.getElementById("mensagem").innerText =
    primeiro ? `O ${primeiro} começa o jogo!` : "Erro: Jogador não definido."; document.getElementById("mensagem").classList.add("titulo2JS")
}, 0) // Decidi armazenar a informação no URL 

// função que prepara todas as células com click

function prepararCelulasFuncional() {
  const celulas = document.querySelectorAll('.numbercolunas');
  celulas.forEach(celula => {
    celula.onclick = () => {
      const valor = document.getElementById('saida').innerText;
      if (valor && valor !== "🎲" && celula.innerText === "") {
        const numero = parseInt(valor); // define uma const imutável
        celula.innerHTML = `<span class="titulo2JS" style="display:flex;justify-content:center;align-items:center;height:100%;width:100%">${numero}</span>`;
        document.getElementById('saida').innerHTML = ""; // limpa o número após uso
        if (todasAsCelulasCompletas()) {
          anunciarVencedor();
        }
      }
    };
  });
}


window.onload = prepararCelulasFuncional;


// função para calcular a pontuação do Jogador 1
const calcularPontuacaoJ1 = () => {
  return (
    (parseInt(document.getElementById("j1c0").innerText, 10) +
      parseInt(document.getElementById("j1c3").innerText, 10) +
      parseInt(document.getElementById("j1c6").innerText, 10)) * 1 +
    (parseInt(document.getElementById("j1c1").innerText, 10) +
      parseInt(document.getElementById("j1c4").innerText, 10) +
      parseInt(document.getElementById("j1c7").innerText, 10)) * 2 +
    (parseInt(document.getElementById("j1c2").innerText, 10) +
      parseInt(document.getElementById("j1c5").innerText, 10) +
      parseInt(document.getElementById("j1c8").innerText, 10)) * 3
  );
}

// função que calcula a pontuação do Jogador 2
const calcularPontuacaoJ2 = () => {
  return (
    (parseInt(document.getElementById("j2c0").innerText, 10) +
      parseInt(document.getElementById("j2c3").innerText, 10) +
      parseInt(document.getElementById("j2c6").innerText, 10)) * 1 +
    (parseInt(document.getElementById("j2c1").innerText, 10) +
      parseInt(document.getElementById("j2c4").innerText, 10) +
      parseInt(document.getElementById("j2c7").innerText, 10)) * 2 +
    (parseInt(document.getElementById("j2c2").innerText, 10) +
      parseInt(document.getElementById("j2c5").innerText, 10) +
      parseInt(document.getElementById("j2c8").innerText, 10)) * 3
  );
}

// função que verifica o preenchimento das celulas
const todasAsCelulasCompletas = () => {
  const j1Completo = Array.from(document.querySelectorAll('#j1c0, #j1c1, #j1c2, #j1c3, #j1c4, #j1c5, #j1c6, #j1c7, #j1c8')).every(celula => celula.innerText !== "");
  const j2Completo = Array.from(document.querySelectorAll('#j2c0, #j2c1, #j2c2, #j2c3, #j2c4, #j2c5, #j2c6, #j2c7, #j2c8')).every(celula => celula.innerText !== "");
  return j1Completo && j2Completo;
}

// função para anunciar o vencedor
const anunciarVencedor = () => {
  const resultadoJ1 = calcularPontuacaoJ1();
  const resultadoJ2 = calcularPontuacaoJ2();

  const vencedor = resultadoJ1 > resultadoJ2 ? "Jogador 1 é o vencedor!" :
    resultadoJ2 > resultadoJ1 ? "Jogador 2 é o vencedor!" :
      "Empate!";

  // exibindo a pontuação e vencedor
  document.getElementById("resultadoJ1").innerText = "Pontuação Jogador 1: " + resultadoJ1;
  document.getElementById("resultadoJ2").innerText = "Pontuação Jogador 2: " + resultadoJ2;
  document.getElementById("vencedor").innerText = vencedor;

  // mostrando o botão de voltar
  document.getElementById("botaoVoltar").style.display = "block";
}

// função para voltar à tela inicial
const voltarParaTelaInicial = () => {
  window.location.href = 'index.html';
}


// função para iniciar o jogo
const iniciarJogo = () => {
  window.location.href = 'index.html'; // Redireciona para a página do jogo
}

// preparando as células do jogo
if (document.location.href.includes('index.html')) {
  prepararCelulasFuncional();
}
