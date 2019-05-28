<template>
    <div>
        <div class="person-group">
            <el-row :gutter="20">
                <div class="sort-tag">人员信息</div>
                <el-col :span="24" v-for="(person, index) in result.list" :key="index">
                    <personnal :person="person"></personnal>
                </el-col>
            </el-row>
            <pagination :totalPage="result.list.length" @sendPrevPage="sendPrevPage" @sendNextPage="sendNextPage"></pagination>
        </div>
        <personnal-relation :relate="relation"></personnal-relation>
    </div>
</template>

<script>
import personnal from './personnel.vue';
import pagination from '../../common/pagination';
import personnalRelation from './person-relation';
export default {
    props: ['result', 'relation'],
    data(){
        return {};
    },
    components: {
        personnal,
        pagination,
        personnalRelation
    },
    mounted(){
        console.log('personnalGroup: ', this.$props.result);
    },
    methods: {
        sendPrevPage(val){
            console.log(val);
        },
        sendNextPage(val){
            console.log(val);
        }
    }
}
</script>
<style lang="scss" scoped>
.person-group{
    margin-bottom: 20px;
    .el-row {
        margin: 0 -10px 0 10px !important;
        &:last-child {
            margin-bottom: 0;
        }
        .sort-tag{
            line-height: 2;
            font-size: 1.1em;
            font-weight: 550;
            color: #555555;
        }
        .el-col-12:nth-child(2n){
            padding: 0 !important;
        }
        .el-col-12:nth-child(2n+1){
            padding-right: 0 !important;
        }
        .el-col-24{
            padding: 0 !important;
        }
    }
}
</style>