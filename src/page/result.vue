<template>
    <el-container>
        <el-header height="100px">
             <div class="header-seacher">
                <img src="../assets/img/result-logo.png">
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
        return {
            logo: require('../assets/img/result-logo.png')
        };
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
.el-header{
    width: 100%;
    position: fixed;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 125px;
    background-color: #ffffff;
    z-index: 1000;
    .header-seacher{
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        img{
            width: 165px;
            margin-right: 10px;
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
    margin-top: 100px;
    .el-main{
        padding: 0;
    }
    .content-right{
        padding: 0 20px;
        border-left: 1px solid #dddddd;
    }
}
</style>
