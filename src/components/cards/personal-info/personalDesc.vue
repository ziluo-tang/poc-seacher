<template>
    <el-card shadow="hover">
        <div class="sort-tag">人员基本信息</div>
        <div class="base-info">
            <div class="person-header">
                <el-image :src="person.header">
                    <div slot="placeholder" class="image-slot">
                        加载中<span class="dot">...</span>
                    </div>
                </el-image>
            </div>
            <div>
                <p>
                    <label>姓名：{{person.name}}</label>
                    <label>年龄：{{person.age}}</label>
                    <label>身份证：{{person.IDcard || person.key}}</label>
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
                    <label>性别：{{person.sexy}}</label>
                    <label>曾用名：{{person.oldname}}</label>
                    <label>别名/绰号：{{person.nickname}}</label>
                    <label>出生日期：{{person.birthday}}</label>
                    <label>民族：{{person.nation}}</label>
                    <label>婚姻状况：{{person.marriage}}</label>
                    <label>政治面貌：{{person.politics}}</label>
                    <label>宗教信仰：{{person.religion}}</label>
                    <label>身高：{{person.height}}</label>
                    <label>体重：{{person.weight}}</label>
                    <label>血型：{{person.blood}}</label>
                    <label>健康状况：{{person.healthy}}</label>
                </p>
            </div>
        </div>
    </el-card>
</template>
<script>
export default {
    props: ['person'],
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
</style>
