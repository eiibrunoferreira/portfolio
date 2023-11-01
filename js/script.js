var menuNavrodapé = document.querySelector(".menunav")
var menuNavHome = document.querySelector(".homescreen-navbar")
window.addEventListener("scroll", menunavtopo)
function menunavtopo() {
    if(window.scrollY > 400) {
        menuNavTopo.style.display = "flex";
        menuNavHome.style.visibility = "hidden";
    } else {
        menuNavTopo.style.display = "none";
        menuNavHome.style.visibility = "visible";
    }
}



//EFEITO BOTÃO LER MAIS E LER MENOS EM RELAÇÃO AO EFEITO DE DEGRADẼ
var buttonLerMais = document.getElementById('btn-read-more');

buttonLerMais.addEventListener('click', function() {
    var containertext = document.querySelector ('.about-container-text');
    containertext.classList.toggle('active');

    var separadorTextSobreBottom = document.querySelector(".about-text");
    separadorTextSobreBottom.classList.toggle('activeSparator');

    if (containertext.classList.contains('active')) {
        return buttonLerMais.textContent = "Ler menos ▲";
    }

    buttonLerMais.textContent ="Ler mais... ▼";
});


//EFEITO BOTÃO DE VOLTAR AO TOPO
const btnVoltarTopo = document.querySelector(".btn-back-to-top");

window.addEventListener("scroll", ocultarbtn)

function ocultarbtn() {
    if(window.scrollY > 300) {
        btnVoltarTopo.style.display = "flex";
    } else {
        btnVoltarTopo.style.display = "none";
    }
}
ocultarbtn()


//FUNÇÃO DO BOTÃO PARA VOLTAR AO TOPO
btnVoltarTopo.addEventListener("click", function() {
    window.scrollTo(0,0)})