import * as types from './mutations_type'
import { type } from 'os';
export default {
    [types.INSERT_KEYWORD] (state, keyword){
        window.sessionStorage.setItem('keyword', keyword);
        state.keyword = keyword;
    },
    [types.INSERT_RESULT] (state, result){
        state.result = result;
    },
    [types.PAGE_CHANGE] (state, newState){
        state = newState;
    }
}