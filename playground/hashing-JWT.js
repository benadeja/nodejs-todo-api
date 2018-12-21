const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

// Sign the token with JWT
var token = jwt.sign(data, '123abc');
console.log(token);

// Verify the token with JWT
var decoded = jwt.verify(token, '123abc');
console.log('decoded: ', decoded);



