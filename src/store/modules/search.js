import actions from '../actions';
import mutations from '../mutations';

const state = {
    keyword: ''
};

const getters = {
    keyword: state => state.keyword
};

export default {
    state,
    getters,
    mutations,
    actions
}