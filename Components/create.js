const path = require("path")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
    

console.log("Please if you want to create a new component put your GitHub name with no space")
console.log("Example:")
console.log("NO: Mark Zuckerberg")
console.log("YES: MarkZuckerberg OR: Mark-Zuckerberg")    

// Preguntar al usuario
rl.question('> ', (name) => {
    console.log("What is the type of component you want to create?")
    console.log("1 - Header")
    console.log("2 - Main")
    console.log("3 - Footer")

    // Preguntar al usuario
    rl.question('> ', (number) => {
        if (number <= 1){
            CreateHeader()
        }
        if (number == 2){
            CreateMain()
        }
        if (number >= 3){
            CreateFooter()
        }
        // Cerrar la interfaz
        rl.close();
    });
    // Cerrar la interfaz
    rl.close();
});

function CreateHeader(){

}

function CreateMain(){
    
}

function CreateFooter(){
    
}