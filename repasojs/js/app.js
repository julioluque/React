const descargarUsuarios = cantidad => new Promise((resolve, reject) => {

    // pasar cantidad a la api
    const api = `https://randomuser.me/api/?results=${cantridad}&nat=us`;

    // llamado ajax
    const xhr = new XMLHttpRequest();

    // abrir la conexion
    xhr.open('GET', api, true);

    // on load
    xhr.onload = () => {
        if(xhr.status === 200) {
            resolve( JSON.parse(xhr.responseText).results);
        } else {
            console.log(xhr.statusText);
        }
    }

    // opcional (on error)
    xhr.onerror = (error) => reject(error);

    // send
    xhr.send();
});

descargarUsuarios(10).then (
    miembros => console.log(miembros),
    error => console.error (
        new Error (`Hubo un error!...  ${error}`)
    )
)
