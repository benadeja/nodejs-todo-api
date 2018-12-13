//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb'); //object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count} `);
    }, (err) => {
        console.log('Unable to find todos');
    });

    db.collection('Users').find({ name: 'Jaco Benade' }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to find users');
    });
    db.close();
});