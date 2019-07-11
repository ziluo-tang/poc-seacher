<template>
  <div class="configBox">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-vertical-demo"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router unique-opened
          style="height: 100%"
        >
          <el-menu-item index="configuration">
            <i class="el-icon-setting"></i>
            <span slot="title">Rule规则配置</span>
          </el-menu-item>
          <el-menu-item index="configShow">
            <i class="el-icon-menu"></i>
            <span slot="title">Rule规则展示</span>
          </el-menu-item>
        </el-menu>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeIndex:'',
    }
  },
  created(){
    let path_now = this.$route.path;
    this.activeIndex = path_now.split('/')[1];
    console.log(this.activeIndex)
    let num = path_now.indexOf('configuration');
    let num1 = path_now.indexOf('configShow');
    // let num2 = path_now.indexOf('deploy');
    if (~num) {
      this.activeIndex = 'configuration'
    }
    if (~num1) {
      this.activeIndex = 'configShow'
    }
    // if (~num2) {
    //   this.activeIndex = 'deploy'
    // }
  },
  methods:{
    handleSelect(key) {
      this.activeIndex = key
      console.log(key)
      this.$route.path.replace('/', this.activeIndex);
    },
  },
  watch: {
    $route: {
      handler:function(val,oldVal){
        let path_item = val.path;
        console.log(path_item)
        this.activeIndex = path_item.split('/')[1];
        let num = path_item.indexOf('configuration');
        let num1 = path_item.indexOf('configShow');
        // let num2 = path_item.indexOf('deploy');
        if (~num) {
          this.activeIndex = 'configuration'
        }
        if (~num1) {
          this.activeIndex = 'configShow'
        }
        // if (~num2) {
        //   this.activeIndex = 'deploy'
        // }
      },
      // 深度观察监听
      deep: true,
      immediate: true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.configBox{
  width: 157px;
  height: 100vh;
}


</style>
