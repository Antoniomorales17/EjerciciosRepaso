/*Muestra todos los números divisores de un número.*/

let numero = parseInt(prompt("Mete tu numero y te digo los divisores", 1));

for(let contador = 1; contador <= numero; contador++) {

    if(numero%contador == 0){
        console.log(`El ${contador } es divisor de ${numero}`)
    }
}