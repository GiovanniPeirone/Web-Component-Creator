const { exec } = require("child_process");

function ejecutarComandosSecuenciales(comandos, cwd = process.cwd()) {
    if (comandos.length === 0) {
        console.log("Todos los comandos se ejecutaron con éxito.");
        return;
    }

    const comando = comandos.shift(); // Toma el primer comando y lo elimina de la lista
    console.log(`Executing: ${comando}`);

    exec(comando, { cwd }, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing "${comando}":\n${error.message}`);
            return;
        }

        if (stderr) {
            console.error(`Warning or error in "${comando}":\n${stderr}`);
        }

        console.log(`Result "${comando}":\n${stdout}`);
        
        // Llamada recursiva para ejecutar el siguiente comando
        ejecutarComandosSecuenciales(comandos, cwd);
    });
}

function CreateAngularProject() {
    const comandos = [
        "ng version", // Verifica la versión de Angular CLI
        "ng new PaginaAngular --skip-install" // Crea un nuevo proyecto de Angular
    ];

    ejecutarComandosSecuenciales(comandos, 'test');
}

module.exports = {
    CreateAngularProject
};