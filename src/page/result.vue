<template>
    <el-container>
        <el-header class="header">
             <div class="header-seacher">
                 <div class="seacher-log">
                    <i class="iconfont iconjingwuicon_svg-"></i>
                    <span>警务云搜</span>
                 </div>
                <autocomplete-seacher :search="search" :keyword="keyword" @valChange="keywordChange"></autocomplete-seacher>
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
        <el-container class="content">
            <el-container>
                <el-main>
                    <el-row :gutter="20">
                        <result-person :persons="persons" :relation="1"></result-person>
                    </el-row>
                </el-main>
                <el-footer>
                    <relate-search :relate="relate"></relate-search>
                </el-footer>
            </el-container>
             <el-aside style="padding: 20px;">
                <div class="content-right">
                    <secret :confidential="confidential"></secret>
                    <secret :confidential="secretest"></secret>
                </div>
            </el-aside>
        </el-container>
    </el-container>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import card from '../components/cards/index';
import autocompleteSeacher from '../components/autocomplete-seacher/index.vue';
import resultPerson from '../components/cards/person/person-group';
import secret from '../components/secret/index';
import relateSearch from '../components/related-search/index';
import { getWeather } from '../api/axios.js';
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
                // {
                //     header: require(`../assets/img/u70.png`),
                //     name: '王一凡',
                //     IDcard: '341013198712011102',
                //     type: '常驻人口',
                //     address: '浙江省杭州市滨江区浦沿路口江南文苑15栋2单元1901'
                // },
                {
                    header: require(`../assets/img/u65.png`),
                    name: '张爱丽',
                    IDcard: '341003198607012524',
                    type: '欺诈在逃',
                    address: '浙江省杭州市西湖区西溪云庐1栋1201'
                },
                // {
                //     header: require(`../assets/img/u70.png`),
                //     name: '王一凡',
                //     IDcard: '341013198712011102',
                //     type: '常驻人口',
                //     address: '浙江省杭州市滨江区浦沿路口江南文苑15栋2单元1901'
                // }
            ],
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
    components: {
        autocompleteSeacher,
        card,
        resultPerson,
        secret,
        relateSearch
    },
    computed: {
        ...mapGetters(["username", "password", "treeData"])
    },
    mounted() {
        this.search();
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
            let url = `/telematics/v3/weather?location=杭州&output=json&ak=H7W5CxI0BPzKtwGcBHmpGPAz50xP1Qjw`;
            getWeather(url).then((response) => {
                console.log(response.data);
            });
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
    },
    watch:{
        $route(){
            this.keywordChange(this.$route.query.keyword);
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