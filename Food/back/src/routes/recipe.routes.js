import { Router } from 'express';
const router = Router();
// import { verifyToken } from '../middlewares'
import * as recipeCtrl from '../controllers/recipe.controller';


router.put('/:userId', recipeCtrl.updateUserById)
router.get('/:userId', recipeCtrl.getAllRecipes)


export default router;