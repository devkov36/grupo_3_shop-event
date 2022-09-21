window.addEventListener("load", function (){

    let formulario = document.querySelector ("form.reservation");

    formulario.addEventListener ("submit", function (e){
    e.preventDefatuly();

    let campoNombre = document.querySelector("input.name");

    if (campoNombre.value ==" " ) {
        alert("El campo de nombre Tiene que esta completo!!")
    }
    else if ( campoNombre.value.length < 2) {
        alert("El campo de nombre Tiene que tener mas de dos caracteres!!")

    }

    let campoDescripcion = document.querySelector("input.name");

    if (campoDescripcion.value ==" " ) {
        alert("El campo de nombre Tiene que esta completo!!")
    }
    else if ( campoDescripcion.value.length < 20) {
        alert("El campo de nombre Tiene que tener como minimo 20 caracteres!!")

    }

    function verImagen(datos) {

        if (datos.files && datos.files[0]) {
   
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#img').attr('src', e.target.result);
            };
   
            reader.readAsDataURL(datos.files[0]);
         }
     }

     let campoImagen = document.querySelector ("#imagen")

    var extensionesValidas = ".png, .gif, .jpeg, .jpg";
    var pesoPermitido = 1024;

   // Cuando cambie #fichero
   $("#fichero").change(function () {

       $('#texto').text('');
   $('#img').attr('src', '');

   if(validarExtension(this)) {

           if(validarPeso(this)) {
       verImagen(this);
       }
   }  
   });

   // Validacion de extensiones permitidas

   function validarExtension(datos) {

   var ruta = datos.value;
   var extension = ruta.substring(ruta.lastIndexOf('.') + 1).toLowerCase();
   var extensionValida = extensionesValidas.indexOf(extension);

   if(extensionValida < 0) {
           $('#texto').text('La extensión no es válida Su fichero tiene de extensión: .'+ extension);
           return false;
       } else {
           return true;
       }
   }

  // Validacion de peso del fichero en kbs

   function validarPeso(datos) {

       if (datos.files && datos.files[0]) {

       var pesoFichero = datos.files[0].size/1024;

       if(pesoFichero > pesoPermitido) {
           $('#texto').text('El peso maximo permitido del fichero es: ' + pesoPermitido + ' KBs Su fichero tiene: '+ pesoFichero +' KBs');
           return false;
       } else {
           return true;
       }
   }
   }

 // Vista preliminar de la imagen.
 function verImagen(datos) {

     if (datos.files && datos.files[0]) {

         var reader = new FileReader();
         reader.onload = function (e) {
             $('#img').attr('src', e.target.result);
         };

         reader.readAsDataURL(datos.files[0]);
      }
  }



    })
})