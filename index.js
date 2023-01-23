//Callbacks

//No es más que una función dentro de otra
//Responde a el tiempo en que se ejecuta

// setTimeout( function() {
//     console.log('Hola Mundo');
// }, 5000);

// console.log('que tal buenas tardes');

// setTimeout( () => {
//     console.log('Kinal informatica')
// }, 2000);

const getUserById = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Oscar'
    }

    if (id === 5) {
        callback(`El usuario con id: ${id}, no existe en la DB`);
    } else {
        callback(null, usuario);
    }
    //Ternarios es lo mismo que el if else
    // id === 20
    //     ? callback(`El usuario con id: ${id}, no existe en la DB`) 
    //     : callback(null, usuario);
}

getUserById(8, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario en la base de datos', usuario);
});