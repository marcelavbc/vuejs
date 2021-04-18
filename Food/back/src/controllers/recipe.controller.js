import User from '../models/User';

export const updateUserById = async (req, res) => {
    const user = await User.findOne({ _id: req.params.userId });
    const recipes = user.recipes;
    const theRecipe = req.body.id;
    let isFavorite = await recipes.find(recipe => recipe.id === theRecipe);
    let index = await recipes.indexOf(isFavorite)

    if (!isFavorite) {
        const updatedUser = await User.findByIdAndUpdate(
            { _id: req.params.userId },
            { $push: { recipes: req.body } }
        );
        res.status(204).json(updatedUser);
    } else {
        console.log('need to quit')
        const updatedUser = await User.findByIdAndUpdate(
            { _id: req.params.userId },
            { $pull: { recipes: isFavorite } }
        );
        res.status(204).json(updatedUser);
    }

};

export const getAllRecipes = async (req, res) => {
    const user = await User.findOne({ _id: req.params.userId });
    const recipes = user.recipes;
    console.log(recipes)
    res.json({ recipes: recipes });
}


