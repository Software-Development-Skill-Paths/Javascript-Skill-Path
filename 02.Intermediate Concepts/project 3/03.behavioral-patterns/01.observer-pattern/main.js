let Task = require('./task');
let ObservableTask = require('./observableTask');
let notificationService = require('./notificationService');
let loggingService = require('./loggingService');
let auditingService = require('./auditingService');

let task1 = new ObservableTask({name: 'create a demo for constructors', user:'Albert'});

let not = new notificationService();
let log = new loggingService();
let audit = new auditingService();

task1.addObserver(not.update);
task1.addObserver(log.update);
task1.addObserver(audit.update);

//let the task subject notify my observers when the save method
//on my observable Task is called
task1.save();

//remove our audit service
task1.removeObserver(audit.update);

//save our task again
task1.save();