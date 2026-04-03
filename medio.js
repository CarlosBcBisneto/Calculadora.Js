const prompt = require("prompt-sync")();

let historico = [];//Criação do array do historico

//Funções
function sum(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mult(a, b) { return a * b; }
function div(a, b) {
    if (b === 0) return "Divisão por zero!"; //Verificando divisão por zero
    return a / b;
}

function isNumb(a, b) {
    return !isNaN(a) && !isNaN(b); //Verificando se são números
}

function lerNumeros() {
    let n1 = Number(prompt("Digite um número: "));
    let n2 = Number(prompt("Digite outro número: "));

    if (!isNumb(n1, n2)) {
        console.log("Digite apenas números válidos!");
        return null;
    }

    return [n1, n2];
}

while (true) {
    //Opções do Menu
    console.log("\n=== MENU ===");
    console.log("/ * - +");
    console.log("h : Histórico");
    console.log("s : Sair");

    let option = prompt("Escolha: ");

    if (option === "s") break;

    if (option === "h") {
        console.log("\nHistórico:");
        historico.length === 0
            ? console.log("Nenhuma operação ainda.")
            : historico.forEach(item => console.log(item));
        continue;
    }

    if (!["/", "*", "-", "+"].includes(option)) { //Validação se a opção digitada está na lista de operações
        console.log("Operação inválida!");
        continue;
    }

    let numeros = lerNumeros();//Recebe um array de números [n1,n2] ou null
    if (!numeros) continue;//Verifica se é null, se for null então continue; se não segue o código

    let [n1, n2] = numeros;//Atribui o array as variáveis

    let resultado;

    if (option === "/") resultado = div(n1, n2);
    if (option === "*") resultado = mult(n1, n2);
    if (option === "-") resultado = sub(n1, n2);
    if (option === "+") resultado = sum(n1, n2);

    let conta = `${n1} ${option} ${n2} = ${resultado}`;
    console.log(conta);
    historico.push(conta);
}