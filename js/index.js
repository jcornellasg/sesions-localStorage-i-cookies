var text = "";
const fecha = new Date();

//document.cookie = 'nombrecookie=valorcookie, max-age=7200, path=/';

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
    const fecha = new Date();
    //document.cookie = "text=" + text +"; expires=" + fecha.toGMTString(); + "; path=/;";
    //console.log("fecha: " + fecha);
    alert(fecha.toGMTString() + text);
}

function mostrar() {
    console.log(document.cookie);
}
function modificar() {
    document.cookie = "text=" + text;
}
function eliminiar() {
    //document.cookie = "text=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
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


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}

Hola