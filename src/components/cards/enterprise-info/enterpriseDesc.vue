<template>
    <el-card shadow="hover">
        <div class="sort-tag">社会单位基本属性</div>
        <div class="base-info">
            <div class="enterprise-header">
                <el-image :src="enterprise.header">
                    <div slot="placeholder" class="image-slot">
                        加载中<span class="dot">...</span>
                    </div>
                </el-image>
            </div>
            <div class="enterprise-attribute">
                <p>
                    <label>企业名称: {{enterprise.name}}</label>
                </p>
                <p>
                    <i class="iconfont iconheisvg"></i>
                    <i class="iconfont iconjisvg"></i>
                    <i class="iconfont icontousvg"></i>
                    <i class="iconfont iconpiansvg"></i>
                    <i class="iconfont iconhuangsvg"></i>
                    <i class="iconfont icondusvg"></i>
                    <i class="iconfont iconbaosvg"></i>
                    <a href="javascript:void(0);" @click="powerApply">高敏高密申请</a>
                </p>
                <p>
                    <label>英文名称: {{enterprise.ename}}</label>
                    <label>社会单位地址: {{enterprise.registerAddr}}</label>
                    <label>办公地址: {{enterprise.workAddr}}</label>
                </p>
                <p>
                    <label>社会统一信用代码: {{enterprise.code}}</label>
                    <label>行业类别: {{enterprise.type}}</label>
                    <label>企业人数: {{enterprise.nickname}}</label>
                    <label>是否上市: {{enterprise.birthday}}</label>
                    <label>注册时间: {{enterprise.nation}}</label>
                    <label>经营范围: {{enterprise.marriage}}</label>
                    <label>企业邮箱: {{enterprise.politics}}</label>
                    <label>联系电话: {{enterprise.religion}}</label>
                </p>
            </div>
        </div>
    </el-card>
</template>
<script>
export default {
    props: ['enterprise'],
    data() {
        return {};
    },
    methods: {
        powerApply() {
            alert('this is powerApply');
        }
    }
}
</script>
<style lang="scss" scoped>
.el-card{
    margin-bottom: 10px;
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
        .enterprise-header{
            margin-right: 2em;
            .el-image{
                width: 8em;
                height: 100%;
                border: 1px solid #ACCBFF;
                border-radius: 4px;
                margin-bottom: -4px;
            }
        }
        .enterprise-attribute{
            p{
                max-width: 80%;
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
                        margin-left: 2em;
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
                &:nth-child(3){
                    label{
                        display: block;
                        width: 100%;
                        padding: 0.2em 0;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow:hidden;
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
                        width: 50%;
                        padding: 0.2em 0;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow:hidden;
                    }
                }
            }
        }
    }
}
</style>