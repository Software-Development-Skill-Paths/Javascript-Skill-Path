let repo =  {
    tasks: {},
    commands: [],
    get: function (id) {
        console.log('Getting task ' + id);
        return {
            name: 'new task from the db'
        }
    },
    save: function (task) {
        repo.tasks[task.id] = task;
        console.log('Saving ' + task.name + ' to the db');
    },
    replay: function () {
        for (let i = 0; i < repo.commands.length; i++) {
            let command = repo.commands[i];
            
            repo.executeNoLog(command.name, command.obj);
        }
    }
}

repo.executeNoLog = function(name) {
    let args = Array.prototype.slice.call(arguments, 1);
    if (repo[name]) {
        return repo[name].apply(repo, args);
    }
}

repo.execute = function(name) {
    let args = Array.prototype.slice.call(arguments, 1);
    repo.commands.push({
        name: name,
        obj: args[0]
    });

    if (repo[name]) {
        return repo[name].apply(repo, args);
    }

    return false;
}

repo.execute('save', {
    id: 1,
    name: 'Task 1',
    completed: false
});

repo.execute('save', {
    id: 2,
    name: 'Task 2',
    completed: false
});

repo.execute('save', {
    id: 3,
    name: 'Task 3',
    completed: false
});

repo.execute('save', {
    id: 4,
    name: 'Task 4',
    completed: false
});

console.log(repo.tasks);
repo.tasks = {};
console.log(repo.tasks);

repo.replay();

console.log(repo.tasks);

/**
 * repoObject => {
 *      tasks: {},
 *      commands: [],
 *      get: function () {
 *              //get a task
 *              //return the name of this task
 *           },
 *      save: function () {
 *              //save a task
 *            },
 *      replay: function () {
 *                  //call the executeNoLog() on every command in the command Array 
 *              },
 *      executeNoLog: function () {
 *                      //
 *                    },
 *      execute: function () {
 *                  //
 *               }
 *      
 * }
 */
























// let repo = function() {
//     //define all your code for connecting to the db in this object
//     let db = {};
    
//     //using the db object, create other methods that utilize this connection
//     let get = function(id) {
//         console.log('Getting task ' + id);
//         return {
//             name: 'new task from db'
//         }
//     }

//     let save = function(task) {
//         console.log('Saving ' + task.name + ' to the db');
//     }

//     return {
//         get: get,
//         save: save
//     }
// }

// module.exports = repo();