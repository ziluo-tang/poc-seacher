<template>
    <div class="seacher-box">
        <div class="seacher-container">
            <div class="seacher-log">
                <i class="iconfont iconjingwuicon_svg-"></i>
                <span>警务云搜</span>
            </div>
            <autocompleteSeacher :search="search" @initPrompt="initPrompt"></autocompleteSeacher>
            <div class="promptTools">
                <div v-if="desc.isShow">
                    <div v-for="(item, index) in desc.data" :key="index">
                        <span>{{item.key}}</span>  :  <span>{{item.value}}</span>
                    </div>
                </div>
                <el-form ref="form" :model="form" label-width="80px" v-if="form.isShow">
                    <el-form-item v-for="(inputItem, index) in form.input" :key="inputItem.key+'_'+index" :label="inputItem.desc">
                        <el-input v-model="inputItem.value"></el-input>
                    </el-form-item>
                    <el-form-item v-for="(selectItem, index) in form.select" :key="selectItem.key+'_'+index" :label="selectItem.desc">
                        <el-select v-model="selectItem.value" :placeholder="'请选择'+selectItem.desc">
                            <el-option v-for="optionItem in selectItem.item" :key="optionItem.lable" :label="optionItem.value" :value="optionItem.label"></el-option>
                        </el-select>
                    </el-form-item>
                    <!-- <el-form-item label="即时配送">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item> -->
                    <el-form-item v-for="(radioItem, index) in form.radio" :key="radioItem.key+'_'+index" :label="radioItem.desc">
                        <el-radio-group v-model="radioItem.value">
                            <el-radio v-for="radioInput in radioItem.item" :key="radioInput.label" :label="radioInput.value"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item v-for="(checkboxItem, index) in form.checkbox" :key="checkboxItem+'_'+index" :label="checkboxItem.desc">
                        <el-checkbox-group v-model="checkboxItem.value">
                            <el-checkbox v-for="checkInput in checkboxItem.item" :key="checkInput.label" :label="checkInput.label"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="turnToApplication">进入应用</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import autocompleteSeacher from '../components/autocomplete-seacher/index.vue';
export default {
    data() {
        return {
            prompt: null,
            desc: {
                isShow: false,
                data: []
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
    components:{
        autocompleteSeacher
    },
    methods: {
        initPrompt(prompt){
            console.log(prompt);
            if(prompt && prompt.length){
                this.prompt = prompt;
                if(prompt[0]._source.type===0){
                    //结果即达
                    if(prompt[0]._source.code){
                        const jsString = prompt[0]._source.code;
                        axios.get(`${prompt[0]._source.address}?${this.urlList}`).then(res => {
                            this.desc.isShow = true;
                            const response = res.data.data;
                            const code = eval(jsString);
                            this.desc.data = code;
                        }, err => {
                            this.$message();
                        });
                        
                    }else{
                        this.desc.isShow = false;
                    }
                }else if(prompt[0]._source.type===1){
                    //应用即达
                    if(prompt[0]._source.quickArg.length){
                        this.form.isShow = true;
                        for(let element in this.form){
                            if(element!='isShow'){
                                this.form[element] = [];
                            }
                        }
                        prompt[0]._source.quickArg.forEach(element => {
                            this.form[element.type].push(element);
                        });
                    }else{
                        this.form.isShow = false;
                    }
                }
            }else{
                this.form.isShow = false;
                this.desc.isShow = false;
            }
        },
        turnToApplication(){
            let url = this.prompt[0]._source.address;
            let param = '';
            for(let element in this.form){
                    if(element!='isShow'){
                        this.form[element].forEach(item => {
                            param = param + item.key + '=' + item.value;
                        });
                    }
                }
            window.open(`${url}?${param}`);
        },
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
        .promptTools{
            width: 100%;
            margin-top: 5em;
        }
    }
}
</style>

