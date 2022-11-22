/**
 * Module handles database operations on our projects table
 * or repository 
 */

let repo = function () {
    //establish a connection to our database
    let db = {};

    //return a project from our projects table/repository
    let get = function (id) {
        console.log('Getting project ' + id);
        return {
            name: 'New project from db'
        }
    }

    let save = function (project_object) {
        console.log('Saving ' + project_object.name + ' to the db');
    }

    return {
        get: get,
        save: save
    }
}

//make our project repo available to other files that might
//need to use it
module.exports = repo;
