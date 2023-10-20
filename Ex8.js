var numero1 = prompt("Insira o primeiro número: ");
var numero2 = prompt("Insira o segundo número: ");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

if (numero1 % numero2 === 0) {
    console.log(`${numero1} é divisível por ${numero2}.`);
} else {
    console.log(`${numero1} não é divisível por ${numero2}.`);
}