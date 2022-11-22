let auditingService = function () {
    let message = 'Auditing ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
};

module.exports = auditingService;