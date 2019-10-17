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