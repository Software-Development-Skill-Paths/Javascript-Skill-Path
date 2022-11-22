/**
 * Constructor contains properties and functions of the task
 * object
 */

//import the taskRepository so our Task object can have
//access to functions that interact with the tasks table
//or repository in the db
let Repo = require('./taskRepository')();

let Task = function (data) {
    this.name = data.name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
    Repo.save(this);
}

//make the Task object available to any file that might 
//need to use it
module.exports = Task;
