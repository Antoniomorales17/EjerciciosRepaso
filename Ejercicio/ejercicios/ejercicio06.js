/*Mostrar todos los números impares que hay entre dos números que nos dé el usuario.*/

let numero1 = parseInt(prompt("Dime el primer numero", 0));
let numero2 = parseInt(prompt("Dime el segundo numero", 0));

while(numero1 < numero2){
    numero1++;

    if(numero1 % 2 !=0){
        console.log(`El ${numero1} es impar`);

    }
        
}