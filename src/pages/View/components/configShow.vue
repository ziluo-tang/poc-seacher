<template>
  <div class="webConfig" :style="{'min-height': availHeight + 'px'}">
    <p style="width: 100%;text-align: center;font-size:30px;font-weight: bold">Rule规则展示</p>
    <el-button class="textExport" @click="textExport()">导出文件</el-button>
    <!-- <a href="javascript:;" class="textExport">导出文件
      <input type="file" multiple="multiple" ref="file" id="file" @change="change()">
    </a> -->
    <div class="webConfig_box">
      <el-table
        :data="allData"
        tooltip-effect="dark"
        style="width: 100%;"
        :cell-style="{padding:'5px 0'}">
        <el-table-column
          prop="script_name"
          label="规则名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="author"
          label="作者"
          width="180">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="创建时间"
          :formatter="formatTime"
          width="180">
        </el-table-column>
        <el-table-column
          prop="update_time"
          :formatter="formatTime"
          label="更新时间">
        </el-table-column>
        <el-table-column
          label="状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.status"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="已完成"
              inactive-text="未完成"
              @change.self="switchChange(scope.row.id,scope.row.status)" :key="scope.row.id">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <i class="el-icon-edit font-mouse-move handle" @click="showDialog(scope.row)">更新 </i>
            <i class="el-icon-delete font-mouse-move handle" @click.stop="deleteData(scope.row.id)">删除</i>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="webConfigBox">
      <el-dialog
        :visible.sync="dialogVisible"
        class="codeDialog"
        :fullscreen=true
        :modal="false"
        >
        <div style="display:flex;justify-items:start;height:100%">
          <codemirror ref="code"  v-model="dialogData.script_content"  :options="cmOptions" :style="{width:width}"></codemirror>
          <codemirror ref="testCode" v-model="test_code" :options="Options" style="width:50%;" v-if="myConsole"></codemirror>
        </div>
        <el-dialog :visible.sync="dialogTest" width="80%" class="codeDialog"  append-to-body>
          <el-input
            type="textarea"
            :rows="8"
            placeholder="请输入内容"
            v-model="textarea">
          </el-input>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogTest = false" size="mini">取 消</el-button>
            <el-button type="primary" @click="submitTest()" size="mini">确 定</el-button>
          </span>
      </el-dialog>
        <span slot="footer" class="dialog-footer">
          <el-button size="mini" @click="test()">测试</el-button>
          <el-button @click="dialogVisible = false" size="mini">取 消</el-button>
          <el-button type="primary" @click="saveUp(dialogData.script_name,dialogData.script_content,dialogData.id)" size="mini">保存</el-button>
          <el-button type="primary" @click="codeUp(dialogData.script_name,dialogData.script_content,dialogData.id)" size="mini">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <el-dialog
        :visible.sync="dialogUrl"
        width="80%"
        class="codeDialog"
        >
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogUrl = false" size="mini">取 消</el-button>
            <el-button type="primary" @click="load()" size="mini">确 定</el-button>
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
  let moment = require('moment');
  import {getList_all,update_data,delete_data,testNode,exportText,switchChange} from '../service/getData'
    export default {
      name: "configShow",
      //注册组件
      components: {
        codemirror
      },
      data(){
        return{
          width:"100%",
          dialogData:'',
          dialogTest:false,
          textarea:'',
          test_code:'',
          myConsole:false,
          dialogVisible:false,
          myEditor:'',
          allData:[],
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
            line: true,
            // readOnly:true    //只读
          },
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
          dialogUrl:false,
          input:'',
        }
      },
      mounted(){
        this.getList();
        this.getHeight();
      },
      methods:{
        switchChange(id,status){
          if(status == true){
            status = 1
          }else {
            status = 0
          }
          let data = switchChange(id,status)
          data.then((res)=>{
            console.log(res)
            if(res.status == 0){
              this.$elementMessage('更改成功','success')
              this.getList()
            }else {
              this.$elementMessage('更改失败','error')
              this.getList()
            }
          })
        },
        //时间格式转换
        formatTime(row,column) {
          if(column.label === '创建时间'){
            const time = moment(row.create_time).format("YYYY-MM-DD HH:mm");
            return time;
          }else if(column.label === '更新时间'){
            const time = moment(row.update_time).format("YYYY-MM-DD HH:mm");
            return time;
          }
        },
        //获取可视高度
        getHeight(){
          this.availHeight = window.screen.availHeight;
        },
        //获取列表数据
        getList() {
          let data = getList_all();
          data.then((res)=>{
            if(res.status == "0"){
              this.allData = res.data;
              this.allData.forEach(ele=>{
                if(ele.status == 1){
                  ele.status = true
                }else {
                  ele.status = false
                }
              })
              console.log(this.allData);
            }
          })
        },
        //点击显示更新弹窗
        showDialog(item){
          this.dialogData = item
          console.log(this.dialogData)
          this.dialogVisible = true
          this.$nextTick(()=>{
            let mirror = this.$refs.code.codemirror
            mirror.setSize('100%','600px')
          })
        },
        //点击保存完成更改上传
        saveUp(ruleName,ruleContent,ruleId){
          let data = update_data(ruleName,ruleContent,ruleId)
          data.then((res)=>{
            console.log(res)
            if(res.status === 0){
              this.getList();
              this.$elementMessage('更改成功','success')
            }else {
              this.getList();
              this.$elementMessage('更改失败','error')
            }
          })
        },
        //点击确定完成更改上传
        codeUp(ruleName,ruleContent,ruleId){
          let data = update_data(ruleName,ruleContent,ruleId)
          data.then((res)=>{
            console.log(res)
            if(res.status === 0){
              this.getList();
              this.dialogVisible = false
              this.$elementMessage('更改成功','success')
            }else {
              this.getList();
              this.dialogVisible = true
              this.$elementMessage('更改失败','error')
            }
          })
        },
        //删除当前列表数据
        deleteData(ruleId){
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            let _deleteData = delete_data(ruleId)
            _deleteData.then((res)=>{
              if(res.status === 0){
                this.getList();
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
              }else {
                this.$elementMessage('删除失败','error')
              }
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        },
        test(){
          this.dialogTest = true
          this.myConsole = true
          this.width = '50%'
          this.$nextTick(()=>{
            let myConsole = this.$refs.testCode.codemirror;
            myConsole.setSize('100%','600px')
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
          this.dialogTest = false
        },
        textExport(){
          this.dialogUrl = true
        },
        load(){
          let data = exportText(`/Users/zhzy/Desktop/${this.input}`)
          data.then((res)=>{
            if(res.status === 0){
              this.$elementMessage('导出成功','success')
            }else{
              this.$elementMessage('导出失败','error')
            }
          })
        },
        // change(){
        //  let url = $('#file').val()
        //  let file = this.$refs.file.value

        //  console.log(file)
        //  console.log(url)
        // //  exportText(url)
        // }
      }
    }
</script>

<style scoped>
  .webConfig{
    padding-top: 20px;
    width: 100%;
    height: 100%;
    background-color:whitesmoke;
    position: relative;
  }

  .webConfig_box{
    display: flex;
    justify-content: center;
    padding: 0 20px;
  }
  .configBox{
    width: 90%;
  }
  .button_box{
    display: flex;
    justify-content: start;
  }
  .handle {
    border: 1px solid #DBDBDB !important;
    border-radius: 2px !important;
    padding: 6px 0px;
    width: 63px;
    text-align: center;
  }

  .handle:hover {
    border: 1px solid #666666 !important;
    cursor: pointer;
  }
  .textExport{
    position: absolute;
    top:60px;
    right: 20px;
    display: inline-block;
    background: #D0EEFF;
    border: 1px solid #99D3F5;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: #1E88C7;
    text-decoration: none;
    text-indent: 0;
    line-height: 20px;
  }
#file{
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
}
.textExport:hover {
    background: #AADFFD;
    border-color: #78C3F3;
    color: #004974;
    text-decoration: none;
}
</style>
<style>
  .webConfigBox .el-dialog{
    background-color: #0C1021;
  }
   .webConfigBox .codeDialog .el-dialog .dialog-footer button:nth-of-type(1){
    border: 0;
    color: white;
    background: linear-gradient(to right, #22bbd4, #2692ef);
  }
  .webConfigBox .codeDialog .el-dialog .dialog-footer button:nth-of-type(2){
    background: linear-gradient(to right, #22bbd4, #2692ef);
    border: 0;
    color: white;
  }
  .webConfigBox .codeDialog .el-dialog .dialog-footer button:nth-of-type(3){
    border: 0;
    color: white;
    background: linear-gradient(to right, #22bbd4, #2692ef);
  }
</style>
