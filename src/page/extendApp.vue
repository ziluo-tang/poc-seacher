<template>
    <transition
          :duration="500"
          enter-active-class="animated zoomInRight"
          leave-active-class="animated zoomOutLeft"
    >
      <div class="extendApp">
          <div class="form-container">
            <h3 class="form-title">添加应用</h3>
            <el-form ref="form" :model="form" status-icon :rules="rules" label-width="80px">
              <el-form-item label="应用名称" prop="name">
                <el-input v-model="form.name" placeholder="输入应用名称"></el-input>
              </el-form-item>
              <el-form-item label="应用地址" prop="address">
                <el-input v-model="form.address" placeholder="输入应用地址"></el-input>
              </el-form-item>
              <el-form-item label-width="0">
                <el-button type="primary" size="mini" @click="onSubmit">添加</el-button>
                <el-button type="danger" size="mini" @click="onCancel">取消</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="turn-to-search">
              <el-button icon="el-icon-search" size="mini" circle @click="turnSearch"></el-button>
          </div>
      </div>
  </transition>
</template>

<script>
import { addApplication } from '../api/axios';
export default {
    data() {
        return {
            form: {
              type: 1,
              name: '',
              address: ''
            },
            rules: {
              name: [
                { required: true, message: '请输入应用名称', trigger: 'blur' }
              ],
              address: [
                { required: true, message: '请输入应用地址', trigger: 'blur' }
              ]
            }
        }
    },
    methods: {
        onSubmit() {
          this.$refs['form'].validate((valid) => {
            console.log(valid);
              if (valid) {
                addApplication({data: this.form}).then(res => {
                    if(res.resultCode==0){
                      this.$message({message: '添加成功', type: 'success' });
                      this.$refs['form'].resetFields();
                    }else{
                      this.$message({message: res.resultMsg, type: 'warning' });
                    }
                });
              } else {
                return false;
              }
          });
            
        },
        onCancel() {
            this.$refs['form'].resetFields();
        },
        turnSearch() {
          this.$router.push({ path: "/seacher"});
        }
    }
}
</script>

<style lang="scss" scoped>
.extendApp{
  position: relative;
  width: 100%;
  height: 100%;
  .form-container{
      position: absolute;
      width: 50%;
      left: 50%;
      top: 25%;
      transform: translate(-50%, 0);
      border: #cccccc 1px solid;
      border-radius: 6px;
      padding: 1em 2em;
      .form-title{
        text-align: center;
        letter-spacing: 2px;
        margin-bottom: 35px;
      }
  }
  .turn-to-search{
      position: fixed;
      right: 2em;
      bottom: 2em;
  }
}
</style>
<style>
  .form-container .el-form-item__content:last-child{
    text-align: center;
  }
</style>

