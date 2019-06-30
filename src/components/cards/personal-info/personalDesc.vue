<template>
    <el-card shadow="hover">
        <div class="sort-tag">{{tag || '人员基本信息'}}</div>
        <div class="base-info">
            <div class="person-header">
                <el-image :src="person.face">
                    <div slot="placeholder" class="image-slot">
                        加载中<span class="dot">...</span>
                    </div>
                </el-image>
            </div>
            <div class="person-info">
                <p>
                    <label>姓名：{{person.xm}}</label>
                    <label>年龄：{{person.csrq | formatDate | calculateAge}}</label>
                    <label>身份证：{{person.gmsfhm}}</label>
                </p>
                <p>
                    <i v-if="person.sfqkry==1" class="iconfont iconqiansvg"></i>
                    <i v-if="person.sfztry==1" class="iconfont icontaosvg"></i>
                    <i v-if="person.sfskry==1" class="iconfont iconkongsvg"></i>
                    <i v-if="person.sfswry==1" class="iconfont iconwensvg"></i>
                    <i v-if="person.sfzdsfry==1" class="iconfont iconfangsvg"></i>
                    <i v-if="person.sfsdry==1" class="iconfont icondusvg"></i>
                    <a href="javascript:void(0);" @click="powerApply">高敏高密申请</a>
                </p>
                <p>
                    <label>性别：{{person.xb}}</label>
                    <label>曾用名：{{person.cym}}</label>
                    <label>别名/绰号：{{person.bmch}}</label>
                    <label>英文名：{{person.ywxm}}</label>
                    <label>出生日期：{{person.csrq | formatDate}}</label>
                    <label>民族：{{person.mz}}</label>
                    <label>婚姻状况：{{person.hyzk}}</label>
                    <label>宗教信仰：{{person.zjxy}}</label>
                    <label>身高：{{person.sg}}</label>
                    <label>体重：{{person.tz}}</label>
                    <label>足长：{{person.zc}}</label>
                    <label>血型：{{person.xx}}</label>
                    <label>出生地：{{person.csd}}</label>
                    <label>籍贯地：{{person.jgd}}</label>
                </p>
            </div>
        </div>
    </el-card>
</template>
<script>
export default {
    props: ['person', 'tag'],
    data() {
        return {};
    },
    methods: {
        powerApply() {
            this.$message({message: '申请成功', type: 'success'});
        }
    },
    filters: {
        formatDate(val) {
            let year = val.substring(0, 4);
            let month = val.substring(4, 6);
            let date = val.substring(6);
            return `${year} / ${month} / ${date}`;
        },
        calculateAge(val) {
            let date = new Date();
            let curYear = date.getFullYear();
            let bYear = val.split('/')[0];
            return curYear - bYear;
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../../assets/css/custom.scss";
    .sort-tag{
        font-size: 1.1em;
        font-weight: 600;
        color: #409EFF;
        padding: 0 0.5em;
        border-left: 2px solid #409EFF;
    }
    .base-info{
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        padding: 1em 0.8em;
        .person-header{
            margin-right: 2em;
            .el-image{
                width: 8em;
                height: 100%;
                border: 1px solid #ACCBFF;
                border-radius: 4px;
                margin-bottom: -4px;
            }
        }
        .person-info{
            p{
                max-width: 100%;
                margin: 0;
                padding: 0.2em 0.5em;
                font-size: small;
                color: #606266;
                &:first-child{
                    font-weight: 600;
                    background-color: rgba(248,250,251,1);;
                    border-radius: 4px;
                    padding: 0.5em;
                    label:not(:first-child){
                        margin-left: 3em;
                    }
                }
                &:nth-child(2){
                    padding: 0.5em;
                    label{
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        text-align: center;
                        border: 1px solid saddlebrown;
                        border-radius: 50%;
                    }
                    a{
                        float: right;
                    }
                }
                &:last-child{
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: flex-start;
                    align-items: center;
                    align-content: center;
                    label{
                        display: block;
                        width: 25%;
                        padding: 0.2em 0;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow:hidden;
                    }
                }
            }
        }
    }
</style>
