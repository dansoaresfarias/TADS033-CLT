function mudarJordy() {
    document.title = "Jordy Arlego";
    let textoFreela = document.getElementById("textoFreela");
    textoFreela.innerHTML = "Entre em contato comigo, sou melhor que Danilo. Jordy Negão!";
    textoFreela.setAttribute("class", "jordy");

    if (document.getElementById("aJordy")) {
        console.log(document.getElementById("aJordy"))
    } else {
        let aJordy = document.createElement("a");
        aJordy.setAttribute("href", "https://www.linkedin.com/in/jordy-arlego-82694b2b8/?originalSubdomain=br");
        aJordy.setAttribute("target", "_blank");
        aJordy.innerHTML = "Linkedin do Negão 🍻";
        aJordy.setAttribute("id", "aJordy");

        let divFreelance = document.getElementById("freelance");
        divFreelance.appendChild(aJordy);
    }

    document.getElementById("foto").setAttribute("src", "imgs/jordy.jpeg");
}

function exponenciacao() {
    let base = parseInt(document.getElementById("base").value);
    let exp = parseInt(document.getElementById("expoente").value);

    let resultado = base**exp;

    console.log(base + "^" + exp + " = " + resultado);

    let tagReult = document.getElementById("resultado");
    tagReult.innerHTML = "<br><b>Resultado: </b>" + resultado;
}
