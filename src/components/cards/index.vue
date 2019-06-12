<template>
    <el-tabs v-model="activeName" @tab-click="handleTabClick">
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
                'personalDesc': {
                    label: '人员信息',
                    name: 'personalDesc'
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
<style lang="scss" scoped>
    .result-cards{
        margin: 0 -5px 0 10px;
        .el-card{
            margin-bottom: 15px;
        }
    }
</style>