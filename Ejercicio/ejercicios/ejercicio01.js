/*Nuestros usuarios tienen perros y quieren saber qué edad de perro tienen sus mascotas.

Vale, un año de humano equivale a siete de perro.

Pregunta a los usuarios qué edad tiene su perro y dile la edad canina al usuario.*/

let  edadOriginal = prompt("Cuantos años tiene el perro (en tiempo humano)")

let edadPerro = edadOriginal * 7;

alert("Tu perro realmente tiene" + edadPerro);