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

//make our repo available to other files that might
//need to use it
//in this case, we are exporting the function itself
//so for it to be used any where else, we need to 
//first create a new instance for it
module.exports = repo;  
