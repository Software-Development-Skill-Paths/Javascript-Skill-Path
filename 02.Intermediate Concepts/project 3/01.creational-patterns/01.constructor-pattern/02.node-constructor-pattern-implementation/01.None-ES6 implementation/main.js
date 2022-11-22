//this is where our main application code runs
let Task = require('./task');

console.log(Task);

let task1 = new Task('create a demo for constructors');
let task2 = new Task('create a demo for modules');
let task3 = new Task('create a demo for singletons');
let task4 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save(); 