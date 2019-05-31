<template>
    <el-tabs v-model="activeName" type="card" @tab-click="handleTabClick">
        <el-tab-pane  v-for="item in result" :key="item.name" :label="item.label" :name="item.name">
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
            let result = [
                {
                    label: '人员',
                    name: 'personal'
                },
                {
                    label: '关系',
                    name: 'relation'
                },
                {
                    label: '轨迹',
                    name: 'locus'
                },
                {
                    label: '履历',
                    name: 'experience'
                }
            ];
            return result;
        },
        activeName: {
            get(){
                return this.activeTab || this.result[0].name;
            },
            set(val){
                this.activeTab = val;
            }
        },
        curComponent: {
            get(){
                return this.activeComponent || mapping[this.result[0].name];
            }
        },
        // ...mapGetters(['result'])
    },
    components: allcards,
    methods:{
        handleTabClick(tab, event){
            this.activeComponent = mapping[tab.name] || mapping[1];
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