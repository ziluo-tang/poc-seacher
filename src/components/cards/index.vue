<template>
    <result-person :persons="result" :relation="1"></result-person>
</template>
<script>
import { mapGetters} from "vuex";
import * as cardMapping from '../../config/mapping'
import resultPerson from './person/person-group';
export default {
    // props: ['result'],
    data(){
        return {};
    },
    computed: {
        ...mapGetters(['result'])
    },
    components: {
        resultPerson
    },
    created(){
        // console.log(this.result)
    }
}
</script>
<style lang="sass" scoped>

</style>

