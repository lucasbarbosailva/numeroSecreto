function printConsole(texto) {
    console.log(texto);
};
printConsole('Ola Mundo!');
printConsole('Ola,Lucas!')

let soma;
function numberDobler(numero) {
    let resultado = numero * 2;
    return resultado;
}
// Para testar a função, você pode fazer o seguinte:
let numero = parseFloat(prompt('Digite um número:'));
let resultado = numberDobler(numero);
alert(`O dobro de ${numero} é: ${resultado}`);

function calcularMedia(num1, num2, num3) {
    let somaM = num1 + num2 + num3;
    let media = somaM / 3;
    return media;
}let media = calcularMedia(5, 10, 15);
console.log(`A média é: ${media}`);
function numeroM(numero1) {
    let numero1 
}