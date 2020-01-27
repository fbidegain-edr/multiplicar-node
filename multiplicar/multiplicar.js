const fs = require('fs');
const colors = require('colors');
//const argv = require('yargs');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject(`El valor "${base}" no es un número`);
            return;
        }
        let data = '';
        let nameTable = `tablas/tabla-del-1-al-${limite}-en-base-${base}.txt`

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${i * base}\n`)
        }

        fs.writeFile(nameTable, data, (err) => {
            if (err) reject(err)
            else resolve
            console.log(`El archivo ${colors.red(nameTable)+colors.green(" ha sido creado")}`);
        });


    })


}


let listarTabla = (base, limite) => {

    for (i = 1; i <= limite; i++) {
        console.log((`${base} * ${i} = ${base * i}`))
    }

}





module.exports = {
    crearArchivo,
    listarTabla
}