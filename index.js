const saludar = (nombre) => 'Hola ' + nombre
console.log(saludar('Lean'));

const multiplicar = (a, b) => a * b;
console.log(multiplicar(2,2));

const crearAlumno = (nombre, apellido, edad, materias) => ({
    nombre,
    apellido,
    edad,
    materias
});
console.log(crearAlumno('Leandro', 'Fernández', '25', ['TLPA','Base de Datos','Inglés']));

const devolverFecha = (...arguments) => 'Hoy es '+arguments[0]+ '-' +arguments[1]+ '-' +arguments[2];
console.log(devolverFecha('10','09','2020'));