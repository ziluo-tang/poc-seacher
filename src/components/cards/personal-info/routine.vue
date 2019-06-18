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
                    <label>最高学历: {{education[0].credentials}}</label>
                    <label>毕业院校: {{education[0].school}}</label>
                </div>
                <el-table :data="education" style="width: 100%">
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
                </el-table>
            </div>
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">现住地情况</div>
            <div>
                <div class="identity">
                    <span>现住地址: {{address[0].moveIn}}</span>
                </div>
                <el-table :data="address" style="width: 100%">
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
                </el-table>
            </div>
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">从业情况</div>
            <div>
                <div class="identity">
                    <span>现工作单位: {{work[0].enterprise}}</span>
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
            education: [{
                credentials: '本科',
                school: '加州理工学院',
                major: '计算机科学技术',
                period: '2012/9-2016/7'
            }, {
                credentials: '高中',
                school: '杭州学军中学',
                major: '理科',
                period: '2009/9-2012/7'
            }],
            address: [{
                moveOut: '上海市普陀区金沙江路 1518 弄',
                moveIn: '杭州市上城区公安局',
                attribute: '员工宿舍',
                date: '2019/5/1'
            },
            {
                moveOut: '杭州市西湖区xxx路',
                moveIn: '上海市普陀区金沙江路 1518 弄',
                attribute: '租赁',
                date: '2018/5/1'
            }],
            work: [{
                enterprise: '蚂蚁金服',
                post: '前端开发工程师',
                level: 'P6',
                address: '杭州市西湖区天目山路',
                status: '在职'
            },
            {
                enterprise: '支付宝',
                post: '前端开发工程师',
                level: 'P5',
                address: '杭州市西湖区天目山路',
                status: '离职'
            }],
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
