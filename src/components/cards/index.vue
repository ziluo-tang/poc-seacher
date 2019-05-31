<template>
    <el-tabs v-model="activeName" type="card" @tab-click="handleTabClick">
        <el-tab-pane  v-for="(value, name) in result" :key="name" :label="value.label" :name="name">
            <keep-alive>
                <component v-bind:is="curComponent"></component>
            </keep-alive>
        </el-tab-pane>
    </el-tabs>
</template>


<script>
import { mapGetters } from "vuex";
import {allcards, mapping} from '../../config/mapping';
export default {
    data(){
        return {
            activeTab: '',
            activeComponent: ''
        };
    },
    computed: {
        result(){
            // let {result} = this.$store.state.search;
            let result = {
                'personal': {
                    label: '人员',
                    name: 'personal'
                },
                'relation': {
                    label: '关系',
                    name: 'relation'
                },
                'vehicle': {
                    label: '车辆',
                    name: 'vehicle'
                }
            };
            let cards = new Object();
            for(let card in result){
                cards[card] = mapping[card];
            }
            return cards;
        },
        activeName: {
            get(){
                return this.activeTab || this.result[Object.keys(mapping)[0]].name;
            },
            set(val){
                this.activeTab = val;
            }
        },
        curComponent: {
            get(){
                return this.activeComponent || this.result[Object.keys(mapping)[0]].component;
            }
        },
        // ...mapGetters(['result'])
    },
    components: allcards,
    methods:{
        handleTabClick(tab, event){
            this.activeComponent = this.result[tab.name].component || this.result[Object.keys(mapping)[0]].component;
        }
    }
    // render: function(createElement){
    //     // return createElement('div', Object.keys(this.result).map(function(item) {
    //     //         return createElement(mapping[item]);
    //     //     })
    //     // );
    //     // return createElement('el-tabs', Object.keys(this.result).map(function(item) {
    //     //         return createElement('el-tab-pane');
    //     //     }),
    //     //     {
    //     //         type: 'card'
    //     //     }
    //     // );
    //     return createElement('div', [
    //         createElement(allcards.resultPersonal),
    //         createElement(allcards.resultRelation)
    //     ],{
    //         class: 'result-cards'
    //     });
    // }
}
</script>
<style lang="scss" scoped>
    .result-cards{
        margin: 0 -5px 0 10px;
        .el-card{
            margin-bottom: 15px;
        }
    }
</style>