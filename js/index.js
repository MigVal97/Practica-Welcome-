const txtNombre = document.getElementById("txtNombre");
const btnGuardar = document.getElementById("btnGuardar");
const alertValidaciones = document.getElementById("alertValidaciones");
btnGuardar.addEventListener("click", function(event){
    event.preventDefault();
        alertValidaciones.innerHTML="";
        alertValidaciones.style.display ="none";
    if (txtNombre.value.length<3){
        alertValidaciones.innerHTML="Nombre incorrecto";
        alertValidaciones.style.display="block";
        return false;
    }
    localStorage.setItem("nombre", txtNombre.value);
});