function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let numeros = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < 6; i++) {
    let numExt = true;
    while(numExt){
        let numeroSorteado = getRandomInt(60) + 1;
        for (let index = 0; index < numeros.length; index++) {
            const numeroDaVez = numeros[index];
            if(numeroDaVez === numeroSorteado){
                numExt = true;
                break;
            }else {
                numExt = false;
            }
        }
        if (!numExt) {
            numeros[i] = numeroSorteado;
        }
    }    
}

// for (let i = 0; i < 6; i++) {
//     console.log(`Indice ${i}`);
//     let numeroSorteado = getRandomInt(60) + 1;
//     if (!numeros.includes(numeroSorteado)) {
//         numeros.push(numeroSorteado);
//         console.log(`Numero ${numeroSorteado}`);
//     }else {
//         console.log(`Repitido ${numeroSorteado}`);
//         numeroSorteado = getRandomInt(60) + 1;        
//         i--;
//     }
// } 

console.log();

numeros.forEach(element => {
    console.log(element);
});