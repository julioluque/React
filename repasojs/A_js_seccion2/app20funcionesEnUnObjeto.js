// 20 Funciones en un objeto
const persona = {
   nombre : 'Julio',
   trabajo: 'Desarrollador Java',
   edad: 34,
   musicaRock: true,
   mostrarInformacion: function() {
      console.log(`${this.nombre} es ${this.trabajo} y tiene ${this.edad}`)
   }
}
persona.mostrarInformacion();

// quitando la palabra function tenemos el miso resultado.
// this. es una forma de no mezclar objetos, igual que se hizo con prototypes
const boletoDeViaje = {
   destino: 'Brasil',
   origen: 'Buenos Aires',
   cantidad: 2,
   dia: 'sabado',
   infoDeBoleto () {
      console.log(`El viaje a ${this.destino} para ${this.cantidad} personas, esta reservado para el dia ${this.dia}. Lugar de salida: ${this.origen}`)
   }
}
boletoDeViaje.infoDeBoleto();