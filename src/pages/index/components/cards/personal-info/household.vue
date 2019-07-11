<template>
    <el-card shadow="hover">
        <div class="sort-tag">户籍情况</div>
        <div class="household">
            <label v-show="person.hh">户号：{{person.hh}}</label>
            <label v-show="person.hjd_addr">户籍详细地址：{{person.hjd_addr}}</label>
            <label v-show="person.hjdpcs">户籍地派出所：{{person.hjdpcs}}</label>
            <label v-show="person.hjdpcsdm">户籍地派出所代码：{{person.hjdpcsdm}}</label>
        </div>
        <!-- <div>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
            </el-table>
        </div> -->
    </el-card>
</template>
<script>
export default {
    props: ['person'],
    data() {
        return {};
    }
}
</script>
<style lang="scss" scoped>
    .sort-tag{
        font-size: 1.1em;
        font-weight: 600;
        color: #409EFF;
        padding: 0 0.5em;
        border-left: 2px solid #409EFF;
    }
    .household{
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: center;
        padding: 1em 0.8em;
        color: #606266;
        label{
            display: block;
            width: 50%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow:hidden;
            &:not(:last-child){
                margin-bottom: 10px;
            }
        }
    }
</style>
