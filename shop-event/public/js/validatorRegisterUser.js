window.addEventListener("load", function (){

    let formulario = document.querySelector ("form.reservation");

    formulario.addEventListener ("submit", function (e){
    e.preventDefatuly();

    let campoNombre = document.querySelector("#name");

    if (campoNombre.value ==" " ) {
        alert("El campo de nombre Tiene que esta completo!!")
    }
    else if ( campoNombre.value.length < 2) {
        alert("El campo de nombre Tiene que tener mas de dos caracteres!!")

    }

    let campoMail = document.querySelector("#mail");
    
    if (campoMail.value ==" " ) {
        alert("El campo de mail Tiene que esta completo!!")
    }
    
    if (emailRegex.test(campo.value)) {
        valido.innerText = "válido";
      }
      alert("El campo de mail Tiene que tener caracteres validos!!")


    let campoPassword = document.querySelector ("#password");

            // set password variable
    var password = $(this).val();
    var p1 = document.getElementById("password1").value;
    var p2 = document.getElementById("password2").value;
    var noValido = / /;

    if ( campoPassword.length < 8 ) {
        $('#length').removeClass('valid').addClass('invalid');
    } else {
        $('#length').removeClass('invalid').addClass('valid');
    }
    //validar letra
    if ( campoPassword.match(/[A-z]/) ) {
        $('#letter').removeClass('invalid').addClass('valid');
    } else {
        $('#letter').removeClass('valid').addClass('invalid');
    }
    
    //validar letra mayúscula
    if ( campoPassword.match(/[A-Z]/) ) {
        $('#capital').removeClass('invalid').addClass('valid');
    } else {
        $('#capital').removeClass('valid').addClass('invalid');
    }
    
    //validar numero
    if ( campoPassword.match(/\d/) ) {
        $('#number').removeClass('invalid').addClass('valid');
    } else {
        $('#number').removeClass('valid').addClass('invalid');
    }
    
    //validar confirmación contraseña
    if (p1.length == 0 || p2.length == 0) {
      $('#null').removeClass('valid').addClass('invalid');
    } else {
      $('#null').removeClass('invalid').addClass('valid');
    }
    
    //validar contraseñas cohincidan
    if (p1 != p2) {
      $('#match').removeClass('valid').addClass('invalid');
    } else {
      $('#match').removeClass('invalid').addClass('valid');
    }
    
    if(noValido.test(p1 || p2)){ 
        
        // se chequea el regex de que el string no tenga espacio
      $('#blank').removeClass('valid').addClass('invalid');
    } else {
      $('#blank').removeClass('invalid').addClass('valid');
    }
    
    }).focus(function() {
        $('#pswd_info').show();
    }).blur(function() {
        $('#pswd_info').hide();
    });


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
});

