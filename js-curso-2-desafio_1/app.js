let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Hora do desafio';
function cPress() {
    console.log('Buttom Press')
};
function aPress() {
    alert('Eu amo JS')
};
let cidade
function pPress() {
    cidade = prompt('Qual a cidade que voçê mora')
    alert(`estive em ${cidade} e lembrei de voçê`)
};
let soma;
let soma1;

function sPress() {
    soma = prompt('Digite um número');
    soma1 = prompt('Digite mais um número');
    let resultado = parseFloat(soma) + parseFloat(soma1); 	
    alert (`A soma é: ${resultado}`);
};