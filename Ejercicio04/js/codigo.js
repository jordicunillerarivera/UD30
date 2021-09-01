// Guardamos multiples elementos en un array y segun el tipo se le asigna una operacion u otra
var array = [true, 5, false, "hola", "adios", 2];

if (array[3].length > array[4].length) {
    console.log("La palabra en la posicion 3 es mas grande que la palabra en la posicion 4");
} else {
    console.log("La palabra en la posicion 4 es mas grande que la palabra en la posicion 3");
}

if (array[0]) {
    console.log("La posicion 0 es true");
} else {
    console.log("La posicion 0 es false")
}

if (array[2]) {
    console.log("La posicion 2 es true");
} else {
    console.log("La posicion 2 es false")
}

console.log(array[1] + array[5]);
console.log(array[1] - array[5]);
console.log(array[1] * array[5]);
console.log(array[1] / array[5]);
console.log(array[1] % array[5]);
