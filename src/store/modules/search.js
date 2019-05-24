import actions from '../actions';
import mutations from '../mutations';

const state = {
    keyword: '',
    result: null
};

const getters = {
    keyword: state => state.keyword,
    result: state => state.result
};

export default {
    state,
    getters,
    mutations,
    actions
}