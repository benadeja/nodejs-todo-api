var os = require("os");
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const cloudMongo = 'mongodb://testuser1:testuser1@ds139534.mlab.com:39534/mongoose-for-nodejs-todo-api';
const localMongo = 'mongodb://localhost:27017/TodoApp';
var mongoHost = '';

if (os.hostname() === 'jaco-HP-EliteBook-850-G3') {
    console.log('Connecting to local mongo host');
    mongoHost = localMongo;
}
else {
    console.log('Connecting to cloud mongo host');
    mongoHost = cloudMongo
}

mongoose.connect(mongoHost, { useMongoClient: true });

module.exports = { mongoose };