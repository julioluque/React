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