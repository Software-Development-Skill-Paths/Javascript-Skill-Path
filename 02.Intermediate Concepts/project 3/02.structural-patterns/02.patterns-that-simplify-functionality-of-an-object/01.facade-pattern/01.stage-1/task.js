/**
 * This shows a situation were our functionality is all
 * clogged up and we will need to implement the facade
 * pattern to clean it up
 */

//this is our task object containing all our properties
let Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}

module.exports = Task;

