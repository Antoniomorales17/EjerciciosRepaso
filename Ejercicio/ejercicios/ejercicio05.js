/*Muestra la suma y la media de los números introducidos hasta introducir un número negativo y ahí mostrar

el resultado.*/

let suma = 0;
let numero = 0;
let contador = 0;

do {
    numero = parseInt(prompt("Dime números hasta que metas uno negativo", 0));

    if (isNaN(numero)) {
        numero = 0;  // Si no es un número, lo tratamos como 0
    } else if (numero >= 0) {
        suma += numero;  // Sumamos el número si no es negativo
        contador++;  // Aumentamos el contador solo si es positivo
    }

} while (numero >= 0);  // El bucle continúa hasta que se introduzca un número negativo

alert("La suma de los números es: " + suma);

if (contador > 0) {  // Evitar división por cero si no se introdujo ningún número válido
    alert("La media de los números es: " + (suma / contador));
} else {
    alert("No has introducido números válidos.");
}
