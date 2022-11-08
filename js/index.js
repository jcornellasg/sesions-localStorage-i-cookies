var text = "";

document.getElementById("text").addEventListener("focusout", function () {
    text = document.getElementById("text").value;
    console.log(text);
});

document.getElementById("crear").addEventListener("click", crear);
document.getElementById("mostrar").addEventListener("click", mostrar);
document.getElementById("modificar").addEventListener("click", modificar);
document.getElementById("eliminar").addEventListener("click", eliminiar);

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
}