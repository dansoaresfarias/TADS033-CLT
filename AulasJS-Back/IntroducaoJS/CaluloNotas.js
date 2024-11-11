let nota, media, conceito, qtdFalta;

media = 0;

for (let i = 1; i <= 3; i++) {
    nota = parseFloat(prompt(`Informe a ${i}ª nota: `));
    media += nota;
}

media /= 3;

if (qtdFalta <= 15) {
    (media >= 9.5) ? conceito = "Excelente" :
        (media >= 8.5) ? conceito = "Ótimo" :
            (media >= 7.0) ? conceito = "Bom" :
                (media >= 5.0) ? conceito = "ANS" :
                    conceito = "Insuficiente";

}else {
    conceito = "Insuficiente";
    console.log("Reprovado por falta")
}

// if(media >= 9.5) {
//     conceito = "Excelente";
// }else if(media >= 8.5) {
//     conceito = "Ótimo";
// }else if(media >= 7.0) {
//     conceito = "Bom";
// }else if(media >= 5.0) {
//     conceito = "ANS";
// }else {
//     conceito = "Insuficiente";
// }

console.log(`Sua média foi ${media.toFixed(2)} e 
    seu conceito foi ${conceito}`);