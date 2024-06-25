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

//EFEITO BOTÃO DE VOLTAR AO TOPO
const btnVoltarTopo = document.querySelector(".btn-back-to-top");

window.addEventListener("scroll", aparecerbtn)

function aparecerbtn() {
    if(window.scrollY > 300) {
        btnVoltarTopo.style.display = "flex";
    } else {
        btnVoltarTopo.style.display = "none";
    }
}
aparecerbtn()


//FUNÇÃO DO BOTÃO PARA VOLTAR AO TOPO
btnVoltarTopo.addEventListener("click", function() {
    window.scrollTo(0,0)})