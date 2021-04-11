import getters from './getters';
import mutations from './mutations';
import actions from './actions';


export default {
    namespaced: true,
    state() {
        return {
            status: '',
            token: localStorage.getItem('token') || '',
            user: {},
            recipes: []
        }
    },
    getters,
    mutations,
    actions,
}