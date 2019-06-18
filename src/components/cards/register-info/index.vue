<template>
    <div>
        <el-card shadow="hover">
            <div class="sort-tag">社会单位基本属性</div>
            <div class="base-info">
                <p>
                    <label>户籍名称: {{register.name}}</label>
                    <label>户号: {{register.number}}</label>
                    <label>户籍属性: {{register.attribute}}</label>
                </p>
                <p>
                    <i class="iconfont iconheisvg"></i>
                    <i class="iconfont iconjisvg"></i>
                    <i class="iconfont icontousvg"></i>
                    <i class="iconfont iconpiansvg"></i>
                    <i class="iconfont iconhuangsvg"></i>
                    <i class="iconfont icondusvg"></i>
                    <i class="iconfont iconbaosvg"></i>
                    <a href="javascript:void(0);" @click="powerApply">高敏高密申请</a>
                </p>
                <p>
                    <label>户籍地址: {{register.address}}</label>
                    <label>所在行政区划分: {{register.region}}</label>
                    <label>所属公安机关: {{register.office}}</label>
                    <label>所属派出所: {{register.policeStation}}</label>
                    <label>责任区: {{register.dutyRegion}}</label>
                    <label>居/村委会: {{register.community}}</label>
                </p>
            </div>
        </el-card>
        <personal-desc :person="master" :tag="'户主'"></personal-desc>
        <el-card shadow="hover">
            <div class="sort-tag">户籍成员</div>
            <div class="identity">
                <label>户籍人数: {{member.length}}</label>
                <el-table :data="member" style="width: 100%">
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
                        prop="education"
                        label="学历"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="relation"
                        label="与户主关系"
                        width="150">
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">户籍变更情况</div>
            <div class="identity">
                <label>变更次数: {{registerChange.length}}</label>
                <el-table :data="registerChange" style="width: 100%">
                    <el-table-column
                        type="index"
                        label="序号"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="turnType"
                        label="变动性质"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="modifier"
                        label="变动人"
                        width="150">
                    </el-table-column>
                    <el-table-column
                        prop="content"
                        label="变动内容">
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        label="变动时间"
                        width="150">
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
    </div>
</template>
<script>
import personalDesc from '../personal-info/personalDesc';
export default {
    name: 'registerInfo',
    data() {
        return {
            register: {
                name: '张三',
                number: '女',
                attribute: '24',
                address: '31000000000000',
                region: '张xx',
                office: '小张',
                policeStation: '1993/10/1',
                dutyRegion: '汉',
                community: '未婚'
            },
            master: {
                name: '张三',
                sexy: '女',
                age: '24',
                IDcard: '31000000000000',
                header: require('../../../assets/img/u70.png'),
                oldname: '张xx',
                nickname: '小张',
                birthday: '1993/10/1',
                nation: '汉',
                marriage: '未婚',
                politics: '党员',
                religion: '无',
                weight: '60KG',
                height: '170CM',
                blood: 'A',
                healthy: '健康', 
                address: '浙江省杭州市上城区公安局'
            },
            member: [{
                header: require('../../../assets/img/u70.png'),
                name: '张三',
                sexy: '女',
                age: '25',
                IDcard: '42108923798735998',
                education: '本科'
            }, {
                header: require('../../../assets/img/u65.png'),
                name: '李三',
                sexy: '女',
                age: '25',
                IDcard: '42108923798735008',
                education: '本科'
            }],
            registerChange: [{
                turnType: '迁入',
                modifier: '张萨',
                content: '迁入户籍',
                date: '2018-10-1'
            }, {
                turnType: '迁入',
                modifier: '李三',
                content: '迁入户籍',
                date: '2018-10-11'
            }]
        }
    },
    computed: {
        result(){
            let {registerInfo} = this.$store.state.search.result;
            return registerInfo;
        }
    },
    components: {
        personalDesc
    },
    methods: {
        powerApply() {

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
        .base-info{
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            padding: 1em 0.8em;
            .person-header{
                margin-right: 2em;
                .el-image{
                    width: 8em;
                    height: 100%;
                    border: 1px solid #ACCBFF;
                    border-radius: 4px;
                    margin-bottom: -4px;
                }
            }
            p{
                max-width: 80%;
                margin: 0;
                padding: 0.2em 0.5em;
                font-size: small;
                color: #606266;
                &:first-child{
                    font-weight: 600;
                    background-color: rgba(248,250,251,1);;
                    border-radius: 4px;
                    padding: 0.5em;
                    label:not(:first-child){
                        margin-left: 2em;
                    }
                }
                &:nth-child(2){
                    padding: 0.5em;
                    label{
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        text-align: center;
                        border: 1px solid saddlebrown;
                        border-radius: 50%;
                    }
                    a{
                        float: right;
                    }
                }
                &:last-child{
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: flex-start;
                    align-items: center;
                    align-content: center;
                    label{
                        display: block;
                        width: 50%;
                        padding: 0.2em 0;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow:hidden;
                    }
                }
            }
        }
        .identity{
            padding: 1em 0.8em;
        }
    }
</style>