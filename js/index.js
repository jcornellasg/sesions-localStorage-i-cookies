var text = "";
const fecha = new Date();

document.cookie = 'nombrecookie=valorcookie, max-age=7200, path=/';

document.getElementById("text").addEventListener("focusout", function () {
    text = document.getElementById("text").value;
    //console.log(text);
});

document.getElementById("crear").addEventListener("click", crear);
document.getElementById("mostrar").addEventListener("click", mostrar);
document.getElementById("modificar").addEventListener("click", modificar);
document.getElementById("eliminar").addEventListener("click", eliminiar);

function crear() {
     
    //document.cookie = "usuario=marko; expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/";
    //const fecha = new Date();
    //document.cookie = "text=" + text +"; expires=" + fecha.toGMTString(); + "; path=/;";
    //console.log("fecha: " + fecha);
    document.cookie = "nombrecookie=valorcookie; max-age=7200; path=/";
    alert(document.cookie);
}

function mostrar() {
    console.log(document.cookie);
}
function modificar() {
    document.cookie = "text=" + text;
}
function eliminiar() {
    document.cookie = "text=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

/*
function crear() {
    sessionStorage.setItem("text", text);
}

function mostrar() {
    console.log(sessionStorage.getItem("text"));
}
function modificar() {
    sessionStorage.setItem("text", text);
}
function eliminiar() {
    sessionStorage.removeItem("text");
}*/
