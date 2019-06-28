<template>
    <div>
        <el-card shadow="hover">
            <div class="sort-tag">风险情况</div>
            <div class="case-number">
                <label>是否重点人员：</label>
                <label>是否涉稳人员：</label>
                <label>是否在逃人员：</label>
            </div>
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">涉案特长</div>
            <div class="case-number">
                <label>涉案特长：</label>
                <label>特殊专长：</label>
            </div>
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">涉及案件</div>
            <div>
                <div class="case-number">
                    <label>涉案数量：{{tableData.length}}</label>
                </div>
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
        <el-card shadow="hover">
            <div class="sort-tag">涉毒详情</div>
            <div>
                <div class="case-number">
                    <label>涉毒次数：{{tableData.length}}</label>
                    <label>吸毒次数：{{tableData.length}}</label>
                    <label>戒毒次数：{{tableData.length}}</label>
                </div>
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
        <el-card shadow="hover">
            <div class="sort-tag">服刑情况</div>
            <div>
                <div class="case-number">
                    <label>服刑次数：{{tableData.length}}</label>
                    <label>拘留次数：{{tableData.length}}</label>
                    <label>看守次数：{{tableData.length}}</label>
                    <label>监狱次数：{{tableData.length}}</label>
                </div>
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
        <el-card shadow="hover">
            <div class="sort-tag">涉及事件</div>
            <div>
                <div class="case-number">
                    <label>涉及事件数量：{{tableData.length}}</label>
                </div>
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
        <el-card shadow="hover">
            <div class="sort-tag">涉及线索</div>
            <div>
                <div class="case-number">
                    <label>涉及线索数量：{{tableData.length}}</label>
                </div>
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
        <el-card shadow="hover">
            <div class="sort-tag">涉及敏感信息</div>
            <div>
                <div class="case-number">
                    <label>涉及敏感信息数量：{{tableData.length}}</label>
                </div>
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
        <el-card shadow="hover">
            <div class="sort-tag">上访情况</div>
            <div>
                <div class="case-number">
                    <label>上访次数：{{tableData.length}}</label>
                </div>
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
        <el-card shadow="hover">
            <div class="sort-tag">精神病人肇事肇祸</div>
            <div>
                <div class="case-number">
                    <label>肇事次数：{{tableData.length}}</label>
                    <label>安康医院入院次数：{{tableData.length}}</label>
                </div>
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
        <el-card shadow="hover">
            <div class="sort-tag">收容教育</div>
            <div>
                <div class="case-number">
                    <label>收容教育次数：{{tableData.length}}</label>
                </div>
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
    </div>    
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
        .case-number{
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            padding: 1em 0.8em;
            color: #606266;
            label{
                display: block;
                width: 25%;
            }
        }
    }
</style>
