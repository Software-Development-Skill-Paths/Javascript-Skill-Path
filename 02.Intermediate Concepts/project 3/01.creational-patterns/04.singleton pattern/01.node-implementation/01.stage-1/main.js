/**
 * file with our main logic
 */

let taskHandler = require('./taskHandler');
let repo = require('./Repo');
let myrepo = repo ();

myrepo.save('from Main');
myrepo.save('from Main');
myrepo.save('from Main');
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();
