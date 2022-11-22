let Task = require('./task');
let mediator = require('./mediator');
let notificationService = require('./notificationService');
let loggingService = require('./loggingService');
let auditingService = require('./auditingService');

let task1 = new Task({
    name: 'create a demo for constructors', 
    user:'Albert'
});

let not = new notificationService();
let log = new loggingService();
let audit = new auditingService();

mediator.subscribe('complete', not, not.update);
mediator.subscribe('complete', log, log.update);
mediator.subscribe('complete', audit, audit.update);

//override the complete method in our Task object
task1.complete = function () {
    //publish a response to every object that is subscribed
    //to the complete channel
    mediator.publish('complete', this);
    Task.prototype.complete.call(this);
}

task1.complete();