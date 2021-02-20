import 'reflect-metadata';
import express from 'express';
import router from './routes/user.routes';
import bodyParser from 'body-parser'
import {createConnection} from 'typeorm';
import User from './model/user.model'
const app = express();
createConnection(
   {
      type:"postgres",
      host:"142.93.126.134",
      port:5432,
      username:"postgres",
      password:"devdb2021",
      database:"test",
      synchronize:true,
      entities:[User]
   })
.then((connection) => console.log("connection succes"))
.catch(error => console.log(error));
/* Middleware */
app.use(bodyParser.urlencoded({extended:true}));

/* Routes */
app.use(router);

app.listen(5000, ()=> console.log('App started on port ->', 5000));