<template>
    <transition
        :duration="500"
        enter-active-class="animated zoomInRight"
        leave-active-class="animated zoomOutLeft"
    >
    <div class="seacher-box">
        <div class="seacher-container">
            <div class="seacher-log">
                <img src="../assets/img/search-logo.png">
                 <!-- <el-image :src="blogo">
                    <div slot="placeholder" class="image-slot">
                        加载中<span class="dot">...</span>
                    </div>
                </el-image> -->
            </div>
            <autocompleteSeacher :search="search" @initPrompt="initPrompt"></autocompleteSeacher>
        </div>
        <transition
            :duration="500"
            enter-active-class="animated fadeInUp"
            leave-active-class="animated fadeOutDown"
        >
            <div class="promptTools" v-if="prompt && prompt.suggestTargets.length">
                <div class="extra-result">
                    <div class="desc-content">
                        <p v-for="(item, index) in prompt.suggestTargets" :key="index">
                            <label>{{item.targetName}}</label>
                            <label><font class="desc-value">{{item.targetValue}}</font></label>
                            <label>{{item.date}}</label>
                        </p>
                    </div>
                </div>
            </div>
         </transition>
        <div class="extend-application">
            <el-button icon="el-icon-plus" size="mini" circle @click="addApplication"></el-button>
        </div>
    </div>
    </transition>
</template>

<script>
import axios from 'axios';
import { mapGetters } from "vuex";
import autocompleteSeacher from '../components/autocomplete-seacher/index2.vue';
export default {
    data() {
        return {
            slogo: require('../assets/img/result-logo.png'),
            blogo: require('../assets/img/search-logo.png'),
            prompt: null,
            desc: {
                isShow: false,
                result: {
                    name: '',
                    extra: '',
                    data: []
                }
            },
            form: {
                isShow: false,
                input: [],
                select: [],
                radio: [],
                checkbox: []
            }
        };
    },
    computed: {
        ...mapGetters(['keyword'])
    },
    components:{
        autocompleteSeacher
    },
    methods: {
        initPrompt(prompt){
           this.prompt = prompt;
        },
        addApplication(){
            this.$router.push({ path: "/extendApp"});
        },
        search() {
            if(this.keyword.trim()){
                this.$store.dispatch('REMOVE_RESULT');
                this.$router.push({ path: "/result", query: {keyword: encodeURIComponent(this.keyword)}});
            }
        }
    }
}
</script>

<style scoped lang="scss">
body{
    overflow: hidden;
}
.seacher-box{
    position: relative;
    width: 100%;
    height: 100%;
    .seacher-container{
        position: absolute;
        width: 50%;
        left: 50%;
        top: 20%;
        transform: translate(-50%, 0);
        .seacher-log{
            width: 100%;
            text-align: center;
            margin-bottom: 2em;
            i, span{
                font-size: 2.8em;
                color: #aaaaaa;
                letter-spacing: 0.05em
            }
        }
    }
    .promptTools{
        width: 65%;
        position: absolute;
        left: 50%;
        top: 52%;
        transform: translate(-50%, 0);
        .extra-result{
            border: #eeeeee 1px solid;
            box-shadow:-3px -3px 5px #eeeeee inset;
            border-radius: 6px;
            .desc-content{
                box-shadow:3px 3px 5px #eeeeee inset;
                padding: 0.8em 1.2em;
                display: flex;
                flex-flow: wrap row;
                justify-content: space-between;
                align-items: center;
                align-content: center;
                p{
                    width: 45%;
                    margin: 8px 0;
                    label{
                        display: inline-block;
                        color: #747474;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow:hidden;
                        width: 32%;
                        .desc-value{
                            font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
                            font-size: 18px;
                            color: #2F74EC;
                        }
                        &:not(:first-child){
                            text-align: right;
                        }
                    }
                }
            }
        }
    }
    .extend-application{
        position: fixed;
        right: 2em;
        bottom: 2em;
    }
}
</style>

