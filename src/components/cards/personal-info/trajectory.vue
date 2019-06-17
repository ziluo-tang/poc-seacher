<template>
    <el-card shadow="hover">
        <div class="sort-tag">轨迹特征</div>
        <div>
            <div class="identity">
                <label>常用收货地址: 1 个</label>
            </div>
            <el-table :data="tableData" style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="收货城市"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="详细地址">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="收货次数"
                        width="100">
                    </el-table-column>
            </el-table>
        </div>
        <div>
                <div class="identity">
                    <label>常用发货地址: 1 个</label>
                </div>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="发货城市"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="详细地址">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="发货人/联系方式"
                        width="200">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="发货次数"
                        width="100">
                    </el-table-column>
                </el-table>
        </div>
    </el-card>
</template>
<script>
export default {
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        };
    }
}
</script>
<style lang="scss" scoped>
     .el-card{
        .sort-tag{
            font-size: 1.1em;
            font-weight: 600;
            color: #409EFF;
            padding: 0 0.5em;
            border-left: 2px solid #409EFF;
        }
        .identity{
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-start;
            align-items: center;
            padding: 1em 0.8em;
            color: #606266;
            label{
                display: block;
                width: 25%;
                margin: 5px 0;
            }
        }
    }
</style>
