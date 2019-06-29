<template>
    <el-card shadow="hover">
        <div class="personal-item" v-for="person in result.data.list" :key="person.id" @click="checkPersonal(person.gmsfhm)">
            <div class="base-info">
                <div class="tag"></div>
                <div class="person-header">
                    <el-image :src="header">
                        <div slot="placeholder" class="image-slot">
                            加载中<span class="dot">...</span>
                        </div>
                    </el-image>
                </div>
                <div>
                    <p>{{person.xm}}</p>
                    <p v-if="person.xb || person.csrq">
                        <label>性别：{{person.xb}}</label>
                        <label>出生日期：{{person.csrq}}</label>
                    </p>
                    <p v-if="person.gmsfhm">身份证：{{person.gmsfhm}}</p>
                    <p v-if="person.jzd">现住址：{{person.jzd}}</p>
                </div>
            </div>
        </div>
        <cpagination 
            :prev="result.data.previous" 
            :pageNum="result.data.pageNum" 
            :next="result.data.next"
            @sendPrevPage="sendPageChange" 
            @sendCurrentPage="sendPageChange" 
            @sendNextPage="sendPageChange">
        </cpagination>
    </el-card>
</template>

<script>
import pagination from '../../common/pagination';
import cpagination from '../../common/cpagination';
export default {
    name: 'personalList',
    data(){
        return {
            pageSize: 5,
            header: require('../../../assets/img/u70.png')
        };
    },
    components: {
        pagination,
        cpagination
    },
    computed: {
        result(){
            let {personalList} = this.$store.state.search.result;
            this.pageSize = personalList.data.pageSize;
            return personalList;
        }
    },
    methods: {
        checkPersonal(val){
            this.$store.dispatch('INSERT_RESULT', val);
        },
        sendPageChange(val){
            this.$store.dispatch('PAGE_CHANGE', {
                page: val, 
                size: this.pageSize, 
                strategy: this.result.strategy
            });
        }
    }
}
</script>
<style lang="scss" scoped>
    .sort-tag{
        font-size: 1.1em;
        color: #888888;
        margin-bottom: 5px;
    }
    .personal-item{
        margin: 15px;
        cursor: pointer;
        transition: transform 0.3s;
        &:hover{
            transform: scale(1.008);
        }
        .base-info{
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            padding: 0 1em;
            // border-left: 2px solid #409EFF;
            .tag{
                width: 3px;
                height: 80px;
                background-color: #409EFF;
                margin-right: 10px;
                border-radius: 3px;
            }
            .person-header{
                margin-right: 1em;
                .el-image{
                    width: 5em;
                    height: 100%;
                    border: 1px solid #ACCBFF;
                    border-radius: 4px;
                    margin-bottom: -4px;
                }
            }
            p{
                width: 100%;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow:hidden;
                margin: 0;
                padding: 0.15em;
                font-size: small;
                color: #555;
                &:first-child{
                    font-size: 18px;
                    font-weight: 600;
                }
                label:not(:first-child){
                    margin-left: 1em;
                }
            }
        }
    }
</style>