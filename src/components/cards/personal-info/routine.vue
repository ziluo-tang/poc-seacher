<template>
    <div>
        <el-card shadow="hover">
            <div class="sort-tag">关联身份信息</div>
            <div class="identity">
                <label v-for="(info, index) in identity" :key="index">{{info.name}}: {{info.value}}</label>
            </div>
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">教育经历</div>
            <div>
                <div class="identity">
                    <label>最高学历: 本科</label>
                    <label>毕业院校: 斯坦福</label>
                </div>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="学历"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="学校名称">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="专业">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="入学/毕业时间"
                        width="180">
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">现住地情况</div>
            <div>
                <div class="identity">
                    <span>现住地址: 上海市普陀区金沙江路 1517 弄</span>
                </div>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="迁出地址">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="迁入地址">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="地址属性"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="迁移时间"
                        width="180">
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">从业情况</div>
            <div>
                <div class="identity">
                    <span>现工作单位: 上海市普陀区金沙江路 1517 弄</span>
                </div>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="企业名称">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="职务"
                        width="160">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="职级"
                        width="160">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="企业地址">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="从业状态"
                        width="160">
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">兵役情况</div>
            <div></div>
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            identity: [
                {
                    name: '电话/手机',
                    value: '18478877435'
                },
                {
                    name: '社保号码',
                    value: '87w298428'
                },
                {
                    name: '常用QQ',
                    value: '872984280'
                },
                {
                    name: '常用微信',
                    value: '87w298428'
                },
                {
                    name: '社保号码',
                    value: '87w298428'
                },
                {
                    name: '社保号码',
                    value: '87w298428'
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
