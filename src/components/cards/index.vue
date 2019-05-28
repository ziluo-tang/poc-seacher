<script>
import { mapGetters} from "vuex";
import {allcards, mapping} from '../../config/mapping'
export default {
    // props: ['result'],
    data(){
        return {};
    },
    computed: {
        ...mapGetters(['result'])
    },
    components: allcards,
    mounted(){
        console.log('cards:',this.result);
    },
    render: function(createElement){
        return createElement('div', this.result.map(function(item) {
            return createElement(mapping[item.strategy.displayCard], 
                {
                    props: {
                        'result': item.data
                    }
                });
            })
        );
        // return createElement('div', [createElement(mapping['personnel'], {
        //     props: {
        //         persons: [
        //             {
        //                 header: require(`../../assets/img/u65.png`),
        //                 name: '张爱丽',
        //                 IDcard: '341003198607012524',
        //                 type: '欺诈在逃',
        //                 address: '浙江省杭州市西湖区西溪云庐1栋1201'
        //             }
        //         ]
        //     }
        // })])
    }
}
</script>
<style lang="sass" scoped>

</style>

