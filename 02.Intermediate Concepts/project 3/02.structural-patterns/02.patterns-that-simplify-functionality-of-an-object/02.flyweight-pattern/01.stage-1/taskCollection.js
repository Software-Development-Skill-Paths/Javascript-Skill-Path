let Task = require('./task');

let TaskCollection = function() {
    let tasks = {};
    let count = 0;
    let add = function (data) {
        tasks[data.name] = new Task(data);
        count++;
    };
    let get = function (name) {
        return tasks[name];
    }
    let getCount = function () {
        return count;
    }
    
    return {
        add: add,
        get: get,
        getCount: getCount
    }
}

module.exports = TaskCollection();