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
    var textoCompleto = 'Mi Amor, \n\n'+
    'En la calidez de estas palabras, '+ 
    'encuentro el eco de mis sentimientos ' + 
    'más profundos, una melodía que resuena ' + 
    'en el rincón más sagrado de mi corazón. ' + 
    'Es difícil expresar con simples letras la ' + 
    'inmensidad de lo que siento por ti, pero hoy '+ 
    ', en esta página, intentaré pintar con palabras '+ 
    'el lienzo de nuestro amor. \n\n '+ 
    'Cada instante que compartimos se convierte en '+ 
    'un tesoro atemporal, una joya que brilla con ' + 
    'la luz única de nuestra complicidad. En la ' + 
    'danza eterna de la vida, tú has sido mi pareja '+ 
    'perfecta, mi confidente y mi lugar seguro. \n\n'+ 
    'En este rincón de la existencia donde nuestros '+ 
    'destinos se entrelazaron, floreció un amor que ' + 
    'va más allá de las palabras comunes, un amor que '+ 
    'respira con cada latido de nuestro ser. \n\n'+ 
    'Deseo expresarte mi ' + 
    'gratitud por cada risa compartida, por cada ' + 
    'lágrima secada y por el crecimiento que hemos '+ 
    'experimentado juntos. Eres la melodía que adorna ' + 
    'mi vida, la poesía que da sentido a mis días, y cada ' + 
    'línea escrita lleva consigo la esencia de mi amor '+  
    'incondicional hacia ti.';

    var cont = 0;
    indice = 0;

    

    function escribirTexto(textoCompleto) {
        if (typeof parrafo !== 'undefined') {
            parrafo.innerHTML += textoCompleto.charAt(indice);
    
            if (textoCompleto.charAt(indice) === '\n') {
                parrafo.innerHTML += '<br>';
            }
    
            indice++;
    
            if (indice < textoCompleto.length) {
                setTimeout(function() {
                    escribirTexto(textoCompleto);
                }, 20);
            }
          }
        }

    escribirTexto(textoCompleto);
});