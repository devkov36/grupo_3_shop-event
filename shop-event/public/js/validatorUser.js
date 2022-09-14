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

    let campoMail = document.querySelector("input.name");

    if (campoNombr.value ==" " ) {
        alert("El campo de nombre Tiene que esta completo!!")
    }
    else if ( campoNombre.value.length < 2) {
        alert("El campo de nombre Tiene que tener mas de dos caracteres!!")

    }



    })
})