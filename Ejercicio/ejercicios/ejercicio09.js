/*En base al número que nos dé el usuario,

decirle si es par o impar.*/


let numero = parseInt(prompt("Mete un número para ver si es par o impar (o un número negativo para salir)", 0));

// Continuamos pidiendo números mientras el número sea mayor o igual a 0
while (numero >= 0) {
    if (numero % 2 === 0) {
        alert("El número " + numero + " es par");
    } else {
        alert("El número " + numero + " es impar");
    }

    // Pedimos otro número al usuario
    numero = parseInt(prompt("Mete otro número (o un número negativo para salir)", 0));
}

alert("Has salido del programa.");
