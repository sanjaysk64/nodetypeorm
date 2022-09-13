const express = require("express");
const app =express();
const bodyparser = require('body-parser');
require('dotenv').config();
const {dataSource, datasource} = require('./database');
const router = require('./app/router');
const cors = require('cors');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

async function run() {
    try {
      await datasource.initialize();
      // await dataSource.synchronize();
      console.log('Datasource initialized.');
      app.use('/', router);
      app.listen(process.env.PORT, () => {
        console.log(`Localhost is running on port ${process.env.PORT}`);
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  run();
  


  //postman
  /*
  {
    "adress":"10/457b",
    "student":
    {
      "firstName":"krishna",
      "lastName":"kumar",
      "email":"krishna@gmail.com"
    }
}
  */