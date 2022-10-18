//1 aulas en total, 35 personas por aula

//Rango promedio de estudiantes que ingresan 250-400
//Cantidad de asignaturas = 5
//Cantidad de personas por aula = 35
//Cantidad de estudiantes por dia = 175 

const estudiantesTotales = 175;
let estudiantes = 0;
let year = 1;
let cantidadAprobados = 0;
let cantidadRepetidos = 0;
let cantidadAbandonos = 0;
let cantidadAprobadosTotal = 0;
let cantidadRepetidosTotal = 0;
let cantidadAbandonosTotal = 0;
let cantidadEstudiantesTotal = 0;

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Funcion para calcular la cantidad de estudiantes que ingresan en el año
function ingresoEstudiantes(cantidadtotal) {
  estudiantes = random(0, cantidadtotal);
  cantidadEstudiantesTotal = cantidadEstudiantesTotal + estudiantes;
  return estudiantes, cantidadEstudiantesTotal;
}

//Funcion para calcular la cantidad de estudiantes que pasan el año
function aprobados() {
  cantidadAprobados = estudiantes * random(0.3, 0.5);
  estudiantes = estudiantes - cantidadAprobados;
  cantidadAprobadosTotal = cantidadAprobadosTotal + cantidadAprobados;
  return cantidadAprobados, estudiantes;
}


//Funcion para calcular la cantidad de estudiantes que repiten el año
function repetidos() {
  cantidadRepetidos = estudiantes * random(0.1, 0.3);
  estudiantes = estudiantes - cantidadRepetidos;
cantidadRepetidosTotal = cantidadRepetidosTotal + cantidadRepetidos;
  return cantidadRepetidos, estudiantes;
}


//Funcion para calcular la cantidad de estudiantes que abandonan el año
function abandonos() {
  cantidadAbandonos = estudiantes * random(0.1, 0.2);
  estudiantes = estudiantes - cantidadAbandonos;
  cantidadAbandonosTotal = cantidadAbandonosTotal + cantidadAbandonos;
  return cantidadAbandonos, estudiantes;
}

function actualizarAño() {
  year++;
  return year;
}

function simularExamenes() {
    aprobados();
    repetidos();
    abandonos();
    console.log(`En el año ${year} ingresaron ${estudiantes.toFixed(2)} estudiantes, de los cuales ${cantidadAprobados.toFixed(2)} aprobaron, ${cantidadRepetidos.toFixed(2)} repitieron y ${cantidadAbandonos.toFixed(2)} abandonaron`);
}

function simularAño() {
    let cantidadMaxima = 175 - cantidadRepetidos;
    ingresoEstudiantes(cantidadMaxima);
    simularExamenes();
    actualizarAño();
}

function calcularCantidadEstudiantesporAño() {
    let cantidadEstudiantesporAño = cantidadEstudiantesTotal / 5;
    console.log(`La cantidad de estudiantes que ingresaron por año fue: ${cantidadEstudiantesporAño.toFixed(2)}`);
}

function simularCarrera() {
    for (let i = 0; i < 5; i++) {
        simularAño();
    }
    console.log(`En total la cantidad de estudiantes que aprobaron fue: ${cantidadAprobadosTotal.toFixed(2)}, los repetidos: ${cantidadRepetidosTotal.toFixed(2)} y los que abandonaron: ${cantidadAbandonosTotal.toFixed(2)} `);
    console.log(`La cantidad de estudiantes que ingresaron a la carrera fue: ${cantidadEstudiantesTotal.toFixed(2)}`);
    calcularCantidadEstudiantesporAño();
}

simularCarrera();