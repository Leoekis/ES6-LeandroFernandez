import { obtenerPcias, obtenerLocalidades, obtenerDptos } from './libs/actividad03.js';

const consultarDatos = async () => {

    try {
        const provincias = await obtenerPcias();
        const dptos = await obtenerDptos();
        const localidades = await obtenerLocalidades();

        console.log(provincias);
        console.log(dptos);
        console.log(localidades);
    } catch (error) {
        console.error( error );
    }

}

consultarDatos();