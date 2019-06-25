<template>
    <div>
        <personal-graph></personal-graph>
        <el-card shadow="hover">
            <div class="sort-tag">关系人员来往信息</div>
            <div class="dealings">
                <p class="subtag">频繁/重点人员来往信息</p>
                <div class="case-number">
                    <label>频繁来往人物数量：{{tableData.length}}</label>
                    <label>重点来往人物数量：{{tableData.length}}</label>
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
            <div class="dealings">
                <p class="subtag">重点虚拟身份/组群通联信息</p>
                <div class="case-number">
                    <label>相关重点虚拟身份/组群数量：{{tableData.length}}</label>
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
            <div class="dealings">
                <p class="subtag">加入重点关注组织信息</p>
                <div class="case-number">
                    <label>加入重点关注组织数量：{{tableData.length}}</label>
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
import personalGraph from '../../common/graph';
export default {
    data() {
        return {
            tableData: []
        };
    },
    components: {
        personalGraph
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
        .dealings{
            &:not(:last-child){
                margin-bottom: 30px;
            }
            .subtag{
                margin: 10px 0 0 0.8em;
                color: #409EFF;
            }
        }
        .case-number{
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            padding: 1em 2em;
            color: #606266;
            label{
                display: block;
                width: 30%
            }
        }
    }
</style>
