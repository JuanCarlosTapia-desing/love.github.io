document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
        },
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var parrafo = document.getElementById("miParrafoUno");
    var textoCompleto = parrafo.innerHTML;
    parrafo.innerHTML = ""; // Limpiamos el contenido original
    var cont = 0;

    function escribirTexto(index) {
        if (index < textoCompleto.length) {
            parrafo.innerHTML += textoCompleto.charAt(index);
            index++;
            setTimeout(function () {
                escribirTexto(index);
            }, 50); // Ajusta el tiempo entre caracteres (en milisegundos)
        }
    }

    escribirTexto(0);
});