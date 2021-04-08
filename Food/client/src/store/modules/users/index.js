import getters from './getters';
import mutations from './mutations';
import actions from './actions';


export default {
    namespaced: true,
    state() {
        return {
            token: localStorage.getItem('token') || '',
            user: {},
            status: '', 
            error: null,
            loggedIn: false
        }
    },
    getters,
    mutations,
    actions,
}