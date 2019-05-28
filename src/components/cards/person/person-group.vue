<template>
    <div>
        <div class="person-group">
            <el-row :gutter="20">
                <div class="sort-tag">人员信息</div>
                <el-col :span="24" v-for="(person, index) in result.data.list" :key="index">
                    <personal :person="person"></personal>
                </el-col>
            </el-row>
            <el-row>
                <div class="sort-tag">人员关系</div>
                <el-col :span="24">
                    <personal-relation :relate="1"></personal-relation>
                </el-col>
            </el-row>
            <pagination :totalPage="result.data.list.length" :pageSize="pageSize" @sendPrevPage="sendPageChange" @sendCurrentPage="sendPageChange" @sendNextPage="sendPageChange"></pagination>
        </div>
    </div>
</template>

<script>
import personal from './personal.vue';
import pagination from '../../common/pagination';
import personalRelation from './person-relation';
export default {
    data(){
        return {
            pageSize: 1
        };
    },
    components: {
        personal,
        pagination,
        personalRelation
    },
    computed: {
        result(){
            let {personal} = this.$store.state.search.result;
            console.log('personal-group:', personal);
            return personal;
        }
    },
    methods: {
        sendPageChange(val){
            this.$store.dispatch('PAGE_CHANGE', {page: val, size: this.pageSize, strategy: this.result.strategy});
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