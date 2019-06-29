<template>
    <div>
        <el-card shadow="hover">
            <div class="sort-tag">关联身份信息</div>
            <div class="identity">
                <label v-show="routine.zjzl">证件类型：{{routine.zjzl}}</label>
                <label v-show="routine.zjhm">证件号码：{{routine.zjhm}}</label>
                <label v-show="routine.zjzldm">证件代码：{{routine.zjzldm}}</label>
            </div>
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">教育经历</div>
            <div>
                <div class="identity">
                    <label v-show="routine.whcd">文化程度: {{routine.whcd}}</label>
                    <label v-show="routine.whcddm">文化程度代码: {{routine.whcddm}}</label>
                </div>
                <!-- <el-table :data="education" style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="credentials"
                        label="学历"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="school"
                        label="学校名称">
                    </el-table-column>
                    <el-table-column
                        prop="major"
                        label="专业">
                    </el-table-column>
                    <el-table-column
                        prop="period"
                        label="入学/毕业时间"
                        width="180">
                    </el-table-column>
                </el-table> -->
            </div>
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">居住地情况</div>
            <div>
                <div class="identity">
                    <label v-show="routine.jzd">居住地：{{routine.jzd}}</label>
                    <label v-show="routine.jzd_addr">居住地详址: {{routine.jzd_addr}}</label>
                </div>
                <!-- <el-table :data="address" style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="moveOut"
                        label="迁出地址">
                    </el-table-column>
                    <el-table-column
                        prop="moveIn"
                        label="迁入地址">
                    </el-table-column>
                    <el-table-column
                        prop="attribute"
                        label="地址属性"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="迁移时间"
                        width="180">
                    </el-table-column>
                </el-table> -->
            </div>
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">从业情况</div>
            <div>
                <div class="identity">
                    <label v-show="routine.zy">职业：{{routine.zy}}</label>
                    <label v-show="routine.zydm">职业代码：{{routine.zydm}}</label>
                    <label v-show="routine.gzdwmc">工作单位: {{routine.gzdwmc}}</label>
                    <label v-show="routine.gzdwdm">工作单位代码: {{routine.gzdwdm}}</label>
                </div>
                <!-- <el-table :data="work" style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="enterprise"
                        label="企业名称">
                    </el-table-column>
                    <el-table-column
                        prop="post"
                        label="职务"
                        width="160">
                    </el-table-column>
                    <el-table-column
                        prop="level"
                        label="职级"
                        width="160">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="企业地址">
                    </el-table-column>
                    <el-table-column
                        prop="status"
                        label="从业状态"
                        width="160">
                    </el-table-column>
                </el-table> -->
            </div>
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">兵役情况</div>
            <div class="identity">
                <label>兵役情况：{{routine.byzk}}</label>
                <label>兵役状况代码：{{routine.byzkdm}}</label>
            </div>
        </el-card>
        <!-- <el-card shadow="hover">
            <div class="sort-tag">网络身份信息</div>
            <div>
                <div class="identity">
                    <span>网络身份数量: {{work[0].enterprise}}</span>
                </div>
                <el-table :data="work" style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="enterprise"
                        label="企业名称">
                    </el-table-column>
                    <el-table-column
                        prop="post"
                        label="职务"
                        width="160">
                    </el-table-column>
                    <el-table-column
                        prop="level"
                        label="职级"
                        width="160">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="企业地址">
                    </el-table-column>
                    <el-table-column
                        prop="status"
                        label="从业状态"
                        width="160">
                    </el-table-column>
                </el-table>
            </div>
        </el-card> -->
    </div>
</template>
<script>
export default {
    props: ['routine'],
    data() {
        return {};
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
