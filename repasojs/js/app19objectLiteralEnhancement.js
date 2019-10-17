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