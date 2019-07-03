<template>
    <div class="seacher-input">
        <el-select
            v-model="keyword"
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词"
            :suffix-icon="icon"
            :remote-method="remoteMethod"
            :loading="loading"
            @change="handleSelect"
            @keyup.enter.native="search"
        >
            <el-option-group
                v-for="(group, index) in searchDA"
                :key="index"
                :label="group.label">
                <el-option
                    v-for="(item, index) in group.options"
                    :key="index"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-option-group>
        </el-select>
        <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
    </div>
</template>
<script>
import { autoPrompt } from '../../api/axios';
export default {
    props: ['search'],
    data(){
        return {
            searchDA: [],
            loading: false,
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
        remoteMethod(query) {
            this.searchDA = [];
            this.keyword = query;
            if (query !== '') {
                this.loading = true;
                this.loadAll(query).then(res => {
                    if(res.errCode===0){
                        this.loading = false;
                        let applications = new Array(), results = new Array();
                        this.$emit('initPrompt', res.data);
                        res.data.forEach((element, index) => {
                            if(element._source.type===0){
                                results.push({
                                    value: JSON.stringify({
                                        label: element._source.name,
                                        type: element._source.type
                                    }),
                                    label: element._source.name
                                });
                            }else if(element._source.type===1){
                                applications.push({
                                    value: JSON.stringify({
                                        label: element._source.name,
                                        address: element._source.address,
                                        type: element._source.type
                                    }),
                                    label: element._source.name
                                });
                                
                            }
                        });
                        if(applications.length){
                            this.searchDA.push({
                                label: '应用',
                                options: applications
                            });
                        }
                        if(results.length){
                            this.searchDA.push({
                                label: '提示',
                                options: results
                            });
                        }
                    }else{
                        this.$message({message: res.errMsg, type: 'warning' });
                    }
                });
            }
        },
        loadAll(query) {
            let params = {
                from:0,
                size:10,
                data:{
                    attr:{
                        name: query
                    }
                }
            };
            return autoPrompt(params);
        },
        handleSelect(value) {
            let itemValue = JSON.parse(value);
            this.keyword = itemValue.label;
            if(itemValue.type===0){
                this.$props.search();   //搜索
            }else if(itemValue.type===1){
                window.open(itemValue.address);   //应用即达
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
    .el-select{
        width: 100%;
        .el-select-group__wrap li{
            &:nth-child(2){
                padding: 0 20px;
            }
        }
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
    .seacher-input .el-select-group{
        padding: 0 20px;
    }
    .el-input__suffix .el-icon-camera-solid{
        font-size: 20px;
    }
    .el-input__suffix .el-icon-camera-solid:hover{
        color: #409EFF;
    }
</style>
