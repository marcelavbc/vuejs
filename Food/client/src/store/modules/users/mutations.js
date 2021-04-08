export default {
    login_request(state) {
        state.status = "loading";
    },
    loginUser(state, payload) {
        state.user = payload;
        state.status = "success";
        state.token = payload.token;
        state.error = null,
        state.loggedIn = true
    },
    loginError(state, err) {
        state.error = err
    },
    register_request(state) {
        state.error = null
        state.status = 'loading'
    },
    registerUser(state, payload) {
        state.user = payload;
        state.error = null
        state.status = 'success'
        state.loggedIn = true
    },
    logout_user(state) {
        state.error = null
        state.status = ''
        state.token = ''
        state.user = ''
        state.loggedIn = false

    }
}