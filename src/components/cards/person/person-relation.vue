<template>
    <el-row>
        <div class="sort-tag">人员关系</div>
        <el-col :span="24">
            <el-card class="box-card">
                <div class="base-info">

                </div>
            </el-card>
        </el-col>
    </el-row>
</template>
<script>
export default {
    props: ['relate'],
    data(){
        return {};
    }
}
</script>
<style lang="scss" scoped>
     .el-row {
        margin: 0 -10px 0 10px !important;
     }
</style>
