const prompt = require('prompt-sync')();

function areaEsf(raio) {
    let area;
    area = 4 * Math.PI * raio**2;
    return area;
}

let volumeEsf = function (raio) {
    return (4/3) * Math.PI * raio**3;
};

const circunferenciaEsf = (raio) => 2 * Math.PI * raio;

let repetir;

do{
    console.clear();
    console.log(".:: Programa para Calcular tudo da Esfera ::.");
    let raio = parseFloat(prompt("Informe o valor do raio: "));
    console.log(`Circunferência da esfera é ${circunferenciaEsf(raio).toFixed(2)},
    a Área da esfera é ${areaEsf(raio).toFixed(2)} 
    o Volume da esfera é ${volumeEsf(raio).toFixed(2)}`);
    repetir = prompt("Deseja repetir o programa? (sim | não): ").toLowerCase();
} while(repetir == "sim");