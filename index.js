const readline = require("readline");
const suma = require("./suma");
const resta = require("./resta");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("1. Sumar");
console.log("2. Restar");

rl.question("Seleccione una opción: ", (opcion) => {

    rl.question("Ingrese el primer número: ", (num1) => {
        rl.question("Ingrese el segundo número: ", (num2) => {

            const a = parseFloat(num1);
            const b = parseFloat(num2);
            let resultado;

            if (opcion === "1") {
                resultado = suma(a, b);
            } else if (opcion === "2") {
                resultado = resta(a, b);
            } else {
                console.log("Opción inválida");
                rl.close();
                return;
            }

            console.log("Resultado:", resultado);
            rl.close();
        });
    });
});