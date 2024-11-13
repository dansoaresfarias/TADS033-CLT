let repetir = "SIM";
while (repetir === "SIM") {
    let base, exp, result = 1;

    base = parseInt(prompt("Informa um inteiro para base da exponenciação: "));

    exp = parseInt(prompt("Informa um inteiro para expoente da exponenciação: "));

    for (let i = 0; i < exp; i++) {
        result *= base;
    }

    console.log(`O resultado da exponenciação, ${base}^${exp} = ${result}`);

    repetir = prompt("Deseja repetir o programa? (sim | não): ").toUpperCase();
}