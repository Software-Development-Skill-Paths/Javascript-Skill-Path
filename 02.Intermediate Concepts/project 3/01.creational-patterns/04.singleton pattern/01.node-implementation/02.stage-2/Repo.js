/**
 * Basic module with only one save method
 */

let repo = function () {
    let called = 0;

    let save = function (task) {
        called++;
        console.log('Saving ' + task + 
                    ' Called ' + called + ' times');
    }
    console.log('newing up task repo');
    return {
        save: save
    }
}

//make our project repo available to other files that might
//need to use it
//here we export the instance of our repo so we don't need
//to keep creating instances in other modules to gain access
//to this repos functions
//this provides one instance that we use in different places
//in our application without having to create other instances
//this is the singleton pattern
module.exports = repo ();
