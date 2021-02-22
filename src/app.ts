import 'reflect-metadata';
import express from 'express';
import router from './routes/user.routes';
import bodyParser from 'body-parser'
import {createConnection} from 'typeorm';
import User from './model/user.model'
const app = express();
createConnection();
/* Middleware */
app.use(bodyParser.urlencoded({extended:true}));

/* Routes */
app.use(router);

app.listen(5000, ()=> console.log('App started on port ->', 5000));