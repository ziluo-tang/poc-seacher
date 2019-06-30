<template>
    <div class="personal-relation-card">
        <personal-desc :person="result.info"></personal-desc>
        <personal-relationship :relation="result.graph"></personal-relationship>
    </div>
</template>
<script>
import personalDesc from '../personal-info/personalDesc';
import personalRelationship from '../../common/graph';
export default {
    name: 'personalRelation',
    data() {
        return {};
    },
    computed: {
        result(){
            let { personalInfo } = this.$store.state.search.result;
            let { personalRelation } = this.$store.state.search.result;
            return {
                info: personalInfo.data.list[0].baseInfo,
                graph: personalRelation.data.list[0].graph
            };
        }
    },
    components: {
        personalDesc,
        personalRelationship
    }
}
</script>
<style lang="scss" scoped>
    .personal-relation-card{
        .el-card{
            margin-bottom: 10px;
        }
    }
</style>