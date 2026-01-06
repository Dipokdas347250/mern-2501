require('dotenv').config()
const express = require('express');
const { dbconfig } = require('./config/db.config');
const _ = require('./route');
const { globalerrorhandler } = require('./utils/globalerror');
dbconfig()
const app = express();
const port = process.env.PORT ;

app.use(express.json())
// localhost:8080/api/v1



app.use(process.env.BASE_ROUTE, _); 


app.use(globalerrorhandler)

app.listen(port, () => {
  console.log(`Server is running`);
});