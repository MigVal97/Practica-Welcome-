const alertMensaje = document.getElementById("alertMensaje");
const btnEliminar = document.getElementById("btnEliminar");
window.addEventListener("load", function(event){
    if (this.localStorage.getItem("nombre")!=null){
        alertMensaje.innerHTML= `Hola ${this.localStorage.getItem("nombre")}, bienvenido/a de nuevo`;
    }
    alertMensaje.style.display="block";
});

btnEliminar.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.removeItem("nombre");
});