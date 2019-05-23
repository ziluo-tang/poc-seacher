import * as types from './mutations_type'
export const mutations = {
    [types.INSERT_KEYWORD] (state, keyword){
        state.keyword = keyword;
    }
}