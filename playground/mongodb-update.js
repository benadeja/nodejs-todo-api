//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb'); //object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({ _id: new ObjectID('5c127f71d85c9e331e57788d') },
        {
            $set: {
                completed: true
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        })

    db.collection('Users').findOneAndUpdate({ _id: new ObjectID('5c13656ca7b16e0582fdee64') },
        {
            $set: {
                name: 'Jaco'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        })

    db.close();
});