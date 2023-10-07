const chalk = require('chalk')

const validator = require('validator')
console.log(validator.isURL('https://mead.io'))

//Chalk related code
const chalk = require('chalk')
console.log(chalk.green('Success!'));

console.log(chalk.bold('I am bold!'))


console.log(chalk.inverse('I am bold!'))
console.log(chalk.green.bgRed.bold('Hello world!'));