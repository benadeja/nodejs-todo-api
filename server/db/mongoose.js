var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const cloudMongo = 'mongodb://testuser1:testuser1@ds139534.mlab.com:39534/mongoose-for-nodejs-todo-api';
const localMongo = 'mongodb://localhost:27017/TodoApp';

mongoose.connect(cloudMongo, { useMongoClient: true });

module.exports = { mongoose };