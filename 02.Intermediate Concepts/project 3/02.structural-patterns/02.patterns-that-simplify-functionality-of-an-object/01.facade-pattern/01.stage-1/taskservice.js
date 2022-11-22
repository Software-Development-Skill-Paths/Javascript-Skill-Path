//this is our task module with keys whose values are
//functions that help us work with our Task object
let taskService = function (task) {
    return {
        complete: function (task) {
            task.completed = true;
            console.log('completing task: ' + task.name);
        },
        setCompleteDate: function (task) {
            task.completedDate = new Date();
            console.log(task.name + ' completed on ' + 
            task.completedDate);
        },
        notifyCompletion: function (task, user) {
            console.log('Notifying ' + user + ' of the completion of ' +
            task.name);
        },
        save: function (task) {
            console.log('saving Task ' + task.name);
        }
    }
};

module.exports = taskService();
