import * as types from './mutations_type'
export default {
    [types.INSERT_KEYWORD] (state, keyword){
        state.keyword = keyword;
    }
}