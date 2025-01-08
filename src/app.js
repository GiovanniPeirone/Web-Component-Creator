const { exec } = require("child_process");
const path = require("path");



function CreateWebPage(jsonFile){
    console.log("hola mundo")
}

/*
// Función para ejecutar comandos secuencialmente
function ejecutarComandos(comandos) {
    if (comandos.length === 0) {
      console.log("Todos los comandos se ejecutaron con éxito.");
      return;
    }
  
    const comando = comandos.shift(); // Obtén el primer comando
    console.log(`Ejecutando: ${comando}`);
  
    exec(comando, {cwd: "test"}, (error, stdout, stderr) => {
      console.log(`Resultado de ${comando}:\n${stdout}`);
      ejecutarComandos(comandos); // Ejecuta el siguiente comando
    });
}

// Ejecutar los comandos
ejecutarComandos([...CreateAngularProject]); // Clonar la lista para evitar modificarla

//https://github.com/GiovanniPeirone/Web-Component-Creator/blob/main/configs/Components/Footers/GP_Footer_01/index.html
*/

module.exports = {
    CreateWebPage

}