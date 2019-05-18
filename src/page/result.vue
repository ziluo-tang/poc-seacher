<template>
    <el-container>
        <el-header class="header">
             <div class="header-seacher">
                <el-input v-model="keyword" v-on:input="oninput" style="margin-right: 15px;"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
            </div>
            <div class="userinfo">
                <el-dropdown trigger="hover">
                    <span class="el-dropdown-link userinfo-inner">{{sysUserName}}</span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </el-header>
        <el-main class="content"></el-main>
    </el-container>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
    data() {
        return {
            keyword: this.$route.query.keyword,
            sysUserName: 'admin',
            result: 1
        };
    },
    created(){
        let url = `/telematics/v3/weather?location=杭州&output=json&ak=H7W5CxI0BPzKtwGcBHmpGPAz50xP1Qjw`;
        this.axios.get(url).then((response) => {
            console.log(response.data);
        });
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
        search() {

        },
        oninput(){

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

<style scoped lang="scss">
@import "../assets/css/them.scss";
.header{
    // position: fixed;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    // z-index: 1000;
    .header-seacher{
        width: 50%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
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
    overflow: auto;
}
</style>