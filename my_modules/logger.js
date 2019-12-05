const chalk = require('chalk');

success=(message="Correct")=>{
    console.log(chalk.green.italic(message));
}

danger=(message="Wrong")=>{
    console.log(chalk.red.bold(message));   
}

warning=(message="Warning")=>{
    console.log(chalk.yellow(message));
}

info=(message)=>{
    console.log(chalk.blue.bold(message));
}

welcome=()=>{
    console.log(chalk.bold.bgMagenta.black("Welcome to this chalk.js Console"));
    
}

module.exports={
    success,
    danger,
    warning,
    info,
    welcome
}