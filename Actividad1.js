let nombre;
let edad;

nombre= "Ana";
edad= "22";

console.log(`Hola soy ${nombre} y tengo ${edad} años.`)

const numeros = [3, 7, 12, 5, 2];

const cuadrados = numeros.map((numero) => numero * numero);

console.log(cuadrados);

const mayoresde5 = numeros.filter((numero) => numero > 5);
console.log(mayoresde5);


const esParImpar = (numero) => {
    return numero % 2 === 0 ? "par" : "impar";
};

console.log(`El número 4 es ${esParImpar(4)}`); // El número 4 es par
console.log(`El número 7 es ${esParImpar(7)}`); // El número 7 es impar
