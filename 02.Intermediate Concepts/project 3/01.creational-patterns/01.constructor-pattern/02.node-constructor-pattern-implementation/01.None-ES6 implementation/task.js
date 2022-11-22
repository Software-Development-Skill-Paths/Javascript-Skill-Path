let Task = function (name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
}

Task.prototype.save = function () {
    console.log('saving task: ' + this.name);
}

module.exports = Task;
