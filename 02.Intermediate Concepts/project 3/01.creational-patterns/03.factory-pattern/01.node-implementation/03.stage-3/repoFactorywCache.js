let repoFactory = function () {
        this.getRepo = function (repoType) {
            if (repoType === 'task') {
                if (this.taskRepo) {
                    console.log('Retrieving from cache');
                    return this.taskRepo;
                } else {
                    this.taskRepo = require('./taskRepository')();
                    //you can any config code here that would otherwise have been
                    //put on our main file
                    return this.taskRepo;
                }
            }
            if (repoType === 'user') {
                if (this.userRepo) {
                    return this.userRepo; 
                } else {
                    this.userRepo = require('./userRepository')();
                    return this.userRepo;
                }
                
            }
            if (repoType === 'project') {
                if (this.projectRepo) {
                    return this.projectRepo;
                } else {
                    this.projectRepo = require('./projectRepository')();
                    return this.projectRepo;
                }
            }
            
        }
}

module.exports = new repoFactory;