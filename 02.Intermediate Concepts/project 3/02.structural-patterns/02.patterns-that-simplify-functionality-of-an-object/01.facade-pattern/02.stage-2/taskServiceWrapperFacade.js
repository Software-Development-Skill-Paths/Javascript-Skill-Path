//this is our facade implementation that hides all the work
//that would have showed up on our interface so it just gives
//us a clean simple method that we can use at the interface
let taskService = require('./taskservice');

let taskServiceWrapper = function () {
    let completeAndNotify = function (task) {
        taskService.complete(task);
        if (task.completed === true) {
            taskService.setCompleteDate(task);
            taskService.notifyCompletion(task, task.user);
            taskService.save(task);
        }
    }

    return {
        completeAndNotify: completeAndNotify
    }
}

module.exports = taskServiceWrapper();

