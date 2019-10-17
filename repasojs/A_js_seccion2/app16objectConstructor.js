// 16 Objetos en JavaScript - Object Constructor
function mostrarInfomacionDeTareas (nombre, prioridad){
   return `La tarea ${nombre}, tiene una prioridad ${prioridad}`
}

//Object literal
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
const tarea1 = new Tarea('Aprender JavaScript y React', 'alta')
const tarea2 = new Tarea('Pasear al perro', 'media');
console.log(tarea1)
const mostrarInfo = mostrarInfomacionDeTareas(tarea2.nombre, tarea2.urgencia)
console.log(mostrarInfo)