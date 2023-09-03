
//EFEITO ROLAGEM
window.addEventListener("scroll", rolagemefeito);

function rolagemefeito() {
    let nav = document.querySelector('.menu-nav');
    nav.classList.toggle('flex', window.scrollY > 950);
}



//EFEITO LER MAIS
var button = document.getElementById('btn-ler-mais');

button.addEventListener('click', function() {
    var containertext = document.querySelector ('.container-text');
    containertext.classList.toggle('active');

    var separadorTextSobreBottom = document.querySelector(".text-sobre");
    separadorTextSobreBottom.classList.toggle('activeSparator');

    if (containertext.classList.contains('active')) {
        return button.textContent = "Ler menos ▲";
    }

    button.textContent ="Ler mais... ▼";
});

//EFEITO BTN APARECER

const btnVoltarTopo = document.querySelector(".btn-voltar-topo");

window.addEventListener("scroll", ocultarbtn)

function ocultarbtn() {
    if(window.scrollY > 950) {
        btnVoltarTopo.style.display = "flex"
    } else {
        btnVoltarTopo.style.display = "none"
    }
}
ocultarbtn()



//EFEITO PARA VOLTAR LA PRA CIMA
btnVoltarTopo.addEventListener("click", function() {
    window.scrollTo(0,0)
})