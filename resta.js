const readline = require("readline");
const resta = require("./resta");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el primer número: ", (num1) => {
    rl.question("Ingrese el segundo número: ", (num2) => {
        console.log("Resultado:", resta(parseFloat(num1), parseFloat(num2)));
        rl.close();
    });
});