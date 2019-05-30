<script>
import { mapGetters} from "vuex";
import {allcards, mapping} from '../../config/mapping'
export default {
    data(){
        return {};
    },
    computed: {
        ...mapGetters(['result'])
    },
    components: allcards,
    render: function(createElement){
        // return createElement('div', Object.keys(this.result).map(function(item) {
        //         return createElement(mapping[item]);
        //     })
        // );
        return createElement('div', [
            createElement(allcards.resultPersonal),
            createElement(allcards.resultRelation)
        ],{
            class: 'result-cards'
        });
    }
}
</script>
<style lang="scss" scoped>
    .result-cards{
        margin: 0 -5px 0 10px;
        .el-card{
            margin-bottom: 15px;
        }
    }
</style>

