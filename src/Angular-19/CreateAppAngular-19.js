const Comands = require("./Comands")




const CreateAngularProject = [
    "ng version",
    "ng new PaginaAngular"
]


function CreateAngularProject(Comands){
    if (comandos.length === 0) {
        console.log("Todos los comandos se ejecutaron con éxito.");
        return;
    }
    
    console.log(`Ejecutando: ${comando}`);
        
    exec(comando, {cwd: "test"}, (error, stdout, stderr) => {

        console.log(`Resultado de ${comando}:\n${stdout}`);
        
        ejecutarComandos(comandos); // Ejecuta el siguiente comando
    });
}

CreateAngularProject([...CreateAngularProject])
