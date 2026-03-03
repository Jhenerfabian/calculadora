function Suma (a,b){
    return a+b;
}
module.exports= Suma
const readline = requiere ("readline");
const Suma = requiere ("./suma");
const rl = readline.createinterface({
    input: Process.stdin,
    output:Process.stdout
});
rl.question("ingrese el primer numero: ",(num1)=> {
    rl.question("ingrese el segundo numero: ", (num2)=>{
        console.log ("resultado: ",Suma(parseFloat(num1),parseFloat(num2)));
        rl.close();
    })
})
