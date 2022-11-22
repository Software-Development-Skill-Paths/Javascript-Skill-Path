let Task = function (name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function () {
    console.log('saving Taks: ' + this.name);
}

let myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

//decorate the task object with new properties
//or functions
let urgentTask = new Task('Urgent Task');
urgentTask.priority = 2;
urgentTask.notify = function() {
    console.log('notifying important people');
    console.log(urgentTask.priority);
}

//urgentTask.notify();

//we can take the decoration further by adding
//the notify function within our save method
urgentTask.save = function() {
    this.notify();
    Task.prototype.save.call(this);
}

urgentTask.save();