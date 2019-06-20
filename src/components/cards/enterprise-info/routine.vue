<template>
    <div>
        <personal-desc :person="master" :tag="'企业法人代表'"></personal-desc>
        <el-card shadow="hover">
            <div class="sort-tag">企业股东</div>
            <div>
                <div class="identity">
                    <label>自然人股东: {{stockholder.length}}</label>
                    <label>入资企业家: {{stockholder.length}}</label>
                </div>
                <el-table :data="stockholder" style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="herader"
                        label="人像"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="姓名"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="sexy"
                        label="性别"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="age"
                        label="年龄"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="IDcard"
                        label="身份证号/信用代码">
                    </el-table-column>
                    <el-table-column
                        prop="stockholder"
                        label="股东类型"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="contribution"
                        label="认缴出资额"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="proportion"
                        label="占股份额"
                        width="100">
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">高管</div>
            <div>
                <div class="identity">
                    <label>人数: {{administrators.length}}</label>
                </div>
                <el-table :data="administrators" style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="herader"
                        label="人像">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="姓名"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="sexy"
                        label="性别"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="age"
                        label="年龄"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="IDcard"
                        label="身份证号">
                    </el-table-column>
                    <el-table-column
                        prop="post"
                        label="职务">
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">员工</div>
            <div>
                <div class="identity">
                    <label>人数: {{staff.length}}</label>
                </div>
                <el-table :data="staff" style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="herader"
                        label="人像">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="姓名"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="sexy"
                        label="性别"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="age"
                        label="年龄"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="IDcard"
                        label="身份证号">
                    </el-table-column>
                    <el-table-column
                        prop="post"
                        label="职务">
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
    </div>
</template>
<script>
import personalDesc from '../personal-info/personalDesc';
export default {
    data() {
        return {
            stockholder: [],
            administrators: [],
            staff: []
        };
    },
    components: {
        personalDesc
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

