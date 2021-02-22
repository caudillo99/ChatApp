import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import User from '../model/user.model'

export const getUsers = async (req:Request, res:Response):Promise<Response> => {
   const foundUsers = await getRepository(User).find();
   return res.json(foundUsers);
};

export const addUser = async (req:Request, res:Response):Promise<Response> => {
   const newUser = getRepository(User).create(req.body);
   const result = await getRepository(User).save(newUser);
   return res.json(result);
}

export const getUser = async (req:Request, res:Response):Promise<Response> =>{ 
   const foundUser = await getRepository(User).findOne(req.params);
   return res.json(foundUser)
}

export const deleteUser = async (req:Request, res: Response) => {
   console.log("user deleted",req.params);
   /* const deleted = await getRepository(User).delete(req.params); */
}
