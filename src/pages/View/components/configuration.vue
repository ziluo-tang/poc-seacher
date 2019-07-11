<template>
    <div class="configBox" :style="{'min-height': availHeight + 'px'}">
      <p style="font-size: 30px;font-weight:bold;margin:0px 0px 23px 0px;padding-top:23px;text-align: center">Rule规则配置</p>
      <div class="ruleConfig">
        <div style="display:flex;justify-content: center">
          <p style="margin:0px;line-height: 40px;margin-right:20px">Rule规则名称:</p>
          <el-input v-model="input" :readonly="info" placeholder="请输入内容" style="width: 70%"></el-input>
        </div>
        <div style="display:flex;justify-content: center;margin-top: 10px" >
          <p style="margin:0px;line-height: 40px;margin-right:20px">Rule规则作者:</p>
          <el-input v-model="name" :readonly="info_name" placeholder="请输入姓名" style="width: 70%"></el-input>
        </div>
        <div class="configItem" style="display:flex;justify-content: center">
          <p style="margin:0px;line-height: 40px;margin-right:20px">Rule规则书写:</p>
          <div style="width:70%;display:flex;justify-items:start">
            <div :style="{width:width,height:height}" class="Editor">
              <el-button class="clear" size="mini" @click="clear()">清除</el-button>
              <codemirror ref="myEditor" v-model="code" :options="cmOptions"></codemirror>
            </div>
            <codemirror ref="consoleEditor" v-model="test_code" :options="Options" style="width:50%;" v-if="myConsole"></codemirror>
          </div>
        </div>
        <div style="display: flex;justify-content:left;padding-top: 20px">
          <el-button style="margin-left: 50px" @click="submit()" v-if="buttonName">提交保存</el-button>
          <el-button style="margin-left: 50px" @click="update()" v-if="updateName">更新</el-button>
          <el-button @click="test()">测试</el-button>
        </div>
      </div>
      <el-dialog
        :visible.sync="dialogVisible"
        width="80%"
        class="codeDialog" >
          <el-input
            type="textarea"
            :rows="8"
            placeholder="请输入内容"
            v-model="textarea">
          </el-input>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false" size="mini">取 消</el-button>
            <el-button type="primary" @click="submitTest()" size="mini">确 定</el-button>
          </span>
      </el-dialog>
    </div>
</template>
<script>
  //导入组件
  import { codemirror } from "vue-codemirror";
  //导入使用的语言语法定义文件
  require("codemirror/mode/python/python.js");
  require("codemirror/mode/javascript/javascript.js");
  require("codemirror/mode/clike/clike.js");
  require("codemirror/mode/shell/shell.js");
  //导入选中的theme文件
  require("codemirror/theme/blackboard.css");
  //导入自动提示核心文件及样式
  require("codemirror/addon/hint/show-hint.css");
  require("codemirror/addon/hint/show-hint.js");
  //导入指定语言的提示文件
  require("codemirror/addon/hint/javascript-hint.js");
  import {add_New,update_data,testNode} from '../service/getData'
  export default {
    name: "configuration",
    //注册组件
    components: {
      codemirror
    },
    data(){
      return{
        width:"100%",
        height:"500px",
        myConsole:false,
        input:'',
        name:'',
        info:false,
        info_name:false,
        availHeight:'',
        //编辑器的默认输入值
        code: "var a=1\nlet b=2",
        cmOptions: {
          tabSize: 4,
          mode: "text/javascript", //识别的语言javascript
          // mode:"text/x-java",  //识别的语言java
          // mode:"text/x-sh",   //识别的语言shell脚本
          theme: "blackboard",  //编辑器的主题
          lineNumbers: true,   //显示行号
          line: true
        },
        test_code:'>>>输出为：\n',
        Options: {
          tabSize: 4,
          mode: "text/javascript", //识别的语言javascript
          // mode:"text/x-java",  //识别的语言java
          // mode:"text/x-sh",   //识别的语言shell脚本
          theme: "blackboard",  //编辑器的主题
          lineNumbers: true,   //显示行号
          line: true,
          readOnly:true    //只读
        },
        dialogVisible:false,
        textarea:'',
        buttonName:true,
        updateName:false,
        id:''
      }
    },
    mounted(){
      console.log(33);
      this.getHeight();
    },
    methods:{
      submit(){
        if(this.input == ''){
          this.$elementMessage('规则名不能为空','warning')
        }else if(this.code == ''){
          this.$elementMessage('规则书写内容不能为空','warning')
        }else {
          console.log(this.input,this.name,this.code)
          let addData = add_New(this.input,this.name,this.code)
          addData.then((res)=>{
            if(res.status === 0){
              this.id = res.data.id
              this.$elementMessage('保存成功','success')
              // this.input = '';
              this.info = true
              this.info_name = true
              this.buttonName = false
              this.updateName = true
            }else {
              this.$elementMessage('保存失败','success')
            }
          })
        }
      },
      update(){
        if(this.input == ''){
          this.$elementMessage('规则名不能为空','warning')
        }else if(this.code == ''){
          this.$elementMessage('规则书写内容不能为空','warning')
        }else {
          console.log(this.input,this.code)
          let addData = update_data(this.input,this.code,this.id)
          addData.then((res)=>{
            if(res.status === 0){
              this.$elementMessage('更新成功','success')
              // this.input = '';
              // this.buttonName = false
            }else {
              this.$elementMessage('更新失败','success')
            }
          })
        }
      },
      getHeight(){
        this.availHeight = window.screen.availHeight;
        let myEditor = this.$refs.myEditor.codemirror;
        myEditor.setSize('100%','500px')
      },
      test(){
        this.myConsole = true
        this.width = '50%'
        this.dialogVisible = true
        this.$nextTick(()=>{
          let myConsole = this.$refs.consoleEditor.codemirror;
          myConsole.setSize('100%','500px')
        })
      },
      submitTest(){
        let data = {"text":this.textarea}
        let testData = testNode(data)
        testData.then((res)=>{
          if(res.status === 0){
            this.test_code = '>>>输出为：\n' +JSON.stringify(res,null,Object.keys(res).length)
            this.textarea = ''
            this.$elementMessage('测试成功','success')
          }else{
            this.$elementMessage('测试失败','error')
          }
        })
        this.dialogVisible = false
      },
      clear(){
        this.code = '';
        this.input = '';
        this.name = ''
        this.info = false
        this.info_name = false
        this.buttonName = true;
        this.updateName = false

      }
    },
  }
</script>

<style scoped>
.configBox{
  width: 100%;
  /*height:100% ;*/
  box-sizing: border-box;
  background-color:whitesmoke;

}
  .configItem{
    width: 100%;
    margin-top: 60px;
  }
  .Editor{
    position: relative;
  }
  .clear{
    position: absolute;
    top:0px;
    right:0px;
    background: white;
    color: #000;
    z-index: 999;
  }
</style>
