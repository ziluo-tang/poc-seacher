<template>
    <div class="personal-relation-card">
        <personal-desc :person="person"></personal-desc>
        <personal-relationship></personal-relationship>
    </div>
</template>
<script>
import personalDesc from '../personal-info/personalDesc';
import personalRelationship from '../../common/graph';
export default {
    name: 'personalRelation',
    data() {
        return {
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
        };
    },
    computed: {
        result(){
            let {personalRelation} = this.$store.state.search.result;
            return personalRelation;
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