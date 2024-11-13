let num1, num2, op;

num1 = Number(prompt("Informe o primeiro número: "));
op = prompt("Informe o operador (+ | - | x | / ): ");
num2 = Number(prompt("Informe o segundo número: "));

switch (op) {
    case '+':
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case '-':
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case 'x':
        console.log(`${num1} x ${num2} = ${num1 * num2}`);
        break;
    case '/':
        if (num2 === 0) {
            console.log(`Não podemos dividir por zero!`);
            break;
        }
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;
    default:
        console.log(`Operador invalido, ${op}!`);
        break;
}