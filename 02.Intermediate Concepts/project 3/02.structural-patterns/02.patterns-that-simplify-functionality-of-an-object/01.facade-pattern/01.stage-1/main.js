//this is our main execution code
let Task = require('./task');
let taskService = require('./taskservice');

let myTask = new Task({
    name: 'My Task',
    priority: 1,
    project: 'Courses',
    user: 'Jon',
    completed: false
});

taskService.complete(myTask);
if (myTask.completed === true) {
    taskService.setCompleteDate(myTask);
    taskService.notifyCompletion(myTask, myTask.user);
    taskService.save(myTask);
}

console.log(myTask);