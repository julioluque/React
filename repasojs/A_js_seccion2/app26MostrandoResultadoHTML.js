const descargarUsuarios = cantidad => new Promise((resolve, reject) => {

    // pasar cantidad a la api
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

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
    miembros => imprimirHTML(miembros),
    error => console.error (
        new Error (`Hubo un error!...  ${error}`)
    )
);

function imprimirHTML(usuarios){
    let enviarHTML = '';
    usuarios.forEach(usuario => {
        console.log(usuario)
        enviarHTML += `
                    <li>
                        <img src="${usuario.picture.thumbnail}">  
                        Nombre: ${usuario.name.first} ${usuario.name.last}
                        Residencia: ${usuario.location.country}
                        Origen: ${usuario.nat}
                    </li>
        `;
    });
    const idApp = document.querySelector('#app');
    idApp.innerHTML = enviarHTML;   
}

