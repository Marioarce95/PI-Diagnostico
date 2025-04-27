// Función que aplica un callback a cada elemento de un array
function procesarArray(array, callback) {
    // Crear un nuevo array con el callback aplicado a cada elemento
    return array.map(callback);
}

// Ejemplo de uso:
const numeros = [1, 2, 3];
const duplicar = x => x * 2;
console.log(procesarArray(numeros, duplicar)); // [2, 4, 6]
