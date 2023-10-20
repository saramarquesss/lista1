var rendaAnual = prompt("Insira sua renda anual: ");

rendaAnual = parseFloat(rendaAnual);

var limiteIsencao = 50000;

if (rendaAnual > limiteIsencao) {
    console.log("Você deve pagar impostos. Consulte um profissional de impostos para obter mais informações.");
} else {
    console.log("Você está isento de pagar impostos. Parabéns!");
}