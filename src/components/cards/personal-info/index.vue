<template>
    <div>
        <personal-desc :person="personAttr.baseInfo"></personal-desc>
        <el-tabs v-model="activeName" type="border-card">
            <el-tab-pane label="常规" name="routine">
                <keep-alive>
                    <personal-routine :routine="personAttr.baseInfo"></personal-routine>
                </keep-alive>
            </el-tab-pane>
            <el-tab-pane label="人物关系" name="relationship" :lazy="true">
                <keep-alive>
                    <personal-relationship :hotel="personAttr.relationTongjiudian" :room="personAttr.relationTongfangjian"></personal-relationship>
                </keep-alive>
            </el-tab-pane>
            <el-tab-pane label="户籍状况" name="household">
                <keep-alive>
                    <personal-household :person="personAttr.baseInfo"></personal-household>
                </keep-alive>
            </el-tab-pane>
            <el-tab-pane label="涉案情况" name="case">
                <keep-alive>
                    <personal-case :person="personAttr.baseInfo"></personal-case>
                </keep-alive>
            </el-tab-pane>
            <!-- <el-tab-pane label="财务状况" name="finance">
                <keep-alive>
                    <personal-finance></personal-finance>
                </keep-alive>
            </el-tab-pane> -->
             <el-tab-pane label="轨迹特征" name="trajectory">
                <keep-alive>
                    <personal-trajectory :train="personAttr.eventTrainList" :hotel="personAttr.eventHotelList"></personal-trajectory>
                </keep-alive>
             </el-tab-pane>
             <el-tab-pane label="事件统计" name="eventcount">
                <keep-alive>
                    <personal-eventcount :eventcount="personAttr.eventCount"></personal-eventcount>
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
import personalEventcount from './eventCount';
export default {
    name: 'personalInfo',
    data() {
        return {
            activeName: 'routine'
        }
    },
    computed: {
        result() {
            let { personalInfo } = this.$store.state.search.result;
            return personalInfo;
        },
        personAttr() {
            return this.result.data.list[0];
        }
    },
    components: {
        personalRoutine,
        personalRelationship,
        personalHousehold,
        personalCase,
        personalFinance,
        personalTrajectory,
        personalDesc,
        personalEventcount
    }
}
</script>
<style lang="scss" scoped>
    .el-card{
        &:not(:last-child){
            margin-bottom: 10px;
        }
    }
    .el-tabs--border-card{
        border: none;
        border-radius: 4px;
        .el-tabs__header{
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            .el-tabs__nav-scroll{
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
            }
        }
    }
</style>