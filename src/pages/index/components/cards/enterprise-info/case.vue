<template>
    <el-card shadow="hover">
        <div class="sort-tag">涉案情况</div>
        <div>
            <div class="identity">
                <label>案件数量: {{caseData.length}}</label>
            </div>
            <el-table :data="caseData" style="width: 100%">
                <el-table-column
                    type="index"
                    label="序号"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="cnumber"
                    label="案件编号">
                </el-table-column>
                <el-table-column
                    prop="cname"
                    label="案件名称">
                </el-table-column>
                <el-table-column
                    prop="cdate"
                    label="案件时间"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="ctype"
                    label="案件性质"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="caddress"
                    label="地址">
                </el-table-column>
            </el-table>
        </div>
    </el-card>    
</template>
<script>
export default {
    data() {
        return {
            caseData: []
        }
    }   
}
</script>
<style lang="scss" scoped>
    .el-card{
        &:not(:last-child){
            margin-bottom: 10px;
        }
        .sort-tag{
            font-size: 1.1em;
            font-weight: 600;
            color: #409EFF;
            padding: 0 0.5em;
            border-left: 2px solid #409EFF;
        }
        .identity{
            padding: 1em 0.8em;
            color: #606266;
        }
    }
</style>
