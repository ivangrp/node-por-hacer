const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    compleado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    }
};


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado compleado de una tarea', {
        description,
        compleado
    })
    .command('borrar', 'Borra un elemento', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}