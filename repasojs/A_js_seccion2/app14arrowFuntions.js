// 14 Arrow functions

let viajando = function (destino){
   return `Viajando a la ciudad de ${destino}`
}
let viaje;
viaje = viajando('Misiones')
console.log(viaje)


let visitando = (lugar) => {
   return `En vacaciones estuve visitando ${lugar}`
}
let visitar;
visitar = visitando('las cataratas del Iguazu');
console.log(visitar)


let saludando = (introduccion, nombre) => {
   return `${introduccion}, saludamos a ${nombre}`;
}
let saludo;
saludo = saludando('En esta mañana', 'Julio')
console.log(saludo)


let reunion = dia => `Quedan invitados a la reunion el dia ${dia}`;
let fecha;
fecha = reunion('sabado')
console.log(fecha)