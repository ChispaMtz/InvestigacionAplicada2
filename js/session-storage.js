let nombre = document.getElementById("nombre-completo");
let correo = document.getElementById("correo");
let gustos = document.getElementById("gustos");

let guardar = document.getElementById("submit");
let mostrar = document.getElementById("load");

mostrar.disabled = true;

guardar.addEventListener("click", guardarDatos);
mostrar.addEventListener("click", mostrarDatos);



function guardarDatos () {
    sessionStorage.setItem("Nombre", nombre.value);
    sessionStorage.setItem("Correo", correo.value);
    sessionStorage.setItem("Gustos", gustos.value);

    nombre.value = "Nombre Guardado!";
    correo.value = "Correo Guardado!";
    gustos.value = "Gustos Guardados!";

    nombre.disabled = true;
    correo.disabled = true;
    gustos.disabled = true;

    guardar.disabled = true;
    mostrar.disabled = false;
}

function mostrarDatos() {
    nombre.value = sessionStorage.getItem("Nombre");
    correo.value = sessionStorage.getItem("Correo");
    gustos.value = sessionStorage.getItem("Gustos");

    guardar.disabled = false;
    mostrar.disabled = true;
}
