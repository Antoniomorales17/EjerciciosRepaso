/*Un DJ no sabe qué género musical poner en la fiesta.

Pregúntale al usuario qué género quiere pop, rock o rap y según lo que prefiera, devuelve un mensaje

diferente. */

let genero = prompt("Que genero de musica prefieres (pop, rock, jazz)");

switch(genero){
    case "rock":
        alert("Esta sonando Metalica")
        break;

    case "pop" :
        alert ("Esta sonando Melendi")
        break;

    case "jazz" :
        alert ("Esta sonando Bob")
        break;

        default:
            alert("No hay musica de la que quieres")
}