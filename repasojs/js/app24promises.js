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