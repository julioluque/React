//Como heredar calses y metodos de una clas
//la ventaja es que se puede crear una clase padre y heredar la misma realizando solo breves ajustes

// escribiendo clases.

class Tarea {
   constructor (nombre, prioridad){
       this.nombre = nombre;
       this.prioridad = prioridad;
   }
   mostrar (){
       console.log (`${this.nombre} tiene una prioridad ${this.prioridad}`);
   }
}

class ComprasPendientes extends Tarea {
   constructor (nombre, prioridad, cantidad) {
       super (nombre, prioridad)
       this.cantidad = cantidad;
   }

   mostrar () {
       super.mostrar();
       console.log (`, y la cantidad de ${this.cantidad}`);
   }

   facturarA() {
       return 'Consumidor final';
   }
}

let tarea1 = new Tarea('Armar CV', 'Alta');
let tarea2 = new Tarea('Preparar cafe', 'Alta');
let tarea3 = new Tarea('Pasear al perro', 'media');
let tarea4 = new Tarea('Conocer a mis suegros', 'baja');

// console.log(tarea1.mostrar());
// console.log(tarea2.mostrar());
// console.log(tarea3.mostrar());
// console.log(tarea4.mostrar());

let compra1 = new ComprasPendientes('Azucar', 'baja', 3)
compra1.mostrar();
compra1.facturarA();