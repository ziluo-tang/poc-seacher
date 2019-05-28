import * as types from './mutations_type';
import { cloudQuery } from '../api/axios.js';
export default {
    [types.INSERT_KEYWORD]({commit}, keyword) {
        commit(types.INSERT_KEYWORD, keyword);
    },
    [types.INSERT_RESULT]({commit}, keyword){
        cloudQuery({queryDetail: keyword}).then((response) => {
            if(response.resultCode==0){
                commit(types.INSERT_RESULT, response.data);
            }else{
                this.$message({message: response.resultMsg, type: 'warning' });
            }
        });
    }
}