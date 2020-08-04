import MongooseInstance from "./config/mongoose.mjs";
import UserService from "./service/user-service.mjs";
import express from 'express';

//const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


const main = async () => {
  const mongooseInstance = new MongooseInstance()
  console.info("Connecting to the Mongo Database")


  var connectWithRetry = function () {
    return mongooseInstance.connect(function (err) {
      if (err) {
        console.error('Failed to connect to mongo on startup - retrying in 1 sec', err);
        setTimeout(connectWithRetry, 1000);
      }
    });
  };
  connectWithRetry();




  const userService = new UserService()

  console.info("Returning all users")

  const allUsers = await userService.getAll()

  console.info(allUsers)

  const userToDelete = {
    id: "5e9d82a54c0d944c927f0699"
  }

  // console.info("Deleting user")
  // const result = await userService.delete(userToDelete)

  // console.info(result)


  console.info("Creating new user")

  const newUser = {
    firstName: "John",
    lastName: "The Great"
  }

  const resutl = await userService.create(newUser)
  console.info(resutl)

  /*console.info("Updating user")

  const userToUpdate = {
    id: "5e9d8e3ac011104f096b33b2",
    firstName: "JohnUpdated",
    lastName: "Th Great"
  }*/

  const result = await userService.update(userToUpdate)


  console.info(result)


};

main()