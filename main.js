fetch('http://127.0.0.1:5500/pasajeros.JSON')
.then((response) => response.json())
.then((pasajeros) => {
const nombreDePasajeros = pasajeros.map[(pasajeros) => pasajeros.nombre];
console.log(nombreDePasajeros);
});
