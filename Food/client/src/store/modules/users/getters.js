export default {
    isLoggedIn: state => !!state.token,
    getUser: state => state.user.username,
    getUserId: state => state.user._id, 
    getAllFavorites: state => state.recipes
}