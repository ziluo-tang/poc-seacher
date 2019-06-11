<template>
    <div class="seacher-input">
        <el-autocomplete 
            class="custom-input"
            v-model="keyword" 
            placeholder="输入关键词"
            :fetch-suggestions="querySearch"
            :suffix-icon="icon"
            :trigger-on-focus="false"
            :highlight-first-item="true"
            @select="handleSelect"
            @keyup.enter.native="search">
            <template slot-scope="props">
                <div class="name">{{ props.item.label }}</div>
            </template>
        </el-autocomplete>
        <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
    </div>
</template>
<script>
import {autoPrompt} from '../../api/axios';
export default {
    props: ['search'],
    data(){
        return {
            icon: 'el-icon-camera-solid'
        };
    },
    computed:{
        keyword: {
            get(){
                return this.$store.state.search.keyword;
            },
            set(val){
                this.$store.dispatch('INSERT_KEYWORD', val);
            }
        }
    },
    methods: {
        querySearch(queryString, cb) {
            this.loadAll().then(res => {
                if(res.errCode===0){
                    let restaurants = res.data, results = new Array();
                    this.$emit('initPrompt', restaurants);
                    restaurants.forEach((element, index) => {
                        results.push({
                            label: element._source.name,
                            address: element._source.address,
                            args: element._source.args,
                            type: element._source.type
                        });
                        // 调用 callback 返回建议列表的数据
                        cb(results);
                    });
                }else{
                    this.$message({message: res.errMsg, type: 'warning' });
                }
            });
        },
        loadAll() {
            let params = {
                from:0,
                size:10,
                data:{
                    attr:{
                        name:this.keyword
                    }
                }
            };
            return autoPrompt(params);
        },
        handleSelect(item) {
            this.keyword = item.label;
            if(item.type===1){
                //应用即达
                window.open(item.address);
            }
            
        }
    },
    watch: {
        keyword(val){
            if(!val){
                this.$emit('initPrompt', null);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.seacher-input{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    .el-autocomplete{
        width: 100%;
    }
    button{
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
}
</style>
<style>
    .seacher-input .el-input__inner {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: none;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }
    .el-input__suffix .el-icon-camera-solid{
        font-size: 20px;
    }
    .el-input__suffix .el-icon-camera-solid:hover{
        color: #409EFF;
    }
</style>
