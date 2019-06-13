<template>
    <div>
        <el-card shadow="hover">
            <personal-desc :person="person"></personal-desc>
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
import personalDesc from './personalDesc';
import personalRoutine from './routine'; 
import personalRelationship from './relation';
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
        personalTrajectory,
        personalDesc
    }
}
</script>
<style lang="scss" scoped>
    .el-card{
        &:not(:last-child){
            margin-bottom: 10px;
        }
    }
    .el-tabs{
        border: none;
    }
</style>
