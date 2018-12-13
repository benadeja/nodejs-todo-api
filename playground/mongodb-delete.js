//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb'); //object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    db.collection('Todos').deleteMany({ text: 'Walk the dog' }).then((result) => {
        console.log(result);
    });

    //deleteOne
    db.collection('Todos').deleteOne({ text: 'Walk the dog' }).then((result) => {
        console.log(result);
    });

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
        console.log(result);
    });

    //deleteMany
    db.collection('Users').deleteMany({ name: 'Jaco Benade' }).then((result) => {
        console.log(result);
    });

    //findOneAndDelete
    db.collection('Users').findOneAndDelete({ _id: new ObjectID('5c1280c3d85c9e331e57788e') }).then((result) => {
        console.log(result);
    });


    db.close();
});