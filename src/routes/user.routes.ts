import {Router, Request, Response, Application} from 'express';
import {getUsers, addUser} from '../controllers/user.controller'

const router = Router();

router.get('/users', getUsers);
router.post('/users', addUser);

export default router;
