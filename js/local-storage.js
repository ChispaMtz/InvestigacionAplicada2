let container = document.getElementById("cont");
let welcome = document.getElementById("titulo");
let username = document.getElementById("nombre-usuario");
let password = document.getElementById("password");

let mensaje = document.getElementById("cuenta-creada")
let account = document.getElementById("crear");
let borrar = document.getElementById("delete");

account.addEventListener("click", crearCuenta);
borrar.addEventListener("click", borrarCuenta);
borrar.style.display = "none";

    if (localStorage.getItem("username") && localStorage.getItem("password")) {
        bienvenida();
    } else {
        
    }

function crearCuenta () {
    if (username.value.trim().length == 0 || password.value.trim().length == 0) {
        alert("Los datos no pueden quedar vacios")
    } else {
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
    
        bienvenida();
    }
}

function bienvenida () {
    welcome.innerHTML = "Bienvenid@ " + localStorage.getItem("username");
    container.style.display = "none";
    mensaje.innerHTML = "Cuenta Creada";
    borrar.style.display = "grid";
}

function borrarCuenta () {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    username.value = "";
    password.value = "";
    welcome.innerHTML = "Crea Tu Cuenta";
    container.style.display = "grid";
    mensaje.innerHTML = "";
    borrar.style.display = "none";
}

