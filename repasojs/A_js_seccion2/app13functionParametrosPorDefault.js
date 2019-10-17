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