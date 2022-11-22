'use strict';
// let task = {};

// task.title = 'My task';
// task.description = 'My description';
// task.fullTitle = function() {
//     return this.title + ' ' + this.description
// }

// console.log(task.title);
// console.log(task.fullTitle());

// console.log('..........................................');


// let task2 = Object.create(Object.prototype);

// task2.title = 'My 2nd Task';
// task2.description = 'My 2nd description';
// task2.fullTitle2 = function() {
//     return this.title + ' ' + this.description
// }

// console.log(task2.description);
// console.log(task2.fullTitle2());

// let task3 = {
//     title: 'Shopping',
//     description: 'Shop for laundry',
//     // fullTaskName: function() {
//     //     return this.title + this.description
//     // }
// }

// //use Object.defineProperty to manage the properties of any given object
// Object.defineProperty(task3, 'fullTaskName', {
//     value: function() {
//         return this.title + ': ' + this.description
//     },
//     writable: true,
//     enumerable: true,
//     configurable: true
// })

// //this will break the fullTaskName function since everything in Javascript is assignable
// // task3.fullTaskName = 'hello boss';

// //the Object.defineProperty() will help configure a property in such a way that it maintains it's functionality
// console.log(task3.fullTaskName());

// //inheritance using the Object.create() method
// let urgentTask = Object.create(task3);

// console.log(urgentTask.fullTaskName());

//Constructor Pattern
// let Task = function(name) {
//     this.name = name,
//     this.completed = false;
// }

// Task.prototype.complete = function() {
//     console.log('completing task: ' + this.name);
//     this.completed = true;
// }

// Task.prototype.save = function() {
//     console.log('saving Task: ' + this.name);
// }

// let task1 = new Task('create a demo for constructors');
// let task2 = new Task('create a demo for modules');
// let task3 = new Task('create a demo for singletons');
// let task4 = new Task('create a demo for prototypes');

// task1.complete();
// task2.save();
// task3.save();
// task4.save();

//Module Pattern
//put all methods associated with working with the database in one function
// let repo = function() {
//     return {
//         get_record: function(id) {
//             console.log('Getting task ' + id);
//             return {
//                 name: 'new task from db'
//             }
//         },
//         save_record: function(id) {
//             console.log('Saving ' + id + ' to the db');
//         }
//     }
// }

// module.exports.repo();

//Factory Pattern
//collect different repositories/classes/modules together
let repoFactory = function() {
    this.getRepo = function(repoType) {
        if (repoType === 'task') {
            let taskRepo = require('./taskRepository')();
            return taskRepo;
        }
        if (repoType === 'user') {
            let userRepo = require('./userRepository')();
            return userRepo;
        }
        if (repoType === 'project') {
            let projectRepo = require('./projectRepository')();
            return projectRepo;
        }
    }
}

module.exports = new repoFactory();