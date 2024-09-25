/*El ejercicio dice lo siguiente Tengo un canguro que salta tres metros cada vez.

Haz un programa que me diga cuántos saltos ha dado el canguro y cuál es la distancia total recorrida

tras 17 saltos.*/

let distanciaSalto = 3;
let saltos = 17;

let distanciaRecorrida = 0;

for(let contador =1; contador <= saltos; contador++){

    distanciaRecorrida += distanciaSalto;

    console.log("La distancia del canguro ha saltado " + contador + " saltos " + "y ha recorrido por ahora" + distanciaRecorrida + "metros")

}