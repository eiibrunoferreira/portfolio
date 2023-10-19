var menuNavTopo = document.querySelector(".header")
var menuNavHome = document.querySelector(".menu-nav-inicial")
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
var buttonLerMais = document.getElementById('btn-ler-mais');

buttonLerMais.addEventListener('click', function() {
    var containertext = document.querySelector ('.container-text');
    containertext.classList.toggle('active');

    var separadorTextSobreBottom = document.querySelector(".text-sobre");
    separadorTextSobreBottom.classList.toggle('activeSparator');

    if (containertext.classList.contains('active')) {
        return buttonLerMais.textContent = "Ler menos ▲";
    }

    buttonLerMais.textContent ="Ler mais... ▼";
});


//EFEITO BOTÃO DE VOLTAR AO TOPO
const btnVoltarTopo = document.querySelector(".btn-voltar-topo");

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

const btnVoltarTopoMobile = document.querySelector(".btn-voltar-topo-mobile")
btnVoltarTopoMobile.addEventListener("click", function() {
    window.scrollTo(0,0)
})





var btnMenuNavMobileInicial = document.querySelector('.btn-menu-inicial-mobile');

btnMenuNavMobileInicial.addEventListener('click', function() {
    var mobileMenuNavInicial = document.querySelector('.mobile-menu-nav-inicial')
    mobileMenuNavInicial.classList.toggle('flex');
})





var btnMenuNavMobile = document.querySelector('.btn-nav-mobile');

btnMenuNavMobile.addEventListener('click', function() {
    var menuNavMobile = document.querySelector('.mobile-menu-nav');
    menuNavMobile.classList.toggle('flex')
})

    const menuNavMobile = document.querySelector('.mobile-menu-nav');
    const sectionSobre = document.querySelector('#sectionSobre');
    const sectionConhecimentos = document.querySelector('#sectionConhecimentos');
    const sectionProjetos = document.querySelector('#sectionProjetos');
    const sectionContato = document.querySelector('#sectionContato');

    sectionSobre.addEventListener("click", function() {
        menuNavMobile.classList.remove('flex');
    });
    sectionConhecimentos.addEventListener("click", function() {
        menuNavMobile.classList.remove('flex');
    });
    sectionProjetos.addEventListener("click", function() {
        menuNavMobile.classList.remove('flex');
    });
    sectionContato.addEventListener("click", function() {
        menuNavMobile.classList.remove('flex');
    });