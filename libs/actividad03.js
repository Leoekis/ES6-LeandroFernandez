const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));



// Función que retorna los datos de provincias

export const obtenerPcias = async () => {
    try {
        await retrasar(1800);
        const consulta = await fetch('../databases/provincias.json');
        const provs = await consulta.json();
        return provs
    } catch (error){
        throw Error ('Error al cargar provincias')
    }
}

// Función que retorna los datos de departamentos
export const obtenerDptos = async () => {
    try {
    await retrasar(1391);
    const consulta = await fetch('../databases/departamentos.json');
    const dptos = await consulta.json();
    return dptos 
    } catch (error){
        throw Error ('Error al cargar provincias')
    }

}

// Función que retorna los datos de localidades
export const obtenerLocalidades = async () => {
    try {
    await retrasar(900);
    const consulta = await fetch('../databases/localidades.json');
    const locs = await consulta.json();
    return locs
    } catch (error){
        throw Error ('Error al cargar Localidades')
    }

}




// // Funcion para obtener todos los datos
// function consultarDatos() {
//     const provincias = obtenerPcias();
//     // const dptos = obtenerDptos();
//     // const localidades = obtenerLocalidades();

//     console.log(provincias);
//     // console.log(dptos);
//     // console.log(localidades);
// }

// consultarDatos();