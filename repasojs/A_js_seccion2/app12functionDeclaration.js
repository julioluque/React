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