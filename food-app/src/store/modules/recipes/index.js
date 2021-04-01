import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default{
    namespaced: true,
    state(){
        return {
            ingredients: [{name: 'tomato', image: 'tomato.jpg'}],
            ingredientsSelected: [{name: 'tomato', image: 'tomato.jpg'}],
            input:'',
        }
    }, 
    getters,
    mutations, 
    actions, 
}