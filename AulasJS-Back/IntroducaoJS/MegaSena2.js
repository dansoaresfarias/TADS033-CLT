function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let numeros = [];

for (let i = 0 ; i < 6 ; i++) {
    let numeroDaVez = getRandomInt(60) + 1;
    if (numeros.includes(numeroDaVez)) {
        i--;
    } else {
        numeros.push(numeroDaVez);
    }
}

console.log(numeros);