// escribiendo clases.

class Tarea {
   constructor (nombre, prioridad){
       this.nombre = nombre;
       this.prioridad = prioridad;
   }
   mostrar (){
       return `${this.nombre} tiene una prioridad ${this.prioridad}`;
   }
}

let tarea1 = new Tarea('Armar CV', 'Alta');
let tarea2 = new Tarea('Preparar cafe', 'Alta');
let tarea3 = new Tarea('Pasear al perro', 'media');
let tarea4 = new Tarea('Conocer a mis suegros', 'baja');

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());
console.log(tarea4.mostrar());
