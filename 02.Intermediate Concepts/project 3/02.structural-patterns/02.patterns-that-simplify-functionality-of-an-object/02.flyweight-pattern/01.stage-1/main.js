let tasks = require('./taskCollection');

let projects = ['none', 'courses', 'training', 'project'];
let priorities = [1, 2, 3, 4, 5];
let users = ['Jon', 'Erica', 'Amanda', 'Nathan'];
let completed = [true, false];

let initialMemory = process.memoryUsage().heapUsed;

for (let i = 0; i < 1000000; i++) {
    tasks.add({
        name: 'task' + i,
        priority: priorities[Math.floor((Math.random() * 5))],
        project: projects[Math.floor((Math.random() * 4))],
        user: users[Math.floor((Math.random() * 4))],
        completed: completed[Math.floor((Math.random() * 2))]
    })
}

let afterMemory = process.memoryUsage().heapUsed;
console.log('used Memory ' + (afterMemory - initialMemory) / 1000000);

console.log('tasks: ' + tasks.getCount());