import axios from 'axios';
import router from '../../../router/index';

export default {

    async login(context, payload) {
        context.commit('login_request')
        let res = await axios.post('http://localhost:5000/api/users/login', payload);
        let user = {}
        if (res.data.success) {
            const token = res.data.token;
            user = res.data.user;
            user.token = token;
            // Store the token into LocalStorage
            localStorage.setItem('token', token);
            // Set the axios defaults
            axios.defaults.headers.common['Authorization'] = token;
            router.push("/")
            context.commit('loginUser', user);
        }

    },
    async register(context, payload) {
        context.commit('register_request')
        let res = await axios.post('http://localhost:5000/api/users/register', payload);
        // let user = {}

        if (res.data.success) {
            console.log('res', res)
            // const token = res.data.token;
            // user = res.data.user;
            // user.token = token;
            // localStorage.setItem('token', token);
            // axios.defaults.headers.common['Authorization'] = token;
            context.commit('registerUser', payload);
            router.push("/")

        }
    }, 
    async logout(context) {
        await localStorage.removeItem('token');
        context.commit('logout_user');
        delete axios.defaults.headers.common['Authorization'];
        router.push('/');
        return
    }
}