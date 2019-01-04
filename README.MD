# Nodejs Todo API

Api built to allow a users to add, remove, delete and update todos based on the user context.

This application provide 2 api endpoints:
- user api (create user, retrieve user, login user, logout user)
- todo api (create todo, retrieve todo, retrieve todo by id, delete todo, update todo) ,
  this API is based on user context so you will need an x-auth token to use the todo-api

This API is also hosted on Heroku at this context path : https://hidden-cliffs-17705.herokuapp.com 

## Getting Started

Make sure you have Nodejs and npm installed on your machine.

Follow this link if unsure : https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

### Installing

Run the following command from the server directory to see how the system works:

node server/server.js

I have also included a Postman Collection to ease the initial testing process, located at
server/tests/Todo-API.postman_collection.json

## Authors

* **Jaco Benade** - *Initial work* - (https://github.com/benadeja)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
