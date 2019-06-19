<template>
  <div class="boxIndex">
    <div>应用收录</div>
    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="应用类型" prop="type">
         <el-select v-model="ruleForm.type" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="应用名称" prop="name">
        <el-input type="string" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="应用链接" prop="address">
        <el-input type="string"  v-model="ruleForm.address"></el-input>
      </el-form-item>
      <!-- v-if="ruleForm.type === 0" -->
      <el-form-item v-if="ruleForm.type === 0" label="应用参数" prop="args">
        <div @click="addParameter" class="addParameter">增加应用参数</div>
        <br>
        <div v-for="(item,index) in ruleFormTwo" :key="index">
          <el-form-item label="描述" prop="desc">
            <el-input type="string"  v-model="item.desc"></el-input>
          </el-form-item>
          <el-form-item label="名称" prop="field">
            <el-input type="string"  v-model="item.field"></el-input>
          </el-form-item>
          <el-form-item label="类型" prop="type">
            <el-input type="string"  v-model="item.type"></el-input>
          </el-form-item>
          <el-form-item label="表达函数" prop="default">
            <el-input type="string"  v-model="item.default"></el-input>
          </el-form-item>
          <div class="xhx"></div>
        </div>
      </el-form-item>
      <!-- v-if="ruleForm.type === 0" -->
      <el-form-item v-if="ruleForm.type === 0" label="应用code" prop="code">
        <el-input  type="textarea" :rows="2" placeholder="请输入内容" v-model="ruleForm.code"></el-input>
      </el-form-item>
      <!-- v-if="ruleForm.type === 1" -->
      <el-form-item v-if="ruleForm.type === 1" label="应用即达参数">
        <div @click="addParams" class="addParameter">增加参数</div>
        <div v-for="(item,index) in paramsForm" :key="index">
          <div @click="addValue(item)" class="addParameter">添加</div>
          <div v-for="(groud,i) in item.item" :key="i">
            <el-form-item label="值">
              <el-input type="string"  v-model="groud.value"></el-input>
            </el-form-item>
            <el-form-item label="标签">
              <el-input type="string"  v-model="groud.label"></el-input>
            </el-form-item> 
          </div>
          <!-- <el-form-item v-for="(val,i) in item.value" :key="i" label="值">
            <el-input type="string"  v-model="val.value"></el-input>
          </el-form-item>
          <el-form-item v-for="(val,i) in item.label" :key="i" label="标签">
            <el-input type="string"  v-model="val.label"></el-input>
          </el-form-item> -->
          
          <el-form-item label="类型" prop="type">
            <el-input type="string"  v-model="item.type"></el-input>
          </el-form-item>
          <el-form-item label="关键词" prop="key">
            <el-input type="关键词"  v-model="item.key"></el-input>
          </el-form-item>
           <el-form-item label="描述" prop="desc">
            <el-input type="描述"  v-model="item.desc"></el-input>
          </el-form-item> 
          <div class="xhx"></div>
        </div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" size="mini" @click="submitForm">提交</el-button>
        <el-button size="mini">取消</el-button>
        <el-button size="mini"><router-link to="/seacher">搜索</router-link></el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      ruleForm: {
        type: "", //类型
        name: "", // 名称
        address: "", // 导航地址
        args: "", // 应用参数
        code: "", // 可执行js代码
        // params:"", //应用即达参数
      },
      ruleFormTwo: [
        {
          desc: "",
          field: "",
          type: "",
          default: ""
        }
      ],
      paramsForm:[{
        item:[{
          value:'',
          label:''
        }],
        //value:[{value:''}],
        //label:[{label:''}],
        type:'',
        key:''
      }],
      options:[{
          value: 0,
          label: '结果即达'
        },{
          value:1,
          label:'应用即达'
        }
      ]
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 增加应用参数
    addParameter() {
      let args = {
        desc: "",
        field: "",
        type: "",
        default: "",
        id:''
      };
      this.ruleFormTwo.push(args);
    },
    //添加应用即达参数
    addParams() {
      const param = {
        item:[{
          value:'',
          label:''
        }],
        //value:[{value:''}],
        //label:[{label:''}],
        type:'',
        key:'',
        desc:''
      }
      this.paramsForm.push(param);
    },
    addValue(item) {
      const obj = {
        value:'',
        label:''
      }
      
      item.item.push(obj);
    },
    // 点击请求
    submitForm() {
      if(this.ruleForm.type === '') {
        alert("请填写类型");
        return;
      }
      // 处理应用参数
      let dataArr = []
      for(let s = 0 ;s<this.ruleFormTwo.length;s++){
        this.ruleFormTwo[s].default = `\"${this.ruleFormTwo[s].default}\"`
      }

      for(let i =0; i<this.ruleFormTwo.length;i++){
        let arr = []
        let arrString = ''
        for(let k in this.ruleFormTwo[i]){
          arr.push((this.ruleFormTwo[i])[k])
        }
        arrString = arr.join(',')
        console.log(arrString)
         dataArr.push(arrString)
      }
      console.log(dataArr,'这个是什么动')
      // 字符串拼接
      let dataArrString = ''
      dataArrString = dataArr.join(';')
      console.log(dataArrString,'这里')
      this.ruleForm.args = dataArrString

      if(this.ruleForm.type === 0) {
        // this.ruleForm.params = "";
        this.ruleForm.quickArg = [];
      }else if(this.ruleForm.type === 1) {
        this.ruleForm.code = "";
        this.ruleForm.args = "";
        let quickArr = [];
        for (const param of this.paramsForm) {
          // let valueList = [],labelList = [];
          console.log(param);
          // for(const val of param.value) {
          //   valueList.push(val.value);
          // }
          // for(const lab of param.label) {
          //   labelList.push(lab.label);
          // } 
          const obj = {
            // value:valueList,
            // label:labelList,
            item:param.item,
            type:param.type,
            key:param.key,
            desc:param.desc
          }
          quickArr.push(obj);
        }
        this.ruleForm.quickArg = quickArr;
      }
      // 获取当前时间戳
      // this.ruleForm.id = String((new Date()).getTime()) ;
      let data = {
        data:this.ruleForm
      }
        axios
          .post("http://47.103.73.10:8802/index/addApplication/", (data), {
          })
          .then(
            res => {
              alert('请求成功')
            },
            err => {
              console.log(666);
            }
          );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.boxIndex {
  width: 50%;
  margin: 0 auto;
}
.demo-ruleForm {
  border: 1px solid gray;
  padding: 30px;
  box-sizing: border-box;
}
.addParameter {
  cursor: pointer;
  text-align: right;
  color: blue;
}
.xhx {
  border: 0.5px dashed;
  width: 80%;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20%;
  color: brown;
}
.el-button a{
  text-decoration: none;
  color: #606266
}
</style>
