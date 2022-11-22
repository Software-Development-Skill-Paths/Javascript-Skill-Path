//module with all functions to work with my database
let repo = function () {
    //create object to store all the necessary database connections
    let db = {};

    //create the get method that utilises the database connection to
    //return a task that is stored in our tasks database
    let get = function (id) {
        console.log('Getting task ' + id);
        return {
            name: 'name of task returned from the db'
        }
    }

    //create the save method that utilizes the database connection to
    //save a task into the database
    let save = function (task) {
        console.log('Saving ' + task.name + ' to the db');
    }

    return {
        get: get,
        save: save
    }
}

module.exports = repo ();






























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