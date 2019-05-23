<template>
    <div class="seacher-box">
        <div class="seacher-container">
            <div class="seacher-log">
                <i class="iconfont iconjingwuicon_svg-"></i>
                <span>警务云搜</span>
            </div>
            <autocompleteSeacher :search="search"></autocompleteSeacher>
        </div>
    </div>
</template>

<script>
import autocompleteSeacher from '../components/autocomplete-seacher/index.vue';
export default {
    data() {
        return {};
    },
    components:{
        autocompleteSeacher
    },
    methods: {
        search() {
            this.$router.push({ path: "/result"});
        }
    }
}
</script>

<style scoped lang="scss">
.seacher-box{
    position: relative;
    width: 100%;
    height: 100%;
    .seacher-container{
        position: absolute;
        width: 50%;
        left: 50%;
        top: 30%;
        transform: translate(-50%, 0);
        .seacher-log{
            width: 100%;
            text-align: center;
            margin-bottom: 1em;
            i, span{
                font-size: 2.8em;
                color: #aaaaaa;
                letter-spacing: 0.05em
            }
        }
    }
}

</style>

