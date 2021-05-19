const Alumn = require('./Alumn');
const Teacher = require('./Teacher');


let Marcia = new Teacher('Marcia', 43, 'Filosfia')
console.log(Marcia)
Marcia.greetings()

let Bianca = new Alumn( 'Bianca', 14, 'C')
console.log(Bianca)
Bianca.greetings()

