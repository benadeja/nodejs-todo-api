var env = process.env.NODE_ENV || 'development'; // On Heroku this will always be 'production'
console.log('env ***** ', env);

if (env === 'development') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
} else if (env === 'production') {
    process.env.MONGODB_URI = 'mongodb://testuser1:testuser1@ds139534.mlab.com:39534/mongoose-for-nodejs-todo-api';
}