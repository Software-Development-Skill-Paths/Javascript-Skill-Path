/**
 * This contains the none unique properties of the Task Object
 * that will be shared by multiple (very large numbers) of other
 * Task objects
 * This will help us save on memory by having to always create
 * these properties when we are working with a new Task object
 */

function Flyweight(project, priority, user, completed) {
    this.project = project;
    this.priority = priority;
    this.user = user;
    this.completed = completed;
}

module.exports = Flyweight;