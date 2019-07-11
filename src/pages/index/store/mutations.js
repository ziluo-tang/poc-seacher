import * as types from './mutations_type'
export default {
    [types.INSERT_KEYWORD] (state, keyword){
        window.sessionStorage.setItem('keyword', keyword);
        state.keyword = keyword;
    },
    [types.INSERT_RESULT] (state, result){
        window.sessionStorage.setItem('result', JSON.stringify(result));
        state.result = result;
    },
    [types.REMOVE_RESULT] (state){
        window.sessionStorage.removeItem('result');
        state.result = {};
    },
    [types.PAGE_CHANGE] (state, newResult){
        state.result = newResult;
    },
    [types.DETAILS_QUERY] (state, result) {
        window.sessionStorage.setItem('result', JSON.stringify(result));
        state.result = result;
    }
}