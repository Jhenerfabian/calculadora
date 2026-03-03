const readline = require("readline");
const suma = require("./suma");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el primer número: ", (num1) => {
    rl.question("Ingrese el segundo número: ", (num2) => {

        const resultado = suma(parseFloat(num1), parseFloat(num2));
        console.log("Resultado:", resultado);

        rl.close();
    });
});