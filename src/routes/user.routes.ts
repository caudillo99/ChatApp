import {Router, Request, Response, Application} from 'express';
import {getUsers, getUser, addUser, deleteUser} from '../controllers/user.controller'

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', addUser);
router.delete('/users/:id', deleteUser);
export default router;
