const selecionaQuarto = document.getElementById("seleciona-quarto");
const selecionaSala = document.getElementById("seleciona-sala");
const selecionaCozinha = document.getElementById("seleciona-cozinha");
const selecionaBanheiro = document.getElementById("seleciona-banheiro");
const selecionaEscritorio = document.getElementById("seleciona-escritorio");
const selecionaOutros = document.getElementById("seleciona-outros");

const perguntasQuarto = document.getElementById("perguntasQuarto");
const perguntasSala = document.getElementById("perguntasSala");
const perguntasCozinha = document.getElementById("perguntasCozinha");
const perguntasBanheiro = document.getElementById("perguntasBanheiro");
const perguntasEscritorio = document.getElementById("perguntasEscritorio");
const perguntasOutros = document.getElementById("perguntasOutros");

const perguntaQuarto1 = document.getElementById("pergunta__quarto1");
const perguntaQuarto2 = document.getElementById("pergunta__quarto2");
const perguntaQuarto3 = document.getElementById("pergunta__quarto3");
const perguntaQuarto4 = document.getElementById("pergunta__quarto4");

const perguntaSala1 = document.getElementById("pergunta__sala1");
const perguntaSala2 = document.getElementById("pergunta__sala2");
const perguntaSala3 = document.getElementById("pergunta__sala3");
const perguntaSala4 = document.getElementById("pergunta__sala4");

const perguntaCozinha1 = document.getElementById("pergunta__cozinha1");
const perguntaCozinha2 = document.getElementById("pergunta__cozinha2");
const perguntaCozinha3 = document.getElementById("pergunta__cozinha3");
const perguntaCozinha4 = document.getElementById("pergunta__cozinha4");

const perguntaBanheiro1 = document.getElementById("pergunta__banheiro1");
const perguntaBanheiro2 = document.getElementById("pergunta__banheiro2");
const perguntaBanheiro3 = document.getElementById("pergunta__banheiro3");
const perguntaBanheiro4 = document.getElementById("pergunta__banheiro4");

const perguntaEscritorio1 = document.getElementById("pergunta__escritorio1");
const perguntaEscritorio2 = document.getElementById("pergunta__escritorio2");
const perguntaEscritorio3 = document.getElementById("pergunta__escritorio3");
const perguntaEscritorio4 = document.getElementById("pergunta__escritorio4");

const perguntaOutros1 = document.getElementById("pergunta__outros1");

selecionaQuarto.addEventListener("click", () => {
    if(selecionaQuarto.checked) {
        perguntasQuarto.classList.remove("display-none");
        perguntasQuarto.classList.add("display-flex");
        perguntaQuarto1.required = true;
        perguntaQuarto2.required = true;
        perguntaQuarto3.required = true;
        perguntaQuarto4.required = true;
    } else {
        perguntasQuarto.classList.remove("display-flex");
        perguntasQuarto.classList.add("display-none");
        perguntaQuarto1.required = false;
        perguntaQuarto2.required = false;
        perguntaQuarto3.required = false;
        perguntaQuarto4.required = false;
    }
});

selecionaSala.addEventListener("click", () => {
    if(selecionaSala.checked) {
        perguntasSala.classList.remove("display-none");
        perguntasSala.classList.add("display-flex");
        perguntaSala1.required = true;
        perguntaSala2.required = true;
        perguntaSala3.required = true;
        perguntaSala4.required = true;
    } else {
        perguntasSala.classList.remove("display-flex");
        perguntasSala.classList.add("display-none");
        perguntaSala1.required = false;
        perguntaSala2.required = false;
        perguntaSala3.required = false;
        perguntaSala4.required = false;
    }
});

selecionaCozinha.addEventListener("click", () => {
    if(selecionaCozinha.checked) {
        perguntasCozinha.classList.remove("display-none");
        perguntasCozinha.classList.add("display-flex");
        perguntaCozinha1.required = true;
        perguntaCozinha2.required = true;
        perguntaCozinha3.required = true;
        perguntaCozinha4.required = true;
    } else {
        perguntasCozinha.classList.remove("display-flex");
        perguntasCozinha.classList.add("display-none");
        perguntaCozinha1.required = false;
        perguntaCozinha2.required = false;
        perguntaCozinha3.required = false;
        perguntaCozinha4.required = false;
    }
});

selecionaBanheiro.addEventListener("click", () => {
    if(selecionaBanheiro.checked) {
        perguntasBanheiro.classList.remove("display-none");
        perguntasBanheiro.classList.add("display-flex");
        perguntaBanheiro1.required = true;
        perguntaBanheiro2.required = true;
        perguntaBanheiro3.required = true;
        perguntaBanheiro4.required = true;
    } else {
        perguntasBanheiro.classList.remove("display-flex");
        perguntasBanheiro.classList.add("display-none");
        perguntaBanheiro1.required = false;
        perguntaBanheiro2.required = false;
        perguntaBanheiro3.required = false;
        perguntaBanheiro4.required = false;
    }
});

selecionaEscritorio.addEventListener("click", () => {
    if(selecionaEscritorio.checked) {
        perguntasEscritorio.classList.remove("display-none");
        perguntasEscritorio.classList.add("display-flex");
        perguntaEscritorio1.required = true;
        perguntaEscritorio2.required = true;
        perguntaEscritorio3.required = true;
        perguntaEscritorio4.required = true;
    } else {
        perguntasEscritorio.classList.remove("display-flex");
        perguntasEscritorio.classList.add("display-none");
        perguntaEscritorio1.required = false;
        perguntaEscritorio2.required = false;
        perguntaEscritorio3.required = false;
        perguntaEscritorio4.required = false;
    }
});

selecionaOutros.addEventListener("click", () => {
    if(selecionaOutros.checked) {
        perguntasOutros.classList.remove("display-none");
        perguntasOutros.classList.add("display-flex");
        perguntaOutros1.required = true;
    } else {
        perguntasOutros.classList.remove("display-flex");
        perguntasOutros.classList.add("display-none");
        perguntaOutros1.required = false;
    }
});

