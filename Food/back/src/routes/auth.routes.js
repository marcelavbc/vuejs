import { Router } from 'express';

const router = Router();
import * as authCtrl from '../controllers/auth.controller';


router.post('/signin', authCtrl.signIn)
router.post('/signup', authCtrl.signUp)
router.get('/', authCtrl.getAllUsers)


export default router;