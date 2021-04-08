export default {
    isLoggedIn(state) {
        console.log(state)
        if (state.token.length === 0) {
            return false
        } else {
            return true
        }
    },
    authState: state => state.status,
    user: state => state.user,
    error: state => state.error
}