// 17 Prototypess
// Object literal
const persona = {
   nombre: 'Julio',
   profesion: 'desarrollo fullstack',
   edad: 34
}
console.log(persona)

// Object constructor
function Tarea(nombre, urgencia){
   this.nombre = nombre;
   this.urgencia = urgencia;
}

// MISMA FUNCION PERO AGREGANDO PROTOYPE A TAREA
Tarea.prototype.mostrarInfomacionDeTareas = function () {
   return `INFO*** La tarea ${this.nombre}, tiene una prioridad ${this.urgencia}`;
}

const tarea1 = new Tarea('Aprender JavaScript y React', 'alta')
const tarea2 = new Tarea('Pasear al perro', 'media');
console.log(tarea1)
console.log(tarea1.mostrarInfomacionDeTareas());
console.log(tarea2)
console.log(tarea2.mostrarInfomacionDeTareas());

// const mostrarInfo = mostrarInfomacionDeTareas(tarea2.nombre, tarea2.urgencia)
// console.log(mostrarInfo)