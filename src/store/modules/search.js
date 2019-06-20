import actions from '../actions';
import mutations from '../mutations';

const state = {
    keyword: window.sessionStorage.getItem('keyword') || '',
    result: JSON.parse(window.sessionStorage.getItem('result')) || {}
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