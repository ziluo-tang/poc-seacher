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
            <el-main>
                <result-cards></result-cards>
            </el-main>
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
        return {};
    },
    computed: {
        ...mapGetters(['keyword'])
    },
    components: {
        autocompleteSeacher,
        resultCards
    },
    created() {
        this.search();
    },
    methods:{
        search() {
            this.$store.dispatch('INSERT_RESULT', this.keyword);
        }
    },
    watch:{
        $route(to, from){
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
    // border-bottom: 1px solid #dddddd;
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
    .el-main{
        padding: 20px 0;
    }
    .content-right{
        padding: 0 20px;
        border-left: 1px solid #dddddd;
    }
}
</style>