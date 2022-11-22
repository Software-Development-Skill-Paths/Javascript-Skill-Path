let Task = require('./task');
const ObserverList = require('./observerList');

let ObservableTask = function(data) {
    Task.call(this, data);
    this.observers = new ObserverList();
}

ObservableTask.prototype.addObserver = function (observer) {
    this.observers.add(observer);
}

ObservableTask.prototype.notify = function (context) {
    var observerCount = this.observers.count();
    for (let i = 0; i < observerCount; i++) {
        this.observers.get(i)(context);     
    }
}

ObservableTask.prototype.save = function () {
    this.notify(this);
    Task.prototype.save.call(this);
}

ObservableTask.prototype.removeObserver = function (observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
}

module.exports = ObservableTask;

/*
    observableTask object => {
        name: '', //an instance of the obj to be observed
        priority: '',
        project: '',
        user: '',
        completed: '',
        observers: observerList {
            observerList:[]
        }, 
    }
*/