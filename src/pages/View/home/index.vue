<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <Aside></Aside>
      </el-aside>
      <el-main style="height: 100vh;padding: 0">
        <el-container>
          <el-main style="height: 100vh;padding: 0">
            <keep-alive include="configuration">
              <router-view></router-view>
            </keep-alive>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import Aside from '../components/aside.vue';
    export default {
        name: "index",
        components: {
          Aside,
        },
    }
</script>

<style scoped>

</style>
