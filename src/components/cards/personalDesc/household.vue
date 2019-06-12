<template>
    <el-card shadow="hover">
        <div class="sort-tag">户籍情况</div>
        <div class="household">
            <label v-for="(item, index) in info" :key="index">{{item.name}}: {{item.value}}</label>
        </div>
        <div>
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
        </div>
    </el-card>
</template>
<script>
export default {
    data() {
        return {
            info: [
                {
                    name: '户籍名称',
                    value: '杭州市户籍'
                },
                {
                    name: '户籍地址',
                    value: '杭州市公安局'
                },
                {
                    name: '户主',
                    value: '局长'
                },
                {
                    name: '与户主关系',
                    value: '父子'
                },
                {
                    name: '户籍人数',
                    value: '3'
                }
            ],
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
    .sort-tag{
        font-size: 1.1em;
        font-weight: 600;
        color: #2F74EC;
        padding: 0 0.5em;
        border-left: 2px solid #409EFF;
    }
    .household{
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        padding: 1em 0.8em;
        color: #606266;
        label{
            display: block;
            width: 20%;
        }
    }
</style>
