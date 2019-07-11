<template>
    <div>
        <el-card shadow="hover">
            <div class="sort-tag">银行账户情况</div>
            <div>
                <div class="identity">
                    <label>借记卡: 1</label>
                    <label>信用卡: 1</label>
                </div>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="发卡行"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="开户行"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="卡号"
                        width="180">
                    </el-table-column>
                     <el-table-column
                        prop="address"
                        label="卡片类型"
                        width="160">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="人民币存款">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="外币存款">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="卡片额度">
                    </el-table-column>
                </el-table>
            </div>
            
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">房产情况</div>
            <div>
                <div class="identity">
                    <label>名下房产: 1 套</label>
                </div>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="房产属性"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="面积"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="购买状态"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="产权年限"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="所在城市"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="详细地址">
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">车辆情况</div>
            <div>
                <div class="identity">
                    <label>名下车辆: 1 台</label>
                </div>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="品牌"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="车型/颜色"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="车牌"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="车架号码">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="购买年份"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="购买状态"
                        width="100">
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">保单情况</div>
            <div>
                <div class="identity">
                    <label>名下保单: 1 份</label>
                </div>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="投保公司"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="保险类型"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="投保目标">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="保险周期"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="保单金额"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="受益人"
                        width="100">
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">会员卡登记情况</div>
            <div>
                <div class="identity">
                    <label>名下会员卡: 1 张</label>
                </div>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="卡片发行商">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="商户行业"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="卡片名称">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="周期"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="办卡费用"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="卡片权益"
                        width="100">
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
