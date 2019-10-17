// variables con var. se pueden reasignar, el valor cambia
var aprendiendo = 'javaScript'
aprendiendo = true

// variables con const. funcionan con el id en el html o jsp.
const aprendiendo = 'javaScript'
aprendiendo = true

// varialbes con let. se limita a unbloque de codigo
let aprendiendo = 'JavaScript'
aprendiendo = true

console.log(aprendiendo)

// ________________________________________________________________________________
// 10 Scope con var

var musica = 'Rock';

if (musica){
   musica = 'Grunge';
   console.log('Dentro del if: ' + musica)
}

console.log('Fuera del if: ' + musica)

// Scope con let
var musica = 'Rock';

if (musica){
   let musica = 'Grunge';
   console.log('Dentro del if: ' + musica)
}

console.log('Fuera del if: ' + musica)
// ________________________________________________________________________________
// 11 Template String en JavaScript
const nombre = 'Julio'
const trabajo = 'Desarrollo web'

// console.log(`Empleado: ${nombre}, Ocupacion: ${trabajo}`)

// concatenar con multiples lineas

const idApp = document.querySelector('#app')
let html1 = '<ul>' + 
               '<li>Nombre1: ' + nombre + '</li>' + 
               '<li>trabajo1: ' + trabajo + '</li>' + 
            '<ul>';
 
let html1 = `<ul>
               <li>Nombre2: ${nombre}</li>
               <li>Trabajo2: ${trabajo}</li>
            </ul>`;

idApp.innerHTML = html1


imprimirEnConsola(html1)

function imprimirEnConsola(imprimir){
console.log(`Con Template: ${imprimir}`)
console.log('Sin Templates: ' + imprimir)
}
// ________________________________________________________________________________
// 12 function declaration
saludar(`Juan`)
function saludar(nombre) {
   console.log(`Bienvenido: ${nombre}`)
}
saludar(`Luis`)

// function expresion
const despedir = function(nombre){
   console.log(`Adios: ${nombre}`)
}
despedir(`martin`)
despedir(`pedro`)
// ________________________________________________________________________________
// 13 Funcion con parametros por default

function ficha (nombre = 'Martin', actividad = 'Enseñar Java'){
   console.log(`1 La persona: ${nombre}, se ecarga de ${actividad}`)
}

ficha(`Walter White`, `Enseñar quimica`);
ficha(`Jesie Pinkman`, `Fabricar Meta`);
ficha('Julian');


const fichaNueva = function (nombre = 'Martin', actividad = 'Enseñar Java'){
   console.log(`2 La persona: ${nombre}, se ecarga de ${actividad}`)
}

fichaNueva(`Walter White`, `Enseñar quimica`);
fichaNueva(`Jesie Pinkman`, `Fabricar Meta`);
fichaNueva('Julian');
// ________________________________________________________________________________
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
// ________________________________________________________________________________
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
// ________________________________________________________________________________
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
// ________________________________________________________________________________
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

// ________________________________________________________________________________
// 18 Destructuring de objetos - es la forma de extraer valores de un objeto
const aprendiendoJs = {
   version: {
      nueva: 'ES6+',
      anterior: 'ES5'
   },
   frameworks: ['React', 'VueJs', 'AngularJs']  
}
console.log(aprendiendoJs)

//Destructuring forma anterior
let seleccionarVersion = aprendiendoJs.version.nueva
let seleccionarFramework = aprendiendoJs.frameworks[1]

console.log(seleccionarVersion)
console.log(seleccionarFramework)

// Destructuring forma nueva
let {version, frameworks} = aprendiendoJs;
console.log(version)
console.log(frameworks)


// Destructuring forma nueva, una variable
let {anterior} = aprendiendoJs.version;
console.log(anterior)


// ________________________________________________________________________________
// 19 Object Literal Enhancement


const banda = 'Intoxicados';
const genero = 'Rock';
const canciones = ['Es una perra', 'Homero', 'Eva, no te cases con Adan']

// Forma anterior
const Intoxicados = {
   banda : banda,
   genero : genero,
   canciones : canciones
}

console.log(Intoxicados)

// Forma nueva
const ViejasLocas = {banda, genero, canciones}
console.log(ViejasLocas)
// ________________________________________________________________________________
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
// ________________________________________________________________________________
// 21 Arreglos y maps Object.keys
// Arrays
const carritoDeComprasCoto = ['Cafe', 'Leche', 'Azucar', 'Pan', 'Galletas', 'Yerba', 'Mermelada'];
console.log(carritoDeComprasCoto);

const contenedorAppEnHtml = document.querySelector('#app');
let imprimirEnPantalla = '';
carritoDeComprasCoto.forEach(productos => {
   imprimirEnPantalla += `<li>${productos}</li>`;
});
contenedorAppEnHtml.innerHTML = imprimirEnPantalla;



// Maps - copiamos en la consola y podemos ver que agregamos texto dentro del array
carritoDeComprasEasy = ['Lamparas', 'Cables', 'Pisos', 'Revestimientos', 'Enchufes', 'Accesorios para baño', 'Aceite de motor'];
carritoDeComprasEasy.map(productos => {
   return `Producto sin devolucion: ${productos}`
});



// Object.Keys - sirve para tomar los nombres de los atributos llaves.
const carritoDeComprasGlobal = {
   productosCoto: 'Articulos comestibles de supermercado',
   productosEasy: 'Articulos de trabajo y ferreteria'
}
// usando ObjectKeys traemos el nombre del atributo
console.log(Object.keys(carritoDeComprasGlobal));

   // Usando Destructuring traemos el valor del atributo
   const {productosEasy} = carritoDeComprasGlobal;
   console.log(productosEasy);

//Otro ejemplo de ObjectKeys
const persona = {
   nombre: 'Julio',
   trabajo: 'Desarrollador Java',
   edad: 34
}
console.log(Object.keys(persona));

// ________________________________________________________________________________
// 22 Spread Operators ... 
// Une dos funciones distintas
// mantiene la estructura original cuando copias a una variable
let lenguajes = ['Java', 'PHP','Python'];
let frameworks = ['React', 'VueJs', 'AngularJs'];
let combinacion = [...lenguajes, ...frameworks];
console.log(combinacion);

let lenguajesBackEnd = ['Java', 'PHP']
let nuevoArreglo = [...lenguajesBackEnd];
console.log(nuevoArreglo);

let lenguajesFrontEnd = ['JavaScript', 'HTML', 'JSP', 'CSS']
let [ultimo] = [...lenguajesFrontEnd].reverse();
console.log(lenguajesFrontEnd)
console.log(ultimo)

// Ejemplos matematicos.
function suma (a,b,c){
   console.log(a+b+c);
}
const numeros = [2,3,5];
suma(...numeros)
// ________________________________________________________________________________
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
// ________________________________________________________________________________
// 24 Promises
// Para llamados asincronos a una API

const aplicarDescuento = new Promise((resolve, reject) =>{
   setTimeout (() =>{
      let descuento7 = true;

      if (descuento) {
         resolve('Descuento aplicado 100%');
      } else {
         reject('No aplica descuento');
      }
   }, 3000);
});

aplicarDescuento.then (resultado => {
   console.log(resultado);
}).catch ( error => {
   console.log(error);
});
// ________________________________________________________________________________
// 24 Promises con Ajax

const descargarCantidadDeUsuarios = cantidad => new Promise((resolve, reject) => {
   // Pasar la cantidad a la api
   const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;
   
   // Llamando a ajax
   const xhr = new XMLHttpRequest();

   // Abrir la conexion (metodo, api, asincrono)
   xhr.open('GET', api, true);

   // on load 
   xhr.onload = () => {
      if (xhr.status === 200) {
         resolve (JSON.parse(xhr.responseText).results);
      } else {
         reject (Error(xhr.statusText));
      }
   }

   // on error (opcional)
   xhr.onerror = (error) => reject(error) ;

   // send
   xhr.send();
});

descargarCantidadDeUsuarios(10).then (
   miembros => console.log(miembros),
   error => console.error(
      new Error (`Hubo un error ${error}`)
   )
);

// Haciendo un segundo llamado a la misma api, una nueva funcion
const cantidadUsuarios = numero => new Promise((resolve, reject) => {
   const api = `https://randomuser.me/api/?results=${numero}&nat=us`;
   const xhr = new XMLHttpRequest();
   xhr.open ('GET', api, true);

   xhr.onload = () => {
      if (xhr.status === 200){
         resolve (JSON.parse(xhr.responseText).results);
      } else {
         reject (Error(xhr.statusText));
      }
   }

   xhr.onerror = (error) => reject(error);
   xhr.send();
});

cantidadUsuarios(2).then (
   miembros => console.log(miembros),
   error => console.error( 
      new Error (`Hubo un error ${error}`)
   )
);

// Ejemplo llamando la cotizacion de hoy
const dolarHoy = new Promise((resolve, reject) => {
   const apiDolar = `http://ws.geeklab.com.ar/dolar/get-dolar-json.php`;
   const xhr = new XMLHttpRequest();
   xhr.open ('GET', apiDolar, true);

   xhr.onload = () => {
      if (xhr.status === 200){
         resolve (JSON.parse(xhr.responseText).results);
      } else {
         reject (Error(xhr.statusText));
      }
   }

   xhr.onerror = (error) => reject(error);
   xhr.send();
});

dolarHoy.then (
   miembros => console.log(miembros),
   error => console.error( 
      new Error (`Hubo un error ${error}`)
   )
);

// ________________________________________________________________________________

// ________________________________________________________________________________

// ________________________________________________________________________________

// ________________________________________________________________________________

// ________________________________________________________________________________

// ________________________________________________________________________________

// ________________________________________________________________________________

// ________________________________________________________________________________

// ________________________________________________________________________________

// ________________________________________________________________________________

// ________________________________________________________________________________

// ________________________________________________________________________________

// ________________________________________________________________________________

// ________________________________________________________________________________

// ________________________________________________________________________________

// ________________________________________________________________________________

// ________________________________________________________________________________

// ________________________________________________________________________________

// ________________________________________________________________________________

// ________________________________________________________________________________

// ________________________________________________________________________________

