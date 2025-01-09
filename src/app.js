const path = require("path");
const readline =  require("readline")
const AnguarProject = require("./Angular-19/CreateAppAngular-19");

const { CreateAngularProject } = require("./Angular-19/CreateAppAngular-19")

function CreateWebPage(jsonFile){
  console.log("What technology do you prefer?")    
  
  console.log("1 - Angular 19")
  console.log("2 -React vite ")
  // Crear la interfaz de readline
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Preguntar al usuario
  rl.question('> ', (technology) => {
    if (technology <= 1){
      CreateAngularProject()
    }
    // Cerrar la interfaz
    rl.close();
  });
  
}

module.exports = {
    CreateWebPage
}