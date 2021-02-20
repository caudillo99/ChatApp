import {Request, Response} from 'express'
import { connect } from 'http2';
import { get } from 'https';
import {getRepository, createConnection, getConnection} from 'typeorm'
import User from '../model/user.model'

export const getUsers = async (req:Request, res:Response):Promise<Response> => {
   const foundUsers = await getRepository(User).find();
   return res.json(foundUsers);
};

export const addUser = async (req:Request, res:Response) => {
   /* To-do save the a new user into the DB */
   const newUser = getRepository(User).create(req.body);
   console.log(newUser);
}
