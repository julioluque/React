// 23 .filter .find .reduce y metodos para arreglos
const personas = [
   {nombre: 'Cecilia', edad: 28, aprendiendo: 'HTML', estadoActivo: true, empresa: 'TSoft'},
   {nombre: 'Julio', edad: 34, aprendiendo: 'React', estadoActivo: true, empresa: 'Tecnosoftware'},
   {nombre: 'Martin', edad: 38, aprendiendo: 'JavaScript', estadoActivo: true, empresa: 'Accenture'},
   {nombre: 'Delfina', edad: 0, aprendiendo: 'sentarse', estadoActivo: false, empresa: 'Home'},
   {nombre: 'Monica', edad: 33, aprendiendo: 'enfermeria', estadoActivo: true, empresa: 'Tecnosoftware'},
   {nombre: 'Julian', edad: 35, aprendiendo: 'Spring Cloud', estadoActivo: true, empresa: 'Tecnosoftware'},
   {nombre: 'Gaston', edad: 24, aprendiendo: 'Spring Boot', estadoActivo: true, empresa: 'Accenture'}
];
console.log(personas);
// .filter -> ejemplo, filtramos edades sean mayores o menores
personas.filter(persona => {
   console.log(persona.nombre); 
});

const mayores = personas.filter(persona =>{
   return persona.edad > 18;
});

const menores = personas.filter(persona => {
   return persona.edad < 18;
});

console.log(mayores);
console.log(menores);

// .find -> para buscar dentro de la funcion algo especifico
const BuscarDelfina = personas.find (persona => {
   return persona.nombre === 'Delfina';
})
console.log(BuscarDelfina)
console.log(`Mi hija esta aprendiendo a ${BuscarDelfina.aprendiendo}`);

buscarporNombre = 'Cecilia'
const buscarPersona = personas.find (persona => {
   return persona.nombre === buscarporNombre;
})
console.log(`${buscarPersona.nombre} tiene ${buscarPersona.edad}, trabaja en ${buscarPersona.empresa} y esta aprendiendo ${buscarPersona.aprendiendo}.`)


// .reduce -> sumamos las edades, y podemos hacer calculos
const edadTotal = personas.reduce((calcularTotales, persona)=> {
   return calcularTotales + persona.edad;
}, 0);
console.log(edadTotal);
console.log(edadTotal / personas.length); // dividimos por el tamaño del array (en este caso 7)
