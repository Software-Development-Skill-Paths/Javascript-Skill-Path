/**
 * Module handles database operations on our task table
 * or repository
 */

let repo = function () {
    //establish a database connection
    let db = {};

    //find a task that corresponds to the given id from our
    //task table/repository
    let get = function (id) {
        console.log('Getting task ' + id);
        return {
            name: 'New task from db'
        }
    }

    //save a given task to our task table/repository
    let save = function (task_object) {
        console.log('Saving ' + task_object.name + ' to the db');
    }

    //some other additional info from the task repo
    console.log('newing up task repo');

    return {
        get: get,
        save:save
    }
}

//make our task repo available to other files that might
//need to use it
module.exports = repo;
