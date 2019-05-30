<template>
    <el-container>
        <el-header class="header">
             <div class="header-seacher">
                 <div class="seacher-log">
                    <i class="iconfont iconjingwuicon_svg-"></i>
                    <span>警务云搜</span>
                 </div>
                <autocomplete-seacher :search="search"></autocomplete-seacher>
            </div>
        </el-header>
        <el-container class="content">
            <el-container>
                <el-main>
                    <el-row :gutter="20">
                        <el-col :span="24">
                            <result-cards></result-cards>
                        </el-col>
                    </el-row>
                </el-main>
                <el-footer>
                    <relate-search :relate="relate"></relate-search>
                </el-footer>
            </el-container>
             <el-aside style="padding: 20px;">
                <div class="content-right">
                    <secret-search :confidential="confidential"></secret-search>
                    <secret-search :confidential="secretest"></secret-search>
                </div>
            </el-aside>
        </el-container>
    </el-container>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";
import autocompleteSeacher from '../components/autocomplete-seacher/index';
import resultCards from '../components/cards/index';
import secretSearch from '../components/secret-search/index';
import relateSearch from '../components/related-search/index';

export default {
    data() {
        return {
            confidential: {
                name: '高敏信息',
                info: [
                    {
                        title: '涉事案情详情'
                    },
                    {
                        title: '人员信息详情'
                    },
                    {
                        title: '王源吸烟照曝光'
                    },
                    {
                        title: '2019胡润慈善榜'
                    },
                    {
                        title: '华为概念股涨停'
                    },
                    {
                        title: '男子徒手爬埃菲尔'
                    }
                ]
            },
            secretest: {
                name: '绝密信息',
                info: [
                    {
                        title: '涉事案情详情'
                    },
                    {
                        title: '人员信息详情'
                    },
                    {
                        title: '王源吸烟照曝光'
                    },
                    {
                        title: '2019胡润慈善榜'
                    },
                    {
                        title: '华为概念股涨停'
                    },
                    {
                        title: '男子徒手爬埃菲尔'
                    }
                ]
            },
            relate: {
                name: '相关搜索',
                info: [
                    {
                        title: '涉事案情详情'
                    },
                    {
                        title: '人员信息详情'
                    },
                    {
                        title: '王源吸烟照曝光'
                    },
                    {
                        title: '2019胡润慈善榜'
                    },
                    {
                        title: '华为概念股涨停'
                    },
                    {
                        title: '男子徒手爬埃菲尔'
                    },
                    {
                        title: '王源吸烟照曝光'
                    },
                    {
                        title: '2019胡润慈善榜'
                    }
                ]
            }
        };
    },
    computed: {
        ...mapGetters(['keyword'])
    },
    components: {
        autocompleteSeacher,
        resultCards,
        secretSearch,
        relateSearch
    },
    created() {
        this.search();
    },
    methods:{
        search() {
            var keyword = this.keyword || window.sessionStorage.getItem('keyword');
            this.$store.dispatch('INSERT_RESULT', keyword);
        }
    },
    watch:{
        $route(){
            this.$store.dispatch('INSERT_KEYWORD', this.$route.query.keyword);
            this.search();
        }
    }
}
</script>

<style lang="scss" scoped>
// @import "../assets/css/them.scss";
.header{
    width: 100%;
    position: fixed;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dddddd;
    background-color: #ffffff;
    z-index: 1000;
    .header-seacher{
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        .seacher-log{
            min-width: 7.5em;
            text-align: left;
            i, span{
                font-size: 1.3em;
                color: #888888;
            }
        }
        .seacher-input{
            min-width: 35em;
        }
    }
    .userinfo {
      text-align: right;
      .userinfo-inner{
          text-decoration: underline;
      }
    }
}
.content{
    margin-top: 60px;
    .content-right{
        padding: 0 20px;
        border-left: 1px solid #dddddd;
    }
}
</style>