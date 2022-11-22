let loggingService = function () {
    let message = 'Logging ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
};

module.exports = loggingService;

/*
    loggingService object => {
        message: 'Logging',
        update: function (task) {
            console.log(message + task.user + ' for task ' + task.name)
        }
    }
*/