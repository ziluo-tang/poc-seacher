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
        return createElement('div', Object.keys(this.result).map(function(item) {
                return createElement(mapping[item]);
            })
        );
    }
}
</script>
<style lang="sass" scoped>

</style>

