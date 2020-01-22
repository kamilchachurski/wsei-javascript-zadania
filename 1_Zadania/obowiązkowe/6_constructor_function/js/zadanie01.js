const Robot = function(name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function(toWho) {
    if (this.isFunctional === true) {
        console.log(`Robot ${ this.name } greets ${ toWho }`);
    } else {
        console.log(`Robot ${ this.name } is broken`);
    }
}

Robot.prototype.changeName = function(newName) {
    console.log(`Robot ${ this.name } changes name to ${ newName }`);

    this.name = newName;
}

Robot.prototype.fixIt = function () {
    this.isFunctional = true;

    console.log(`Robot ${ this.name } was fixed`);
}

let robot1 = new Robot('Leszek');

robot1.sayHi('Kamil');
robot1.changeName('Alojzy');
robot1.sayHi('Kamil');
robot1.fixIt();

let robot2 = new Robot('Zbyszek');

robot2.sayHi('Kamil');
robot2.fixIt();
robot2.changeName('Janusz');
robot2.sayHi('Kamil');