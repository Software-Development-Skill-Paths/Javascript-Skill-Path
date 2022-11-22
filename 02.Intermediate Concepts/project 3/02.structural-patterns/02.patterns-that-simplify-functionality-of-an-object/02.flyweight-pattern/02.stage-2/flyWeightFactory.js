let Flyweight = require('./flyWeight')

let FlyweightFactory = function () {
    let flyweights = {}

    //since for our task, only the name property is unique, we
    //can pull all other properties into our flyweight since they
    //will be shared amongst multiple objects that we create from
    //Task object blueprint
    let get = function (project, priority, user, completed) {
        if (!flyweights[project + priority + user + completed]) {
            flyweights[project + priority + user + completed] = 
            new Flyweight (project, priority, user, completed);
        }
        return flyweights[project + priority + user + completed];
    };

    let getCount = function () {
        let count = 0;
        for (const f in flyweights) count++;
        return count;
    }

    return {
        get: get,
        getCount: getCount
    };
}

module.exports = FlyweightFactory();