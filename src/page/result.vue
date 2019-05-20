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
                    <el-col :span="12">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>人员信息</span>
                                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                            </div>
                            <div v-for="o in 4" :key="o" class="text item">
                                {{'列表内容 ' + o }}
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="12">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>人员信息</span>
                                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                            </div>
                            <div v-for="o in 4" :key="o" class="text item">
                                {{'列表内容 ' + o }}
                            </div>
                        </el-card>
                    </el-col>
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>人员信息</span>
                            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                        </div>
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="8" class="content-right">
                    <el-card class="box-card">
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import autocompleteSeacher from '../components/autocomplete-seacher/index.vue';
export default {
    data() {
        return {
            keyword: this.$route.query.keyword,
            sysUserName: 'admin',
            result: 1
        };
    },
    created(){
        this.search();
    },
    components: {
        autocompleteSeacher
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

<style lang="scss">
// @import "../assets/css/them.scss";
.header{
    // position: fixed;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    // z-index: 1000;
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
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .content-right{
        border-left: 1px solid #dddddd;
    }
}
</style>