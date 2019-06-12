<template>
    <div>
        <el-card shadow="hover">
            <div class="sort-tag">人员基本信息</div>
           <div class="base-info">
                <div class="person-header">
                    <el-image :src="person.header">
                        <div slot="placeholder" class="image-slot">
                            加载中<span class="dot">...</span>
                        </div>
                    </el-image>
                </div>
                <div>
                    <p>
                        <label>姓名：{{person.name}}</label>
                        <label>年龄：{{person.age}}</label>
                        <label>身份证：{{person.IDcard || person.key}}</label>
                    </p>
                    <p>
                        <label>黄</label>
                        <label>赌</label>
                        <label>毒</label>
                        <label>偷</label>
                        <a href="javascript:void(0);">高敏高密申请</a>
                    </p>
                    <p>
                        <label>性别：{{person.sexy}}</label>
                        <label>曾用名：{{person.oldname}}</label>
                        <label>别名/绰号：{{person.nickname}}</label>
                        <label>出生日期：{{person.birthday}}</label>
                        <label>民族：{{person.nation}}</label>
                        <label>婚姻状况：{{person.marriage}}</label>
                        <label>政治面貌：{{person.politics}}</label>
                        <label>宗教信仰：{{person.religion}}</label>
                        <label>身高：{{person.height}}</label>
                        <label>体重：{{person.weight}}</label>
                        <label>血型：{{person.blood}}</label>
                        <label>健康状况：{{person.healthy}}</label>
                    </p>
                </div>
            </div>
        </el-card>
        <el-tabs v-model="activeName" type="border-card">
            <el-tab-pane label="常规" name="routine">
                <keep-alive>
                    <personal-routine></personal-routine>
                </keep-alive>
            </el-tab-pane>
            <el-tab-pane label="人物关系" name="relationship">
                <keep-alive>
                    <personal-relationship></personal-relationship>
                </keep-alive>
            </el-tab-pane>
            <el-tab-pane label="户籍状况" name="household">
                <keep-alive>
                    <personal-household></personal-household>
                </keep-alive>
            </el-tab-pane>
            <el-tab-pane label="涉案情况" name="case">
                <keep-alive>
                    <personal-case></personal-case>
                </keep-alive>
            </el-tab-pane>
            <el-tab-pane label="财务状况" name="finance">
                <keep-alive>
                    <personal-finance></personal-finance>
                </keep-alive>
            </el-tab-pane>
             <el-tab-pane label="轨迹特征" name="trajectory">
                <keep-alive>
                    <personal-trajectory></personal-trajectory>
                </keep-alive>
             </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import personalRoutine from './routine'; 
import personalRelationship from '../personal-relation/index';
import personalHousehold from './household';
import personalCase from './case';
import personalFinance from './finance';
import personalTrajectory from './trajectory';
export default {
    data() {
        return {
            activeName: 'routine',
            person: {
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
            }
        }
    },
    components: {
        personalRoutine,
        personalRelationship,
        personalHousehold,
        personalCase,
        personalFinance,
        personalTrajectory
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
            color: #2F74EC;
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
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow:hidden;
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
                        width: 25%;
                        padding: 0.2em 0;
                    }
                }
            }
        }
    }
</style>
