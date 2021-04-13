import User from '../models/User';

export const updateUserById = async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(
        { _id: req.params.userId },
        { $push: { recipes: req.body } }
    );
    res.status(204).json(updatedUser);
};

export const getAllRecipes = async(req, res) => {
    const user = await User.findOne({ _id: req.params.userId });
    const recipes = user.recipes;
    console.log(recipes)
    res.status(204).json({recipes: recipes});
}

