let FlyweightFactory = require('./flyWeightFactory');

let Task = function (data) {
    this.name = data.name;

    // these are the properties that are not unique to the
    // Task object and are shared by each new object that is 
    // created from our Task object blue print

    // this.priority = data.priority;
    // this.project = data.project;
    // this.user = data.user;
    // this.completed = data.completed;
    
    this.flyweight = FlyweightFactory.get(data.project, data.priority,
        data.user, data.completed);
}

Task.prototype.getPriority = function () {
    this.flyweight.priority;
}

module.exports = Task;