/*
El enunciado dice Haz un programa que pida dos números y nos diga cuál es mayor, cuál es menor y si

son iguales.

Si los números no son un número o son menores o iguales a cero, que nos los vuelva a pedir.*/

let numero1 = parseInt(prompt("Meter el primer numero", 0));
let numero2 = parseInt(prompt("Meter el segundo numero", 0));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
  numero1 = parseInt(prompt("Meter el primer numero", 0));
  numero2 = parseInt(prompt("Meter el segundo numero", 0));
}

if(numero1 == numero2){
    alert("Los numeros son exactamente iguales")
} else if(numero1 > numero2){
    alert("El numero mayor es el:" + numero1);
    alert("El numero mayor es el" + numero2);

} else if(numero1 < numero2){
    alert("El numero mayor es el:" + numero2);
    alert("El numero mayor es el" + numero1);

} else{
    alert("No has metido bien los numeros")
}
