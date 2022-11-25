var portafolio = {
    Nombre: "",
    Apellido: "",
    Acercade: "",
    Titulos: ["", ""]
};
function GetNombre(nombre) {
    var nombre1 = document.getElementById("Nombre");
    nombre1.textContent = nombre;
}
function GetApellido(apellido) {
    var a = document.getElementById("Apellido");
    a.textContent = apellido;
    return portafolio.Apellido = apellido;
}
function GetAcercade(acercade) {
    var a = document.getElementById("text-acercade");
    a.textContent = acercade;
    return portafolio.Acercade = acercade;
}
function GetTitulo(titulo1, titulo2) {
    var a = document.getElementById("Titulos");
    a.textContent = titulo1, titulo2;
    return portafolio.Titulos[0] = titulo1, portafolio.Titulos[1] = titulo2;
}
function reader() { }
new FileReader();
reader.readAsText(File);
reader.onload = function (progressEvent) {
    var s = reader.result.toString();
    console.log(s);
    var arr = s.split('/n');
    GetAcercade(arr[0]);
    GetNombre(arr[1]);
    GetApellido(arr[2]);
    GetTitulo(arr[3], arr[4]);
};
