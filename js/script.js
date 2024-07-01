//FUNÇÃO DE REMOVER PAGINAS DO HOME E ADICIONAR UM CABEÇALHO!
/*var menuNavHome = document.querySelector(".homescreen-navbar")
var menuNavTopo = document.querySelector(".homescreen-navbar-top")
window.addEventListener("scroll", menunavtopo)
function menunavtopo() {
    if(window.scrollY > 400) {
        menuNavTopo.style.display = "flex";
        menuNavHome.style.visibility = "hidden";
    } else {
        menuNavTopo.style.display = "none";
        menuNavHome.style.visibility = "visible";
    }
}*/


//EFEITO BOTÃO DE VOLTAR AO TOPO
const btnVoltarTopo = document.querySelector(".btn-back-to-top");

window.addEventListener("scroll", aparecerbtn)

function aparecerbtn() {
    if (window.scrollY > 300) {
        btnVoltarTopo.style.display = "flex";
    } else {
        btnVoltarTopo.style.display = "none";
    }
}
aparecerbtn()

//FUNÇÃO DO BOTÃO PARA VOLTAR AO TOPO
btnVoltarTopo.addEventListener("click", function () {
    window.scrollTo(0, 0)
})


//EFEITOS DE SCROLL NA PÁGINA

//EFEITO PROFILE
const profileeffect = document.querySelector(".profile")
const observerScrollProfile = new IntersectionObserver((entries) => {
    entries.forEach((profileeffect) => {
        if (profileeffect.isIntersecting) {
            profileeffect.target.classList.add("profileeffect")
        } else {
            profileeffect.target.classList.remove("profileeffect")
        }
    })
})
observerScrollProfile.observe(profileeffect);

//EFEITO PALAVRA "PORTIFOLIO"
const staticTitleEffect = document.querySelector(".static-title")
const observerScrollStaticTitle = new IntersectionObserver((entries) => {
    entries.forEach((staticTitleEffect) => {
        if (staticTitleEffect.isIntersecting) {
            staticTitleEffect.target.classList.add("staticTitleEffect")
        } else {
            staticTitleEffect.target.classList.remove("staticTitleEffect")
        }
    })
})
observerScrollStaticTitle.observe(staticTitleEffect);

//EFEITO PALAVRA "BRUNOFERRREIRA"
const dynamicTitleEffect = document.querySelector(".dynamic-title")
const observerScrollDynamicTitle = new IntersectionObserver((entries) => {
    entries.forEach((dynamicTitleEffect) => {
        if (dynamicTitleEffect.isIntersecting) {
            dynamicTitleEffect.target.classList.add("dynamicTitleEffect")
        } else {
            dynamicTitleEffect.target.classList.remove("dynamicTitleEffect")
        }
    })
})
observerScrollDynamicTitle.observe(dynamicTitleEffect);

//EFEITO LETREIRO
const containerAnimatedTextHomescreenEfecct = document.querySelector(".container-animated-text-homescreen")
const observerScrollcontainerAnimatedTextHomescreen = new IntersectionObserver((entries) => {
    entries.forEach((containerAnimatedTextHomescreenEfecct) => {
        if (containerAnimatedTextHomescreenEfecct.isIntersecting) {
            containerAnimatedTextHomescreenEfecct.target.classList.add("containerAnimatedText")
        } else {
            containerAnimatedTextHomescreenEfecct.target.classList.remove("containerAnimatedText")
        }
    })
})
observerScrollcontainerAnimatedTextHomescreen.observe(containerAnimatedTextHomescreenEfecct);

//EFEITO TITULO SOBRE MIM
const titleAboutEfecct = document.querySelector(".title-about")
const observerScrolltitleAbout = new IntersectionObserver((entries) => {
    entries.forEach((titleAboutEfecct) => {
        if (titleAboutEfecct.isIntersecting) {
            titleAboutEfecct.target.classList.add("titleAboutEfecct")
        } else {
            titleAboutEfecct.target.classList.remove("titleAboutEfecct")
        }
    })
})
observerScrolltitleAbout.observe(titleAboutEfecct)

//EFEITO TEXTO SOBRE MIM
const aboutTextEfecct = document.querySelector(".about-text")
const observerScrollAboutText = new IntersectionObserver((entries) => {
    entries.forEach((aboutTextEfecct) => {
        if (aboutTextEfecct.isIntersecting) {
            aboutTextEfecct.target.classList.add("aboutTextEfecct")
        } else {
            aboutTextEfecct.target.classList.remove("aboutTextEfecct")
        }
    })
})
observerScrollAboutText.observe(aboutTextEfecct)

//EFEITO TITULO CONHECIMENTOS
const titleKnowledgeEfecct = document.querySelector(".title-knowledge")
const observerScrollTitleKnowledge = new IntersectionObserver((entries) => {
    entries.forEach((titleKnowledgeEfecct) => {
        if (titleKnowledgeEfecct.isIntersecting) {
            titleKnowledgeEfecct.target.classList.add("titleKnowledgeEfecct")
        } else {
            titleKnowledgeEfecct.target.classList.remove("titleKnowledgeEfecct")
        }
    })
})
observerScrollTitleKnowledge.observe(titleKnowledgeEfecct)

//EFEITO LINGUAGENS
const containerKnowledgeAllEfecct = document.querySelectorAll(".container-knowledge")
const observerScrollContainerKnowledgeAll = new IntersectionObserver((entries) => {
    entries.forEach((containerKnowledgeAllEfecct) => {
        if (containerKnowledgeAllEfecct.isIntersecting) {
            containerKnowledgeAllEfecct.target.classList.add("KnowledgeEfecct")
        } else {
            containerKnowledgeAllEfecct.target.classList.remove("KnowledgeEfecct")
        }
    })
})

containerKnowledgeAllEfecct.forEach((Element) => observerScrollContainerKnowledgeAll.observe(Element))

//EFEITO EMAIL CONTATO
const contactEfecct = document.querySelector(".contact")
const observerScrollContact = new IntersectionObserver((entries) => {
    entries.forEach((contactEfecct) => {
        if (contactEfecct.isIntersecting) {
            contactEfecct.target.classList.add("contactEfecct")
        } else {
            contactEfecct.target.classList.remove("contactEfecct")
        }
    })
})
observerScrollContact.observe(contactEfecct)