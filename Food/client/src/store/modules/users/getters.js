export default {
    isLoggedIn: state => state.loggedIn,
    authState: state => state.status,
    user: state => state.user,
    error: state => state.error
}