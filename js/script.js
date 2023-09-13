//EFEITO ROLAGEM MENU DE NAVEGAÇÃO
window.addEventListener("scroll", rolagemefeito);

function rolagemefeito() {
    let nav = document.querySelector('.menu-nav');
    nav.classList.toggle('flex', window.scrollY > 600);
}


//EFEITO BOTÃO LER MAIS E LER MENOS EM RELAÇÃO AO EFEITO DE DEGRADẼ
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


//EFEITO BOTÃO DE VOLTAR AO TOPO
const btnVoltarTopo = document.querySelector(".btn-voltar-topo");

window.addEventListener("scroll", ocultarbtn)

function ocultarbtn() {
    if(window.scrollY > 5) {
        btnVoltarTopo.style.display = "flex"
    } else {
        btnVoltarTopo.style.display = "none"
    }
}
ocultarbtn()


//FUNÇÃO DO BOTÃO PARA VOLTAR AO TOPO
btnVoltarTopo.addEventListener("click", function() {
    window.scrollTo(0,0)
})