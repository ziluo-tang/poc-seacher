<template>
    <div class="result-card">
        <el-tabs v-model="activeName" @tab-click="handleTabClick">
            <el-tab-pane  v-for="(value, name) in result" :key="name" :label="value.label" :name="name">
                <keep-alive>
                    <component v-bind:is="curComponent"></component>
                </keep-alive>
            </el-tab-pane>
        </el-tabs>
    </div>
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
                'personalDesc': {
                    label: '人员信息',
                    name: 'personalDesc'
                },
                'relation': {
                    label: '关系',
                    name: 'relation'
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
                let first = Object.keys(mapping)[0];
                return this.activeTab || this.result[first].name;
            },
            set(val){
                this.activeTab = val;
            }
        },
        curComponent: {
            get(){
                let first = Object.keys(mapping)[0];
                return this.activeComponent || this.result[first].component;
            }
        },
        // ...mapGetters(['result'])
    },
    components: allcards,
    methods:{
        handleTabClick(tab, event){
            let first = Object.keys(mapping)[0];
            this.activeComponent = this.result[tab.name].component || this.result[first].component;
        }
    }
}
</script>
<style>
    .result-card .el-card{
        border: none;
    }
    .result-card > .el-tabs > .el-tabs__header{
        margin: 0;    
    }
    .result-card > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap{
        padding: 0 125px;
    }
    .result-card > .el-tabs > .el-tabs__header > .el-tabs__nav-wrap::after{
        background: none;
    }
    .result-card > .el-tabs > .el-tabs__content{
        min-height: 500px;
        padding: 15px 125px 0 125px;
        background: linear-gradient(#ACCBFF, #F8FAFB);
    }
</style>