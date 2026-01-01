require('dotenv').config()
const express = require('express');
const { dbconfig } = require('./config/db.config');
const _ = require('./route');
dbconfig()
const app = express();
const port = process.env.PORT ;
  
// localhost:8080/api/v1



app.use(process.env.BASE_ROUTE, _); 










app.listen(port, () => {
  console.log(`Server is running`);
});