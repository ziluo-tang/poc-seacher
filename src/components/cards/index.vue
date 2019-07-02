<template>
    <div class="result-card">
        <el-tabs v-if="tabShow" v-model="activeName" @tab-click="handleTabClick">
            <el-tab-pane  v-for="(value, name) in result" :key="name" :label="value.label" :name="name">
                <transition
                    :duration="500"
                    enter-active-class="animated bounceInRight"
                    leave-active-class="animated bounceOutLeft"
                >
                    <keep-alive>
                        <component v-bind:is="curComponent"></component>
                    </keep-alive>
                </transition>
            </el-tab-pane>
        </el-tabs>
        <div class="search-none" v-if="isEmpty">额...搜索结果走丢了！！！</div>
    </div>
</template>
<script>
import {allcards, mapping} from '../../config/mapping';
export default {
    data(){
        return {
            loading: null,
            tabShow: false,
            isEmpty: false,
            activeTab: '',
            activeComponent: ''
        };
    },
    created() {
        this.openLoading();
    },
    mounted() {
        this.closeLoading();
    },
    beforeUpdate() {
        this.openLoading();
    },
    updated() {
        this.closeLoading();
    },
    computed: {
        result(){
            let { result } = this.$store.state.search;
            let cards = new Object();
            for(let card in result){
                cards[card] = mapping[card];
            }
            return cards;
        },
        activeName: {
            get(){
                return this.activeTab;
            },
            set(val){
                this.activeTab = val;
            }
        },
        curComponent() {
            return this.activeComponent;
        }
    },
    components: allcards,
    methods:{
        openLoading() {
            this.loading = this.$loading({
                lock: true,
                text: '玩命加载中...',
                spinner: 'el-icon-loading',
                background: '#ffffff'
            });
        },
        closeLoading() {
            this.loading.close();
        },
        handleTabClick(tab, event){
            this.activeComponent = this.result[tab.name].component;
        }
    },
    watch: {
        result: function(value) {
            let cards = Object.keys(value);
            if(cards.length){
                this.isEmpty = false;
                this.tabShow = true;
                this.activeTab = value[cards[0]].name;
                this.activeComponent = value[cards[0]].component;
            }else{
                this.isEmpty = true;
                this.tabShow = false;
                this.activeTab = '';
                this.activeComponent = '';
            }
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
        padding: 15px 125px;
    }
    .result-card .search-none{
        margin: 0 auto;
        width: 500px;
        height: 500px; 
        line-height: 500px;
        font-size: 30px;
        color: #aaaaaa;
        text-align: center;
        letter-spacing: 5px;
    }
</style>
