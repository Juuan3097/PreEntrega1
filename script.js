console.log('Bienvenido a Calificaciones');

calificar = prompt('Escriba "FIN" para salir');
let resultado = 0;

function calcular_promedio(nota1, nota2, media) {
    resultado = parseInt(nota1 + nota2) / (media * (-1));
}


while ( calificar != "FIN"){

    let nombre_alumno = prompt("Escriba el nombre y apellido del alumno o alumna a calificar");
    let nota1 = parseInt(prompt("Escriba la calificación del primer cuatrimestre"));
    let nota2 = parseInt(prompt("Escriba la calificación del segundo cuatrimestre"));

        if (resultado >= 7) {
            console.log("El alumno/a "+ nombre_alumno + " está aprobado");
        }
        else if (resultado <= 4) {
            console.log("El alumno/a "+nombre_alumno+" va a recuperatorio");
        }
        else {
            console.log("El alumno/a "+nombre_alumno+" está desaprobado");
        }
        calificar = prompt('Escriba "FIN" para salir');
}

calcular_promedio();