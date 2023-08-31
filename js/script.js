var button = document.getElementById('btn-ler-mais');

button.addEventListener('click', function() {
    var containertext = document.querySelector ('.container-text');
    containertext.classList.toggle('active');

    if (containertext.classList.contains('active')) {
        return button.textContent = "Ler menos";
    }

    button.textContent ="Ler mais...";
});