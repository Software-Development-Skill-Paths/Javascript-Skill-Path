/**
 * file with our main logic
 */

let taskHandler = require('./taskHandler');
let myrepo = require('./Repo');

myrepo.save('from Main');
myrepo.save('from Main');
myrepo.save('from Main');
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();
