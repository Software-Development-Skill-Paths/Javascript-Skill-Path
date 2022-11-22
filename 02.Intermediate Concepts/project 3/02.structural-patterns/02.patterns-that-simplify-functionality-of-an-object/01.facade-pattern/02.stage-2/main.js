//this is our main execution code
let Task = require('./task');
let taskServiceWrapper = require('./taskServiceWrapperFacade');

let myTask = new Task({
    name: 'My Task',
    priority: 1,
    project: 'Courses',
    user: 'Jon',
    completed: false
});

taskServiceWrapper.completeAndNotify(myTask);

console.log(myTask);