//specifically use the function key word when using the constructor design pattern
let Task = function (name) {
    this.name = name;
    this.completed = false;
}

//use the Task prototype to create the complete and save methods so that you don't
//have to recreate these methods every time you make a new copy of the Task object
//specifically use the function keyword when add the complete and save properties
//to the Task object's prototype
Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
}

Task.prototype.save = function () {
    console.log('saving task: ' + this.name);
}

//creating a few copies of the Task object
let task1 = new Task('create a demo for constructors'); 
let task2 = new Task('create a demo for modules');
let task3 = new Task('create a demo for singletons');
let task4 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();