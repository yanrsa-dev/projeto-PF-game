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
            empate(j1)(j2)
    },200)

    } // Função para decidir quem começa
    setTimeout(() => {
    const params = new URLSearchParams(window.location.search)
    const primeiro = params.get("primeiro")
    document.getElementById("mensagem").innerText = 
    primeiro ? `O ${primeiro} começa o jogo!` : "Erro: Jogador não definido."
},0) // Decidi armazenar a informação no URL como é uma informação simploria

