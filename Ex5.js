var idade = prompt("Insira a sua idade: ");

idade = parseInt(idade);

if (idade >= 18) {
    console.log("Você tem idade suficiente para dirigir. Dirija com segurança!");
} else {
    console.log("Desculpe, você ainda não tem idade suficiente para dirigir. Espere um pouco mais.");
}