// 15 Objetos en JavaScript - Object Literal
function Tarea(nombre, urgencia){
   this.nombre = nombre;
   this.urgencia = urgencia;
}

const tarea1 = new Tarea('Julio esta aprendiendo React','Alta')
console.log(tarea1)
console.log(tarea1.nombre)
console.log(tarea1.urgencia)

const t2 = new Tarea('Pasear al perro', 'media');
const t3 = new Tarea('Ir al supermercado','baja')
console.log(t2)
console.log(t3)