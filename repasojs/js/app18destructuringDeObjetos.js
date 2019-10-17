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