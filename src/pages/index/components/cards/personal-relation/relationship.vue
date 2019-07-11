<template>
    <el-card shadow="hover">
      <div class="personal-item">
        <div class="base-info">
          <div class="tag"></div>
          <div class="person-header">
            <div class="header-image">
              <img-card ref="card"></img-card>
            </div>
          </div>
          <div class="person-info">
            <p>关系 | 朋友关系</p>
            <div class="person-information">
              <p>
                <label >姓名：李队长</label>
                <label >身份证：2311...0000</label>
                <label >性别：男</label>
                <label >年领：28</label>
              </p>
              <p>
                <label >姓名：李队长</label>
                <label >身份证：2311...0000</label>
                <label >性别：男</label>
                <label >年领：28</label>
              </p>
            </div>
          </div>
          <div class="endTag"></div>
        </div>
      </div>
    </el-card>
</template>

<script>
  import imgCard from './imgCard'
    export default {
        name: "relationship",
        components:{imgCard},
        data(){
          return{

          };
        },
    }
</script>

<style lang="scss" scoped>
  .sort-tag{
    font-size: 1.1em;
    color: #888888;
    margin-bottom: 5px;
  }
  .personal-item{
    margin: 15px;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover{
      transform: scale(1.008);
    }
    .base-info{
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      padding: 0 1em;
      .tag{
        width: 3px;
        height: 100px;
        background-color: #409EFF;
        margin-right: 15px;
        border-radius: 5px;
      }
      .person-header{
        margin-right: 1.5em;
        .header-image{
          width: 155px;
          height: 110px;
          /*border: 1px solid #ACCBFF;*/
          border-radius: 4px;
          margin-bottom: -4px;
        }
      }
      .person-info{
        width: 100%;
        p{
          font-size: 24px;
          margin: 0;
        }
        .person-information{
          width: 100%;
          display: flex;
          justify-content: flex-start;
          p{
            width:10em;
            margin: 0;
            padding: 0.15em;
            font-size: small;
            color: #555;
            label{
              display: block;
              width: 100%;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow:hidden;
              margin: 0.1em 0;
            }
            .status-tag{
              float: right;
              margin: 0 0.1em;
            }
          }
        }
      }
      .endTag{
        width: 4px;
        height: 100px;
        background: rgba(248,250,251,1);
        /*margin-right: 15px;*/
        border-radius: 5px;
      }
    }
  }
</style>
