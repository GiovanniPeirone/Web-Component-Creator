
const { Command } = require('commander');
const program = new Command();

const path = require('path')

const testFolder = require('../test/project.json')

const { CreateWebPage } = require('./app.js')

//const AnguarProject = require("./Angular");


const CreateReactProject = [
    "ng new PaginaAngular"
]


program
  .name('wcc')
  .description('Verify that you have Angular Updated or installed in the latest version')
  .version('1.0.0');


program
  .command('create <jsonFile>')
  .description('crete the web page reading the json file')
  .action((jsonFile) => {
    CreateWebPage(testFolder)
  })

program
  .command('createtest')
  .description('--test Folder')
  .action((jsonFile) => {
    CreateWebPage(testFolder)
  })
  

program
  .command('saludar <nombre>')
  .description('Saluda a alguien')
  .action((nombre) => {
    console.log(`¡Hola, ${nombre}!`);
  });

program
  .command('despedir [nombre]')
  .description('Despedirse de alguien')
  .action((nombre = 'amigo') => {
    console.log(`¡Adiós, ${nombre}!`);
  });

program.parse();

