const dado = (numeros) => numeros[Math.floor(Math.random()* numeros.length)] // Uma função que pega uma lista com 6 numeros do dados e sorteia para retornar 1 valor
const quemComeca = () => {
    const j1 = dado([1, 2, 3, 4, 5, 6])
    const j2 = dado([1, 2, 3, 4, 5, 6])
    const resultado = j1>j2 ? alert("Jogador 1 irá começar"):j2>j1 ? alert('Jogador 2 irá começar'): 
    document.getElementById('numero1').innerHTML = j1;
    document.getElementById('numero2').innerHTML = j2;
    document.getElementById('resultado').innerHTML = resultado;
}