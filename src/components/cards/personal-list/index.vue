<template>
    <div>
        <el-card shadow="hover" v-if="result.data.description">
            <p class="description">{{result.data.description}}</p>
        </el-card>
        <el-card shadow="hover" v-if="result.data.list.length>0">
            <div class="personal-item" v-for="person in result.data.list" :key="person.id">
                <div class="base-info">
                    <div class="tag"></div>
                    <div class="person-header">
                        <img :src="header" alt="头像" class="header-image">
                        <!-- <el-image :src="header">
                            <div slot="placeholder" class="image-slot">
                                加载中<span class="dot">...</span>
                            </div>
                        </el-image> -->
                    </div>
                    <div class="person-info">
                        <p>
                            <a href="javascript:void(0);" @click="checkPersonal(person.gmsfhm)">{{person.xm}}</a>
                            <i v-if="person.sfqkry==1" class="iconfont iconqiansvg status-tag"></i>
                            <i v-if="person.sfztry==1" class="iconfont icontaosvg status-tag"></i>
                            <i v-if="person.sfskry==1" class="iconfont iconkongsvg status-tag"></i>
                            <i v-if="person.sfswry==1" class="iconfont iconwensvg status-tag"></i>
                            <i v-if="person.sfzdsfry==1" class="iconfont iconfangsvg status-tag"></i>
                            <i v-if="person.sfsdry==1" class="iconfont icondusvg status-tag"></i>
                        </p>
                        <p>
                            <label v-show="person.xb">性别：{{person.xb}}</label>
                            <label v-show="person.zy">职业：{{person.zy}}</label>
                            <label v-show="person.csrq">生日：{{person.csrq | formatDate}}</label>
                            <label v-show="person.gmsfhm">身份证：{{person.gmsfhm}}</label>
                            <label v-show="person.jzd">住址：{{person.jzd}}</label>
                        </p>
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
    </div>
</template>

<script>
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
            this.$router.push({ path: "/result", query: {keyword: encodeURIComponent(val)}});
        },
        sendPageChange(val){
            this.$store.dispatch('PAGE_CHANGE', {
                page: val, 
                size: this.pageSize, 
                strategy: this.result.strategy
            });
            document.getElementsByClassName('el-container')[1].scrollTop = 0;
        }
    },
    filters: {
        formatDate(val) {
            if(!val){
                return '';
            }
            let year = val.substring(0, 4);
            let month = val.substring(4, 6);
            let date = val.substring(6);
            return `${year} / ${month} / ${date}`;
        }
    }
}
</script>
<style lang="scss" scoped>
    .el-card{
        &:not(:last-child){
            margin-bottom: 10px;
        }
        .description{
            text-align: center;
            font-size: 24px;
            color: #888888;
            height: 50px;
            line-height: 50px;
            letter-spacing: 2px;
        }
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
                .tag{
                    width: 3px;
                    height: 100px;
                    background-color: #409EFF;
                    margin-right: 15px;
                    border-radius: 5px;
                }
                .person-header{
                    margin-right: 1.5em;
                    .header-image{
                        width: 7.5em;
                        height: 100%;
                        border: 1px solid #ACCBFF;
                        border-radius: 4px;
                        margin-bottom: -4px;
                    }
                }
                .person-info{
                    width: 100%;
                    p{
                        width: 100%;
                        margin: 0;
                        padding: 0.15em;
                        font-size: small;
                        color: #555;
                        &:first-child{
                            font-size: 16px;
                        }
                        label{
                            display: block;
                            width: 100%;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow:hidden;
                            margin: 0.1em 0;
                        }
                        .status-tag{
                            float: right;
                            margin: 0 0.1em;
                        }
                    }
                }
            }
        }
    }
</style>