<template>
    <div class="result-card">
        <el-tabs v-if="Object.keys(result).length" v-model="activeName" @tab-click="handleTabClick">
            <el-tab-pane  v-for="(value, name) in result" :key="name" :label="value.label" :name="name">
                <keep-alive>
                    <component v-bind:is="curComponent" :lazy="true"></component>
                </keep-alive>
            </el-tab-pane>
        </el-tabs>
        <p class="search-none" v-if="!Object.keys(result).length">无搜索结果</p>
    </div>
</template>
<script>
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
            let { result } = this.$store.state.search;
            console.log('result', result);
            let cards = new Object();
            for(let card in result){
                cards[card] = mapping[card];
            }
            return cards;
        },
        activeName: {
            get(){
                let first = Object.keys(this.result)[0];
                if(first){
                    return this.activeTab || this.result[first].name;
                }else{
                    return this.activeTab;
                }
            },
            set(val){
                this.activeTab = val;
            }
        },
        curComponent() {
            let first = Object.keys(this.result)[0];
            return this.activeComponent || this.result[first].component;
        }
    },
    components: allcards,
    methods:{
        handleTabClick(tab, event){
            let first = Object.keys(result)[0];
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
        padding: 15px 125px;
        background: linear-gradient(#ACCBFF, #F8FAFB);
    }
    .result-card .search-none{
        margin: 0 auto;
        width: 300px;
        height: 500px; 
        line-height: 500px;
        font-size: 30px;
        color: #aaaaaa;
        text-align: center;
        letter-spacing: 5px;
    }
</style>