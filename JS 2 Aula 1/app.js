listaDeNumerosSorteados = [];
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
};
let { numeroSecreto, nMax } = gerarNumeroSecreto(); // Desestrutura o objeto retornado
console.log("Número secreto gerado:", numeroSecreto);
function telaInicial() {
    exibirTextoNaTela('h1', 'Number`s Game');
    exibirTextoNaTela('p', `Adivinhe um Número entre 1 e ${nMax}`);
};

function cleanC() {
    chute = document.querySelector('input') 
    chute.value = '';
};
let tentativa = 1
function gerarNumeroSecreto() {
    let nMax = Math.floor(Math.random() * 1000) + 1; // Gera um valor máximo entre 1 e 1000
    let numeroSecreto = Math.floor(Math.random() * nMax) + 1; // Gera um número secreto entre 1 e nMax
    let numeroEscolhido = { numeroSecreto, nMax }; // Retorna um objeto com o número secreto e nMax
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroSecreto ();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    };
};

    telaInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let msgTentativas = `Voçê descobriu o número secreto com ${tentativa} ${palavraTentativa} `;
        exibirTextoNaTela('p', msgTentativas);  
             document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p','O Número e Menor');
        }else {
            exibirTextoNaTela('p','O Número e Maior');

        }
        tentativa++;
        cleanC();
    };
 }; 
function reset() { 
        // Desestruture o objeto retornado
        ({ numeroSecreto, nMax } = gerarNumeroSecreto()); 
        cleanC();
        tentativa = 1; 
        telaInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true);
        console.log("Número secreto gerado:", numeroSecreto);
    };