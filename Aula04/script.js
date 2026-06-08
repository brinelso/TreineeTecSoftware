const fotos = document.querySelectorAll(".foto");
const btnEsquerda = document.getElementById("btn-esquerda");
const btnDireita = document.getElementById("btn-direita");

let indice = 0;

btnDireita.addEventListener("click", () => {
    fotos[indice].classList.remove("selecionada");

    if (indice < fotos.length - 1) {
        indice = indice + 1;
    } else {
        indice = 0;
    }

    fotos[indice].classList.add("selecionada");
});

btnEsquerda.addEventListener("click", () => {
    fotos[indice].classList.remove("selecionada");

    if (indice > 0) {
        indice = indice - 1;
    } else {
        indice = fotos.length - 1;
    }

    fotos[indice].classList.add("selecionada");
});