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
            window.location.href = "jogo.html?primeiro="+(j1>j2? "jogador1":"jogador2")) // Redireciona para pagina do jogo
            empate(j1)(j2)
    },500)

    } // Função para decidir quem começa

    