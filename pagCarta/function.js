   
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const card = document.getElementById('card');
const exit = document.getElementById('btnExit');
const btnNext = document.getElementById('btnNext');
const btnPrev = document.getElementById('btnPrev');
const title = document.getElementById('title');
const cierre = document.getElementById('cierre');

const texto = document.getElementById('texto');
const pagUno = document.getElementById('cardContent');
let pag = 0;
let indice = 0;
let escribir;

const txtUno = '-Ultimamente no me he sentido '+
  'muy bien, suelo pensar mucho '+
  'y muy poco, es extraño. A veces '+
  'trato de estudiar, pero no se '+
  'me queda en la memoria, no se '+
  'si ando disperso o simplemente '+
  ' necesito despejarme.'+
  '\n\n'+
  ' -Tener una relacion de pareja '+
  ' es complicado y siento que este año '+
  ' fue mas complicado que el anterior,'+
  ' donde me esforze tanto por nada.'+
  ' Aprendi que no es tan importante esforzarte tanto '+
  'por algo, solo es bueno esforzarte lo suficiente '+
  'para sentirte bien contigo mismo y eso me costo mucho tiempo '+
  'aprenderlo, me hubiera gustado saberlo antes, pero no '+
  'me arrepiento de nada, solo quiero seguir a delante y seguir '+
  'aprendiendo muchas mas cosas, como te lo dije al comienzo. \n\n'+
  '-Tanto por lo que hemos pasado y hemos querido seguir juntos, '+
  'porque esto es de los dos y agradezco el haberte conocido , de verdad '+
  'me gusta mucho pasar tiempo a tu lado.';

const txtDos = '-Recuerdo que al comienzo, cuando te conoci siempre pensaba, en que regalo hacerte '+
  'ya que no me gustan mucho las manualidades y siempre tuve un pensamiento borroso '+
  'de que regalarte. Porque tu me dijiste una vez que no te hacia regalos '+
  'Hechos por mi y no tenia idea de que hacerte, asi que no se me ocurrio mejor idea ' +
  'que hacerte una pagina web simple de momento para escribirte esto. \n\n'+
  '-Aunque paresca simple me llevo bastante tiempo, no tenia mucha idea de como hacer una '+
  'ya que no tuvimos profesor de esta materia pero he ido estudiando, motivandome y '+
  'aprendiendo, lo que me gusta para poder darte esto. No es algo material, pero si es algo que hice con mucho esfuerzo. \n\n'+
  '-Asi espero ir mejorando cada dia mas para que se simplifique '+
  'todo este trabajo, no es mucho y lo siento 🥺 pero es lo que mejor se me da '+
  'y mejor se hacer. \n\n' +
  'Te amo mucho , me has hecho muy feliz estos meses, y siento que no podre seguir adelante sin ti, puedo llegar a ser muy sensible contigo, '+
  'tus palabras a veces me llegan al corazon y se siente extraño y bonito a la vez, sentir como el corazon se acelera de la nada, bombea sangre mas fuerte '+
  'y da algo a la cabeza que provoca que salgan lagrimas de los ojos, eso solo lo haces tu.';

  const txtTres = '-Te quiero prometer que siempre llegare a tu lado, no me importa que tan lejos estemos o que obstaculos se interpongan en nuestro camino, '+
  'siempre llegare a tu lado. \n\n'+
  ' Los momentos que mas se marcan en mi mente son extraños algunos son el dia que te vi , el dia que fuimos a la plaza a hablar por primera vez, '+
  'cuando conoci a tu mama, el dia que te pedi pololeo en la plaza, los regalos que te di los primeros meses (esos regalos en los que me esforze mucho en hacerlos) \n\n' +

'-El domingo dijiste muchas cosas que no se si las dijiste en serio o no, yo creo que si, aquellas palabras me llegaron muy profundo dentro de mi, '+
  'no se porque dijiste tantas cosas, como que yo te habia salvado, eso es lo que mas me quedo guardado en la memoria y me gustaria que me explicaras mejor eso, '+
  'tambien no me gusto eso que me contaste que tu mama te dijo "Eres adoptada" y me gustaria saber tambien porque me dijiste que te dio lo mismo, yo se que no es asi, '+
  'se que igual te afecta en sieto punto y no me quisiste decir.';
  
  const txtCuatro = 'No quiero que trabajes el año que viene, sea el motivo que sea, y no pienses en la casa mensa, de igual momento conseguiremos  nuestra casa propia para poder tener mascotas '+
  'o nuestros hijos o solo uno depende de muchas cosas y tambien la nutria o un zorro, podremos hacer muchas cosas y ser felices juntos, se que puede sinar muy fantasios, '+
  'pero en verdad quiero que suceda, asi que me seguire esforzando y si es necesario me esforzare el doble para poder conseguir todo lo que anhelamos. \n\n'+
   'asi que espera, se pasiente que yo no te fallare nunca, estoy muy enamorado de ti, si supieras lo mucho que te amo 😔, algun dia quiero que entiendas cuanto te amo.';


canvas.width = 300;
canvas.height = 200;

function resizeCanvas() {
  canvas.width = 1100; // Ajusta el nuevo ancho
  canvas.height = 3000; // Ajusta el nuevo alto
}

function escribirTexto(txt, paso) {
if (typeof texto !== 'undefined') {
    texto.innerHTML += txt.charAt(indice);

    if (txt.charAt(indice) === '\n') {
        texto.innerHTML += '<br>';
    }

    indice++;

    if (indice < txt.length && escribir) {
        setTimeout(function() {
            escribirTexto(txt, paso);
        }, paso);
    }
  }
}


// Función para reiniciar la escritura
function reiniciarEscritura(txt, paso) {
    indice = 0;
    texto.innerHTML = ''; // Limpiar el contenido actual
    detenerEscritura(); // Detener la escritura antes de reiniciar
    setTimeout(function() {
        iniciarEscritura(txt, paso); // Iniciar la escritura después de un breve retraso (ajusta según sea necesario)
    }, 500);
}

function iniciarEscritura(txt, paso) {
  if (!escribir) {
      escribir = true;
      escribirTexto(txt, paso);
  }
}

// Función para detener la escritura
function detenerEscritura() {
    escribir = false;
}



function drawClosedCard() {
  // Dibuja líneas para simular la apariencia de una carta cerrada
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

  // Dibuja el corazón en el medio
  const heartSize = 30;
  const x = canvas.width / 2 - heartSize / 2;
  const y = canvas.height / 2 - heartSize / 2;
  drawHeart(x, y, heartSize, '#ff4d6d');
}

function drawOpenedCard() {
  // Dibuja el contenido de la carta abierta (sin orillas y corazón)
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  card.style.height = '80%';
  card.style.width = '80%';
  card.style.overflow = 'auto';
  btnNext.style.display = "inline-block";
}

function goExit(){
  window.location.href = "../index.html";
}

function goBack() {
  if(pag === 2){
    pag--;
    detenerEscritura();
    card.style.transition = 'transform 0.2s ease-in-out'; // Ajusta el valor '2s' según sea necesario
    card.style.transform = 'rotateY(180deg)';
    setTimeout(function() {
      btnPrev.style.display = "none";
      card.style.transition = 'transform 0s ease-in-out'; // Ajusta el valor '2s' según sea necesario
      card.style.transform = 'rotateY(0deg)';
      reiniciarEscritura(txtUno, 1);
    }, 200);
    title.style.display = 'flex';

  }else if(pag === 3){
    pag--;
    detenerEscritura();
    card.style.transition = 'transform 0.2s ease-in-out'; // Ajusta el valor '2s' según sea necesario
    card.style.transform = 'rotateY(180deg)';
    setTimeout(function() {
      btnPrev.style.display = "inline-block";
      card.style.transition = 'transform 0s ease-in-out'; // Ajusta el valor '2s' según sea necesario
      card.style.transform = 'rotateY(0deg)';
      reiniciarEscritura(txtDos, 1);
    }, 200);
  }else if(pag === 4){
    pag--;
    detenerEscritura();
    card.style.transition = 'transform 0.2s ease-in-out'; // Ajusta el valor '2s' según sea necesario
    card.style.transform = 'rotateY(180deg)';
    setTimeout(function() {
      btnPrev.style.display = "inline-block";
      card.style.transition = 'transform 0s ease-in-out'; // Ajusta el valor '2s' según sea necesario
      card.style.transform = 'rotateY(0deg)';
      reiniciarEscritura(txtDos, 1);
    }, 200);
    
    cierre.style.display = 'none';
    btnNext.style.display = 'inline-block';
    exit.style.display = 'none';
  }  
  
}

function goForward() {
  console.log("avanzando..");
  if(pag == 1){
    pag++;
    detenerEscritura();
    card.style.transition = 'transform 0.2s ease-in-out'; // Ajusta el valor '2s' según sea necesario
    card.style.transform = 'rotateY(180deg)';
    title.style.display = 'none';
    setTimeout(function() {
      btnPrev.style.display = "inline-block";
      card.style.transition = 'transform 0s ease-in-out'; // Ajusta el valor '2s' según sea necesario
      card.style.transform = 'rotateY(0deg)';
      reiniciarEscritura(txtDos, 25);
    }, 200);
  }else if(pag === 2){
    pag++;
    detenerEscritura();
    card.style.transition = 'transform 0.2s ease-in-out'; // Ajusta el valor '2s' según sea necesario
    card.style.transform = 'rotateY(180deg)';
    setTimeout(function() {
      btnPrev.style.display = "inline-block";
      card.style.transition = 'transform 0s ease-in-out'; // Ajusta el valor '2s' según sea necesario
      card.style.transform = 'rotateY(0deg)';
      reiniciarEscritura(txtTres, 25);
    }, 200);
  }else if(pag === 3){
    pag++;
    detenerEscritura();
    card.style.transition = 'transform 0.2s ease-in-out'; // Ajusta el valor '2s' según sea necesario
    card.style.transform = 'rotateY(180deg)';
    setTimeout(function() {
      btnPrev.style.display = "inline-block";
      card.style.transition = 'transform 0s ease-in-out'; // Ajusta el valor '2s' según sea necesario
      card.style.transform = 'rotateY(0deg)';
      reiniciarEscritura(txtTres, 25);
    }, 200);
    cierre.style.display = 'flex';
    btnNext.style.display = 'none';
    exit.style.display = 'inline-block';
  }
}

// Inicializa la carta cerrada
drawClosedCard();




  card.addEventListener('click', () => {
    if (pag === 0){
      // Abre la carta al hacer clic
      card.style.transition = 'transform 1s ease-in-out'; // Ajusta el valor '2s' según sea necesario
      card.style.transform = 'rotateY(360deg)';

        setTimeout(function() {
        console.log('Esta parte se ejecutará después de 2 segundos.');
        // Muestra el botón de volver cuando la carta está abierta
        // Oculta el contenido visual del sobre cerrado
        document.getElementById('heartIcon').style.display = 'none';
        // Dibuja el contenido de la carta abierta
        drawOpenedCard();            // Ajusta el tamaño del canvas al abrir la carta
        resizeCanvas();
        card.style.transition = 'transform 0s ease-in-out'; // Ajusta el valor '2s' según sea necesario
        card.style.transform = 'rotateY(0deg)';
        iniciarEscritura(txtUno, 25);
        indice = 0;
              
      }, 800);
      pag++;
    }
  });

function drawHeart(x, y, color) {
    // Utiliza el emoji ❤️ en lugar de dibujar el corazón
    ctx.font = '50px serif';
    ctx.fillStyle = color;
    const textWidth = ctx.measureText('❤️').width;
    const textHeight = 50; // El emoji tiene una altura fija
    ctx.fillText('❤️', x - textWidth / 4, y + textHeight / 3);
}


    