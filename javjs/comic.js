/**EMPIEZA LA 1 */
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("clic").addEventListener("click", function() {
      var animation = document.getElementById("animation");
      var audio = document.getElementById("audio");
      animation.play();
      audio.play();  // Reproduce el audio cuando se hace clic en la imagen
  });

  document.getElementById("animation").addEventListener("complete", function() {
      var animation = document.getElementById("animation");
      animation.goToAndStop(animation.getDuration(), true);
  });
});

function ocultarImagen() {
  var imagen = document.getElementById('clic');
  imagen.style.display = 'none';
}

/**TERMINA LA 1 */

/**EMPIEZA LA 2 */
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("clic2").addEventListener("click", function() {
      var animation = document.getElementById("animation2");
      var audio = document.getElementById("audio2");
      animation.play();
      audio.play();  // Reproduce el audio cuando se hace clic en la imagen
  });

  document.getElementById("animation2").addEventListener("complete", function() {
      var animation = document.getElementById("animation2");
      animation.goToAndStop(animation.getDuration(), true);
  });
});

function ocultarImagen2() {
  var imagen = document.getElementById('clic2');
  imagen.style.display = 'none';
}

/**TERMINA LA 2 */

/**EMPIEZA LA 3 */
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("clic3").addEventListener("click", function() {
      var animation = document.getElementById("animation3");
      var audio = document.getElementById("audio3");
      animation.play();
      audio.play();  // Reproduce el audio cuando se hace clic en la imagen
  });

  document.getElementById("animation3").addEventListener("complete", function() {
      var animation = document.getElementById("animation3");
      animation.goToAndStop(animation.getDuration(), true);
  });
});

function ocultarImagen3() {
  var imagen = document.getElementById('clic3');
  imagen.style.display = 'none';
}
/**TERMINA LA 3 */

/**EMPIEZA LA 4 */
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("clic4").addEventListener("click", function() {
      var animation = document.getElementById("animation4");
      var audio = document.getElementById("audio4");
      animation.play();
      audio.play();  // Reproduce el audio cuando se hace clic en la imagen
  });

  document.getElementById("animation4").addEventListener("complete", function() {
      var animation = document.getElementById("animation4");
      animation.goToAndStop(animation.getDuration(), true);
  });
});

function ocultarImagen4() {
  var imagen = document.getElementById('clic4');
  imagen.style.display = 'none';
}
/**TERMINA LA 4 */

/**EMPIEZA LA 5 */
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("clic5").addEventListener("click", function() {
      var animation = document.getElementById("animation5");
      var audio = document.getElementById("audio5");
      animation.play();
      audio.play();  // Reproduce el audio cuando se hace clic en la imagen
  });

  document.getElementById("animation5").addEventListener("complete", function() {
      var animation = document.getElementById("animation5");
      animation.goToAndStop(animation.getDuration(), true);
  });
});

function ocultarImagen5() {
  var imagen = document.getElementById('clic5');
  imagen.style.display = 'none';
}
/**TERMINA LA 5 */

/**EMPIEZA LA 6 */
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("clic6").addEventListener("click", function() {
      var animation = document.getElementById("animation6");
      var audio = document.getElementById("audio6");
      animation.play();
      audio.play();  // Reproduce el audio cuando se hace clic en la imagen
  });

  document.getElementById("animation6").addEventListener("complete", function() {
      var animation = document.getElementById("animation6");
      animation.goToAndStop(animation.getDuration(), true);
  });
});

function ocultarImagen6() {
  var imagen = document.getElementById('clic6');
  imagen.style.display = 'none';
}
/**TERMINA LA 6 */



var boton = document.getElementById('botonAnimado');
var opacidad = 1; // opacidad inicial
var opacidadBaja = 0.5; // opacidad baja
var direccion = -1; // dirección inicial (subiendo)
var tiempoOpacidadBaja = 3000; // tiempo en milisegundos que el botón estará con opacidad baja
var intervaloAnimacion = 2000; // intervalo de tiempo en milisegundos (en este caso, 1 segundo)

setInterval(function() {
  opacidad += 0.1 * direccion; // Ajusta la velocidad de cambio de opacidad según tu preferencia
  boton.style.opacity = opacidad;

  // Cambiar dirección cuando llegue a los límites
  if (opacidad <= opacidadBaja || opacidad >= 1) {
    direccion *= 1;
  }

  // Si la opacidad llega a opacidadBaja, establece un temporizador para restaurar la opacidad después de tiempoOpacidadBaja
  if (opacidad <= opacidadBaja) {
    setTimeout(function() {
      opacidad = 1; // Restaurar la opacidad alta
      direccion = 1; // Cambiar la dirección a subir
    }, tiempoOpacidadBaja);
  }
}, intervaloAnimacion);




// Función para abrir la modal al hacer clic en el botón
document.getElementById('btnAyuda').onclick = function() {
  var modal = new bootstrap.Modal(document.getElementById('emberImg'));
  modal.show();
}





