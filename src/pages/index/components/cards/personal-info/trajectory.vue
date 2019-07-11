<template>
    <div>
        <!-- <el-card shadow="hover">
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
        </el-card> -->
        <el-card shadow="hover">
            <div class="sort-tag">出行方式特征</div>
            <!-- <div class="identity">
                <label>常去境内地：{{}}</label>
                <label>常去境外地：{{}}</label>
                <label>国内跨省出行率（月）：{{}}</label>
                <label>跨境出行率（月）：{{}}</label>
                <label>经常来往地：{{}}</label>
                <label>最新出现地/时间：{{}}</label>
            </div> -->
            <el-table :data="train" style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="b_time"
                        label="开始日期 - 结束日期"
                        width="190">
                        <template slot-scope="scope">
                            <span>{{ scope.row.b_time | formatDate }} - {{ scope.row.e_time | formatDate }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="b_addr"
                        label="出发地 - 目的地"
                        width="180">
                        <template slot-scope="scope">
                            <span>{{ scope.row.b_addr }} - {{ scope.row.e_addr }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="e_spot"
                        label="开始站点 - 结束站点"
                        width="180">
                        <template slot-scope="scope">
                            <span>{{ scope.row.b_spot }} - {{ scope.row.e_spot }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="type"
                        label="出行类型"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="lcbc"
                        label="列车班次">
                    </el-table-column>
                   <el-table-column
                        prop="cxh"
                        label="车厢/座位">
                        <template slot-scope="scope">
                            <span>{{ scope.row.cxh?scope.row.cxh:'未知'}} / {{ scope.row.zwh?scope.row.zwh:'未知' }}</span>
                        </template>
                    </el-table-column>
                </el-table>
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">住宿轨迹特征</div>
            <el-table :data="hotel" style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="b_time"
                        label="开始日期 - 结束日期"
                        width="190">
                        <template slot-scope="scope">
                            <span>{{ scope.row.b_time | formatDate }} - {{ scope.row.e_time | formatDate }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="b_time"
                        label="开始地址 - 结束地址"
                        width="180">
                        <template slot-scope="scope">
                            <span>{{ scope.row.b_addr + '-' + scope.row.e_addr }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="jdmc"
                        label="酒店名称">
                    </el-table-column>
                    <el-table-column
                        prop="fjh"
                        label="房间号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="jdssxzqh"
                        label="酒店所属区域">
                    </el-table-column>
                    <!-- <el-table-column
                        prop="address"
                        label="住宿地址">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="登记人数"
                        width="100">
                    </el-table-column> -->
                </el-table>
        </el-card>
        <!-- <el-card shadow="hover">
            <div class="sort-tag">消费轨迹特征</div>
            <el-table :data="tableData" style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="city"
                        label="消费城市"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="消费商家">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="消费类型"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="消费方式"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="消费账号"
                        width="100">
                    </el-table-column>
                </el-table>
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">网络违规违法轨迹特征</div>
            <div class="identity">
                <label>常访问敏感论坛：{{}}</label>
                <label>常使用敏感APP：{{}}</label>
            </div>
            <el-table :data="tableData" style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="时间"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="city"
                        label="违法违规行为">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="访问设备"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="IP/归属地"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="访问域名/归属地"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="user"
                        label="用户名"
                        width="180">
                    </el-table-column>
                </el-table>
        </el-card> -->
    </div>
</template>
<script>
export default {
    props: ['train', 'hotel'],
    data() {
        return {};
    },
    filters: {
        formatDate(val) {
            if(!val){
                return '';
            }
            let year = val.substring(0, 4);
            let month = val.substring(4, 6);
            let date = val.substring(6, 8);
            return `${year}/${month}/${date}`;
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
