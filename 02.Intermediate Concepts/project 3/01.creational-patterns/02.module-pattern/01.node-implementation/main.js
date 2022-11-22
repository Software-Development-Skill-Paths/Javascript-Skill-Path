//this is where our main application code runs
//import our module for database operations
let Repo = require('./taskRepository');

//import our module for the Task operations
let Task = require('./task');

//create three new tasks to save to our database: these 
//could come from a form our user fills in from the web
//browser or from some http call to an external api
let task1 = new Task({name: 'create a demo for modules'});
let task2 = new Task({name: 'create a demo for singletons'});
let task3 = new Task({name: 'create a demo for prototypes'})

//save our new tasks into the db;
task1.save();
task2.save();
task3.save();

//create an object to hold a task we are searching for from
//the db
let task4 = new Task (Repo.get(1));

//complete the task we have returned from the db
task4.complete();
