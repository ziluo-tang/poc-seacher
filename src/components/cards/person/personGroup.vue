<template>
    <el-row :gutter="20">
        <div class="sort-tag">人员信息</div>
        <el-col :span="col" v-for="(person, index) in persons" :key="index">
            <personnel :person="person"></personnel>
        </el-col>
    </el-row>
</template>

<script>
import personnel from './personnel.vue';
export default {
    props: ['persons'],
    data(){
        var col = this.$props.persons.length>1? 12 : 24;
        return {
            col: col
        };
    },
    components: {
        personnel
    }
}
</script>
<style lang="scss" scoped>
    .el-row {
        margin: 0 0 20px 0;
        &:last-child {
            margin-bottom: 0;
        }
        .sort-tag{
            line-height: 2;
            font-size: 1.3em;
            color: #555555;
        }
        .el-col-12:nth-child(2n){
            padding: 0 !important;
        }
        .el-col-24{
            padding-left: 0 !important;
        }
    }
</style>