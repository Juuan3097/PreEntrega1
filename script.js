console.log('Bienvenido a Calificaciones');

let resultado = 0;
let calificar ="";


function calcular_promedio() {
    let nota1 = parseInt(prompt("Escriba la calificación del primer cuatrimestre"));
    let nota2 = parseInt(prompt("Escriba la calificación del segundo cuatrimestre"));
    resultado = parseInt ((nota1 + nota2) / 2);
}


while ( calificar != "FIN"){
    
    calificar = prompt('Escriba "FIN" para salir');
    let nombre_alumno = prompt("Escriba el nombre y apellido del alumno o alumna a calificar");

    calcular_promedio();

        if (resultado >= 7) {
            console.log("El alumno/a "+ nombre_alumno + " está aprobado");
        }
        else if (resultado >= 4) {
            console.log("El alumno/a "+nombre_alumno+" va a recuperatorio");
        }
        else if (resultado >= 1) {
            console.log("El alumno/a "+nombre_alumno+" está desaprobado");
        }
        else {
            console.log("Debe introducir valores positivos entre 1 y 10");
        }

}

