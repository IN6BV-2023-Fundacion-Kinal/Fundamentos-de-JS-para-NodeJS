// Async - Await

//Al agregarle async a una función devuelve una promesa

//Definición
let getNombre = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('Victor Cancinos');
        }, 3000);
    });
}
//Definición
let saludar = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}


//Ejecución
saludar().then( msg => {
    console.log(msg);
});