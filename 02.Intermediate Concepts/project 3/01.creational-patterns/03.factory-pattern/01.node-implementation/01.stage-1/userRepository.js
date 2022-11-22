/**
 * Module handles database operations on our users table
 * repository
 */

let repo = function () {
    //establish a connection to the database
    let db = {};

    //get a user with the given id from our users table/
    //repository
    let get = function (id) {
        console.log('Getting user ' + id);
        return {
            name: 'Nuwagalb'
        }
    }

    //save a user to users table
    let save = function (user_object) {
        console.log('Saving ' + user_object.name + 'to the db');
    }

    return {
        get: get,
        save: save
    }
}

//make our user repo available to other files that might
//need to use it
module.exports = repo;