<template>
    <div class="seacher-box">
        <div class="seacher-container">
            <el-input v-model="keyword" placeholder="输入关键词" style="margin-right: 15px;"></el-input>
            <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
                keyword: ''
            };
    },
    methods: {
        search() {
            this.$router.push({ path: "/result", query: {keyword: this.keyword} });
        }
    }
}
</script>

<style>
.seacher-box{
    position: relative;
    width: 100%;
    height: 100%;
}
.seacher-container{
    position: absolute;
    width: 50%;
    left: 50%;
    top: 30%;
    transform: translate(-50%, 0);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
}
</style>

