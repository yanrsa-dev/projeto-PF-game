const dado = (numeros) => numeros[Math.floor(Math.random()* numeros.length)] // Uma função que pega uma lista com 6 numeros do dados e sorteia para retornar 1 valor

const quemComeca = () => {
    const j1 = dado([1, 2, 3, 4, 5, 6])
    const j2 = dado([1, 2, 3, 4, 5, 6])
    document.getElementById('numero1').innerHTML = j1; 
    document.getElementById('numero2').innerHTML = j2;

    setTimeout(() => {
         const empate = (j1) => (j2) =>
            j1 === j2 ? (alert("Empate! Role novamente"), quemComeca()): // Caso de empate ele emite o alerta e rerola os dados dos jogadores
            (alert(j1 > j2 ? "Jogador 1 irá começar":"Jogador 2 irá começar"),
            window.location.href = "jogo.html?primeiro="+(j1>j2? "Jogador 1":"Jogador 2")) // Redireciona para pagina do jogo
            empate(j1)(j2)},200)
    } 
    
    // Função para decidir quem começa
    setTimeout(() => {
    const params = new URLSearchParams(window.location.search)
    const primeiro = params.get("primeiro")
    document.getElementById("mensagem").innerText = 
    primeiro ? `O ${primeiro} começa o jogo!` : "Erro: Jogador não definido."; document.getElementById("mensagem").classList.add("titulo2JS")
},0) // Decidi armazenar a informação no URL 

// Função para preparar todas as células com click

function prepararCelulasFuncional() {
    const celulas = document.querySelectorAll('.numbercolunas');
    celulas.forEach(celula => {
      celula.onclick = () => {
        const valor = document.getElementById('saida').innerText;
        if (valor && valor !== "🎲" && celula.innerText === "") {
          const numero = parseInt(valor); // define uma const imutável
          celula.innerHTML = `<span class="titulo2JS" style="display:flex;justify-content:center;align-items:center;height:100%;width:100%">${numero}</span>`;
          document.getElementById('saida').innerHTML = ""; // limpa o número após uso
        }
      };
    });
  }
  
  window.onload = prepararCelulasFuncional;

  // armazenar valores

  // Jogador1

  // Primeira Coluna J1
  const J1Coluna1Linha1 = 0
  const J1Coluna1Linha2 = 0
  const J1Coluna1Linha3 = 0

  //Segunda Coluna
  const J1Coluna2Linha1 = 0
  const J1Coluna2Linha2 = 0
  const J1Coluna2Linha3 = 0

  //Terceira Coluna
  const J1Coluna3Linha1 = 0
  const J1Coluna3Linha2 = 0
  const J1Coluna3Linha3 = 0

  // Jogador2

  // Primeira Coluna J2
  const J2Coluna1Linha1 = 0
  const J2Coluna1Linha2 = 0
  const J2Coluna1Linha3 = 0

  //Segunda Coluna
  const J2Coluna2Linha1 = 0
  const J2Coluna2Linha2 = 0
  const J2Coluna2Linha3 = 0

  //Terceira Coluna
  const J2Coluna3Linha1 = 0
  const J2Coluna3Linha2 = 0
  const J2Coluna3Linha3 = 0

  //Função para Somar resultados

  //JOGADOR 1
const Jogador1Resultado=
    
[J1Coluna1Linha1,J1Coluna1Linha2,J1Coluna1Linha3, // PRIMEIRA COLUNA=Jogador1Resultado[0][1][2]
J1Coluna2Linha1,J1Coluna2Linha2,J1Coluna2Linha3, // SEGUNDA COLUNA=Jogador1Resultado[3][4][5]
J1Coluna3Linha1,J1Coluna3Linha2,J1Coluna3Linha3] // TERCEIRA COLUNA=Jogador1Resultado[6][7][8]

 

const J1Coluna1= Jogador1Resultado.slice([0],[3])// função que separa a coluna 1
const J1SomaColuna1= J1Coluna1.reduce((acc,x)=> acc+x)// função que soma e multiplica a coluna 1
const J1Coluna2= Jogador1Resultado.slice([3],[6])// função que separa a coluna 2
const J1SomaColuna2= (J1Coluna1.reduce((acc,x)=> acc+x))*2// função que soma e multiplica a coluna 2
const J1Coluna3= Jogador1Resultado.slice([6])// função que separa a coluna 3
const J1SomaColuna3= (J1Coluna1.reduce((acc,x)=> acc+x))*3// função que soma e multiplica a coluna 3
const PontuaçãoJ1= J1SomaColuna1+J1SomaColuna2+J1SomaColuna3// função que soma as somas parciais das colunas 1,2 e 3 dando a pontuação final do jogador 1




  //JOGADOR 2
const Jogador2Resultado=
    
    [J2Coluna1Linha1,J2Coluna1Linha2,J2Coluna1Linha3, // PRIMEIRA COLUNA=Jogador2Resultado[0][1][2]
    J2Coluna2Linha1,J2Coluna2Linha2,J2Coluna2Linha3, // SEGUNDA COLUNA=Jogador2Resultado[3][4][5]
    J2Coluna3Linha1,J1Coluna3Linha2,J2Coluna3Linha3] // TERCEIRA COLUNA=Jogador2Resultado[6][7][8]

const J2Coluna1= Jogador2Resultado.slice([0],[3])// função que separa a coluna 1
const J2SomaColuna1= J2Coluna1.reduce((acc,x)=> acc+x)// função que soma e multiplica a coluna 1
const J2Coluna2= Jogador2Resultado.slice([3],[6])// função que separa a coluna 2
const J2SomaColuna2= (J2Coluna1.reduce((acc,x)=> acc+x))*2// função que soma e multiplica a coluna 2
const J2Coluna3= Jogador2Resultado.slice([6])// função que separa a coluna 3
const J2SomaColuna3= (J2Coluna1.reduce((acc,x)=> acc+x))*3// função que soma e multiplica a coluna 3
const PontuaçãoJ2= J2SomaColuna1+J2SomaColuna2+J2SomaColuna3// função que soma as somas parciais das colunas 1,2 e 3 dando a pontuação final do jogador 2