import * as types from './mutations_type';
import { cloudQuery, detailsQuery, pageQuery } from '../api/axios.js';
let ElementUi = require('element-ui');
export default {
    [types.INSERT_KEYWORD]({commit}, keyword) {
        commit(types.INSERT_KEYWORD, keyword);
    },
    [types.INSERT_RESULT]({commit}, keyword){
        cloudQuery({queryDetail: keyword}).then((response) => {
            if(response.status==0){
                let resultObiect = new Object();
                response.data.forEach(element => {
                    resultObiect[element.strategy.displayCard] = element;
                });
                commit(types.INSERT_RESULT, resultObiect);
            }else{
                ElementUi.Message({message: response.statusInfo, type: 'warning' });
            }
        });
    },
    [types.REMOVE_RESULT] ({commit}){
        commit(types.REMOVE_RESULT);
    },
    [types.DETAILS_QUERY]({commit}, params){
        detailsQuery(params).then((response) => {
            if(response.status==0){
                let resultObiect = new Object();
                resultObiect[response.data.strategy.displayCard] = response.data;
                commit(types.DETAILS_QUERY, resultObiect);
            }else{
                ElementUi.Message({message: response.statusInfo, type: 'warning' });
            }
        });
    },
    [types.PAGE_CHANGE]({commit, state}, param){
        pageQuery(`page=${param.page}&size=${param.size}`, {strategy: param.strategy}).then((response) => {
            if(response.status==-0){
                let newResult = Object.assign({}, state.result, {personalList: response.data});
                commit(types.PAGE_CHANGE, newResult);
            }else{
                ElementUi.Message({message: response.statusInfo, type: 'warning' });
            }
        });
    }
}