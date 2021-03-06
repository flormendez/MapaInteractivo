lugaresModulo = (function() {
  var servicioLugares; // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

  // Completa las direcciones ingresadas por el usuario a y establece los límites
  // con un círculo cuyo radio es de 20000 metros.
  function autocompletar() {
    var input = [
      document.getElementById("direccion"),
      document.getElementById("desde"),
      document.getElementById("hasta"),
      document.getElementById("agregar")
    ];
    var circle = new google.maps.Circle({
      center: mapa.getCenter(),
      radius: 1500
    });
    var options = {
      bounds: circle.getBounds()
    };
    for (var i = 0; i < input.length; i++) {
      new google.maps.places.Autocomplete(input[i], options);
    }
  }

  // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar() {
    servicioLugares = new google.maps.places.PlacesService(mapa);
    autocompletar();
  }

  // Busca lugares con el tipo especificado en el campo de TipoDeLugar

  function buscarCerca(posicion) {
    /* Completar la función buscarCerca  que realice la búsqueda de los lugares
    del tipo (tipodeLugar) y con el radio indicados en el HTML cerca del lugar
    pasado como parámetro y llame a la función marcarLugares. */
    servicio = new google.maps.places.PlacesService(mapa);
    var request = {
      type: document.getElementById("tipoDeLugar").value,
      location: posicion,
      radius: document.getElementById("radio").value
    };
    servicio.nearbySearch(request, function(results, status) {
      marcadorModulo.marcarLugares(results, status);
    });
  }
  return {
    inicializar,
    buscarCerca
  };
})();
