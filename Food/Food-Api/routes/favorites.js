const router = require("express").Router();
const User = require("../models/User")

router.put("/:userId", async (req, res) => {
    const user = await User.findOne({ _id: req.params.userId });
    const recipes = user.recipes;
    const theRecipe = req.body.id;
    let isFavorite = await recipes.find(recipe => recipe.id === theRecipe);

    if (!isFavorite) {
        const updatedUser = await User.findByIdAndUpdate(
            { _id: req.params.userId },
            { $push: { recipes: req.body } }
        );
        res.status(204).json(updatedUser);
    } else {
        const updatedUser = await User.findByIdAndUpdate(
            { _id: req.params.userId },
            { $pull: { recipes: isFavorite } }
        );
        res.status(204).json(updatedUser);
    }

});


router.get("/:userId", async (req, res) => {
    const user = await User.findOne({ _id: req.params.userId });
    const recipes = user.recipes;
    res.json({ recipes: recipes });
})
module.exports = router;
