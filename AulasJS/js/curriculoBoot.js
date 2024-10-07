function mudarJordy() {
    document.title = "Jordy Arlego";
    let textoFreela = document.getElementById("textoFreela");
    textoFreela.innerHTML = "Entre em contato comigo, sou melhor que Danilo. Jordy Negão!";
    textoFreela.setAttribute("class", "jordy");

    let aJordy = document.createElement("a");
    aJordy.setAttribute("href", "https://www.linkedin.com/in/jordy-arlego-82694b2b8/?originalSubdomain=br");
    aJordy.setAttribute("target", "_blank");    
    aJordy.innerHTML = "Linkedin do Negão 🍻";

    let divFreelance = document.getElementById("freelance");
    divFreelance.appendChild(aJordy);

    document.getElementById("foto").setAttribute("src", "imgs/jordy.jpeg");

}
