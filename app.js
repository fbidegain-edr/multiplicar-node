//requires
const fs = require('fs');
const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv; //.argv al final para extrar solo ese objeto del archivo
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(resolve))
            .catch(error => console.log(error))
        break;

    default:
        console.log('Comando no reconocido');
}




//const fs = require('express');
//const fs = require('./fs');


//let base = 'e';
//let argv2 = process.argv;
//let parametro = argv[2];
// let base = parametro.split('=')[1]; //siplit divide un string en un arreglo.. en este caso separado por el signo '='




//console.log(argv);
//console.log(argv2);