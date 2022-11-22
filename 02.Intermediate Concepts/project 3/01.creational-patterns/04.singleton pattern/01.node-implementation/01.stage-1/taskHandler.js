let repo = require('./Repo');

let myrepo = repo ();

let taskHandler = function () {
    return {
        save: function () {
            myrepo.save('Hi from taskHandler');
        }
    }
}

//make our user repo available to other files that might
//need to use it
module.exports = taskHandler();