const router = require("express").Router();
const User = require("../models/User")

router.put("/:userId", async (req, res) => {

    const user = await User.findOne({ _id: req.params.userId });
    const recipes = user.recipes;
    const theRecipeId = req.body.id;

    let favorite = await recipes.some(recipe => recipe.id === theRecipeId);
    let favoriteRecipe = await recipes.find(recipe => recipe.id === theRecipeId);
    if (!favorite) {
        const updatedUser = await User.findByIdAndUpdate(
            { _id: req.params.userId },
            { $push: { recipes: req.body } }
        );
        res.status(204).json(updatedUser);
    } else {
        const updatedUser = await User.findByIdAndUpdate(
            { _id: req.params.userId },
            { $pull: { recipes: favoriteRecipe } }
        );
        res.status(204).json(updatedUser);
    }
});


router.get("/:userId", async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userId });
        const recipes = user.recipes;
        res.json({ recipes: recipes });
    } catch (error) {
        res.status(400).json({ error })
    }

})
module.exports = router;
