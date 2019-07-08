<template>
    <transition
        :duration="500"
        enter-active-class="animated zoomInRight"
        leave-active-class="animated zoomOutLeft"
    >
    <el-container>
        <el-header height="100px">
             <div class="header-seacher">
                <img src="../assets/img/result-logo.png" @click="trunToSearch">
                <autocomplete-seacher :search="search"></autocomplete-seacher>
            </div>
        </el-header>
        <el-container class="content" :style="{'minHeight':minHeight+'px'}">
            <el-main>
                <transition
                    :duration="500"
                    enter-active-class="animated zoomIn"
                    leave-active-class="animated zoomOut"
                >
                    <result-cards></result-cards>
                </transition>
            </el-main>
        </el-container>
    </el-container>
    </transition>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";
import autocompleteSeacher from '../components/autocomplete-seacher/index2.vue';
import resultCards from '../components/cards/index';
import secretSearch from '../components/secret-search/index';
import relateSearch from '../components/related-search/index';

export default {
    data() {
        return {
            minHeight: '',
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
    mounted() {
        this.minHeight = window.screen.availHeight - 222;
    },
    methods:{
        search() {
            if(this.keyword.trim()){
                this.$router.push({ 
                    path: "/result", 
                    query: {
                        keyword: encodeURIComponent(this.keyword)
                    }
                });
            } else {
                this.$router.push({ 
                    path: "/seacher" 
                });
            }
            
        },
        trunToSearch() {
            this.$router.push({ path: "/seacher"});
        }
    },
    watch:{
        $route: {
            handler(to, from) {
                let keyword = decodeURIComponent(this.$route.query.keyword);
                if(keyword.trim()){
                    this.$store.dispatch('INSERT_KEYWORD', keyword);
                    this.$store.dispatch('INSERT_RESULT', keyword);
                }
            },
            immediate: true
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
    margin-top: 150px;
    background: linear-gradient(#ACCBFF, #F8FAFB);
    .el-main{
        padding: 0;
        margin-top: -40px;
    }
    .content-right{
        padding: 0 20px;
        border-left: 1px solid #dddddd;
    }
}
</style>

