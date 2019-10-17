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