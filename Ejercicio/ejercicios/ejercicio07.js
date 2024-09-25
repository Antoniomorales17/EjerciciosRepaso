/*Tenemos una colección de números del uno al 17 y el usuario tiene que adivinar cuál es el elegido.

Hace un programa para que pueda adivinar el número.*/

const numeroAdivinar = 7;

let intentos = 0;

while (intentos != numeroAdivinar){

    intentos = parseInt(prompt("Adivina el numero del 1 al 17"))

    if (numeroAdivinar == intentos){
        alert("Enhorabuena has acertado, el numero era " + numeroAdivinar);
    } else {
        alert ("Lo siento, sigue probando")
    }
}