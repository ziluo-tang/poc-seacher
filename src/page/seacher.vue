<template>
    <div class="seacher-box">
        <div class="seacher-container">
            <div class="seacher-log">
                 <el-image :src="logo">
                    <div slot="placeholder" class="image-slot">
                        加载中<span class="dot">...</span>
                    </div>
                </el-image>
            </div>
            <autocompleteSeacher :search="search" @initPrompt="initPrompt"></autocompleteSeacher>
            <div class="promptTools">
                <div v-if="desc.isShow">
                    <h4>{{desc.result.name}}</h4>
                    <div v-for="(item, index) in desc.result.data" :key="index">
                        <span>{{item.key}}</span>  :  <span>{{item.value}}</span>
                    </div>
                </div>
                <el-form ref="form" :model="form" label-width="80px" v-if="form.isShow">
                    <el-form-item v-for="(inputItem, index) in form.input" :key="inputItem.key+'_'+index" :label="inputItem.desc">
                        <el-input v-model="inputItem.value"></el-input>
                    </el-form-item>
                    <el-form-item v-for="(selectItem, index) in form.select" :key="selectItem.key+'_'+index" :label="selectItem.desc">
                        <el-select v-model="selectItem.value" :placeholder="'请选择'+selectItem.desc">
                            <el-option v-for="optionItem in selectItem.item" :key="optionItem.lable" :label="optionItem.label" :value="optionItem.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <!-- <el-form-item label="即时配送">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item> -->
                    <el-form-item v-for="(radioItem, index) in form.radio" :key="radioItem.key+'_'+index" :label="radioItem.desc">
                        <el-radio-group v-model="radioItem.value">
                            <el-radio v-for="radioInput in radioItem.item" :key="radioInput.value" :label="radioInput.value"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item v-for="(checkboxItem, index) in form.checkbox" :key="checkboxItem+'_'+index" :label="checkboxItem.desc">
                        <el-checkbox-group v-model="checkboxItem.value">
                            <el-checkbox v-for="checkInput in checkboxItem.item" :key="checkInput.value" :label="checkInput.value"></el-checkbox>
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
            logo: require('../assets/img/search-logo.png'),
            prompt: null,
            desc: {
                isShow: false,
                result: {
                    name: '',
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
    components:{
        autocompleteSeacher
    },
    methods: {
        initPrompt(prompt){
            console.log(prompt);
            if(prompt && prompt.length){
                this.prompt = prompt;
                let promptItem = this.prompt[0];
                if(promptItem._source.type===0){
                    this.form.isShow = false;
                    //结果即达
                    if(promptItem._source.code){
                        let params = new Array();
                        let keyword = this.$store.state.search.keyword;
                        let keywordArr = keyword.split(' ');
                        let argsArr = promptItem._source.args.split(';');
                        argsArr.forEach((element, index) => {
                            let argItemArr = element.split(',');
                            if (index + 1 <= keywordArr.length - 1 && keywordArr[index + 1] != "") {
                                params.push(`${argItemArr[1]}=${keywordArr[index + 1]}`);
                            }else{
                                params.push(`${argItemArr[1]}=${eval(argItemArr[3].substr(1, argItemArr[3].length - 2))}`);
                            }
                        });
                        const jsString = promptItem._source.code;
                        axios.get(`${promptItem._source.address}?${params.join('&')}`).then(res => {
                            if(res.data.errorCode === 0) {
                                this.desc.isShow = true;
                                const response = res.data.data;
                                const code = eval(eval(jsString));
                                this.desc.result = {
                                    name: promptItem._source.name,
                                    data: code
                                };
                            }else{
                                this.$message({message: res.errMsg, type: 'warning' });
                            }
                        }, err => {
                            this.$message({message: '请求异常', type: 'warning' });
                        });
                    }else{
                        this.desc.isShow = false;
                    }
                }else if(promptItem._source.type===1){
                    this.desc.isShow = false;
                    //应用即达
                    if(promptItem._source.quickArg.length){
                        this.form.isShow = true;
                        for(let element in this.form){
                            if(element!='isShow'){
                                this.form[element] = [];
                            }
                        }
                        promptItem._source.quickArg.forEach(element => {
                            // if(element.type==='select' || element.type==='radio' || element.type==='checkbox'){
                            //     element.value = element.item[0].value;
                            // }
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
            let param = new Array;
            for(let element in this.form){
                    if(element!='isShow'){
                        this.form[element].forEach(item => {
                            param.push(`${item.key}=${item.value}`);
                        });
                    }
                }
            window.open(`${url}?${param.join('&')}`);
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
            margin-bottom: 2em;
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

