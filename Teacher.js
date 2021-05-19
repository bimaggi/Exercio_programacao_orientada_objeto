const Person =require('./Person');

class Teacher extends Person{
    constructor(name,age,materia){
        super(name,age)
        this.materia = materia
    }
    greetings(){
        console.log(' Olá meu nome é', this.name,' e dou aula de', this.materia)
    }

}
module.exports = Teacher;
