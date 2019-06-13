<template>
    <div>
        <el-card shadow="hover">
            <personal-desc :person="person"></personal-desc>
        </el-card>
        <personal-relationship></personal-relationship>
    </div>
    
</template>
<script>
import personalDesc from '../personalDesc/personalDesc';
import personalRelationship from '../personalDesc/relation';
export default {
    name: 'personal-relation',
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
            let {relation} = this.$store.state.search.result;
        }
    },
    components: {
        personalDesc,
        personalRelationship
    }
}
</script>