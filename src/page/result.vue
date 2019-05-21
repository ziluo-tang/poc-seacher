<template>
    <el-container>
        <el-header class="header">
             <div class="header-seacher">
                 <div class="seacher-log">
                    <i class="iconfont iconjingwuicon_svg-"></i>
                    <span>警务云搜</span>
                 </div>
                <autocompleteSeacher :search="search" :keyword="keyword" @valChange="keywordChange"></autocompleteSeacher>
            </div>
            <!-- <div class="userinfo">
                <el-dropdown trigger="hover">
                    <span class="el-dropdown-link userinfo-inner">{{sysUserName}}</span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div> -->
        </el-header>
        <el-main class="content">
            <el-row :gutter="20">
                <el-col :span="16">
                    <person-group :persons="persons"></person-group>
                </el-col>
                <el-col :span="8" class="content-right">
                    <secret :confidential="confidential"></secret>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import autocompleteSeacher from '../components/autocomplete-seacher/index.vue';
import personGroup from '../components/cards/person/personGroup.vue';
import secret from '../components/cards/secret/secretest';
export default {
    data() {
        return {
            keyword: this.$route.query.keyword,
            sysUserName: 'admin',
            persons: [
                {
                    header: require(`../assets/img/u65.png`),
                    name: '张爱丽',
                    IDcard: '341003198607012524',
                    type: '欺诈在逃',
                    address: '浙江省杭州市西湖区西溪云庐1栋1201'
                },
                {
                    header: require(`../assets/img/u70.png`),
                    name: '王一凡',
                    IDcard: '341013198712011102',
                    type: '常驻人口',
                    address: '浙江省杭州市滨江区浦沿路口江南文苑15栋2单元1901'
                },
                {
                    header: require(`../assets/img/u65.png`),
                    name: '张爱丽',
                    IDcard: '341003198607012524',
                    type: '欺诈在逃',
                    address: '浙江省杭州市西湖区西溪云庐1栋1201'
                },
                {
                    header: require(`../assets/img/u70.png`),
                    name: '王一凡',
                    IDcard: '341013198712011102',
                    type: '常驻人口',
                    address: '浙江省杭州市滨江区浦沿路口江南文苑15栋2单元1901'
                }
            ],
            confidential: {
                name: '高敏信息',
                info: []
            }
        };
    },
    created(){
        this.search();
    },
    components: {
        autocompleteSeacher,
        personGroup,
        secret
    },
    computed: {
        ...mapGetters(["username", "password", "treeData"])
    },
    mounted() {
        var user = sessionStorage.getItem("user");
        if (user) {
            user = JSON.parse(user);
            this.sysUserName = user.userName || "";
        }
    },
    methods:{
        keywordChange(value){
            this.keyword = value;
        },
        search() {
            // let url = `/telematics/v3/weather?location=杭州&output=json&ak=H7W5CxI0BPzKtwGcBHmpGPAz50xP1Qjw`;
            // this.axios.get(url).then((response) => {
            //     console.log(response.data);
            // });
        },
        logout(){
            var _this = this;
            this.$confirm("确认退出吗?", "提示", {
            })
            .then(() => {
                sessionStorage.removeItem("user");
                _this.$router.push("/login");
            })
            .catch(() => {});
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
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
        .el-col{
            margin-bottom: 8px;
        }
        .el-col-12:nth-child(2n+1){
            padding: 0 !important;
        }
         .el-col-12:nth-child(2n){
            padding-right: 0 !important;
        }
    }
    .content-right{
        border-left: 1px solid #dddddd;
    }
}
</style>