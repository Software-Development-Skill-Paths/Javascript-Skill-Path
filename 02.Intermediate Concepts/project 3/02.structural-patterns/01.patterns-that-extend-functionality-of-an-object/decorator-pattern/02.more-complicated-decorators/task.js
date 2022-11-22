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

//we will aim at obtaining true sub-objecting by 
//creating an new object that wraps the Task object
//and allows us to decorate it with other properties
//and methods without changing it at all
//we will call our new object urgentTask

let urgentTask = function(name, priority) {
    //first we call the constructor of the task class
    //to access all it's properties within our new
    //object
    Task.call(this, name);
    this.priority = priority;
}

//we will need to access the prototype of the Task 
//object using our new wrapper object so we create
//a new object from the Tasks prototype and add it
// to our new object's prototype
urgentTask.prototype = Object.create(Task.prototype);

//The above procedures complete true inheritance were
//all the Task methods and it's prototype come down and
//are accessible by our new Urgent object

//We can then go ahead and add new functions to our
//new object's inheritance
urgentTask.prototype.notify = function() {
    console.log('notifying important people');
}

urgentTask.prototype.save = function() {
    this.notify();
    console.log('do special stuff before saving');
    Task.prototype.save.call(this);
}

let myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

let ut = new urgentTask('This is urgent', 1);
console.log(ut);
ut.complete();
ut.save();
