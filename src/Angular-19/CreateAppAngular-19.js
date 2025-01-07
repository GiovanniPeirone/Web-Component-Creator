const Comands = require("./comands")


function CreateAngularProject(comands){
    if (comands.length === 0) {
        console.log("Todos los comandos se ejecutaron con éxito.");
        return;
    }
    
    console.log(`Ejecutando: ${comands}`);
        
    exec(comando, {cwd: "test"}, (error, stdout, stderr) => {

        console.log(`Resultado de ${comando}:\n${stdout}`);
        
        ejecutarComandos(comandos); // Ejecuta el siguiente comando
    });
}

CreateAngularProject([...CreateAngularProject])
