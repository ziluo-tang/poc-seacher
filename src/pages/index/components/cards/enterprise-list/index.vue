<template>
    <el-card shadow="hover">
        <div class="enterprise-item" v-for="(enterprise, index) in enterprises" :key="index" @click="checkEnterprise()">
            <div class="base-info">
                <div class="tag"></div>
                <div class="enterprise-header">
                    <el-image :src="enterprise.header">
                        <div slot="placeholder" class="image-slot">
                            加载中<span class="dot">...</span>
                        </div>
                    </el-image>
                </div>
                <div class="enterprise-attribute">
                    <label>{{enterprise.name}}</label>
                    <label>社会统一信用代码: {{enterprise.code}}</label>
                    <label>社会单位地址: {{enterprise.registerAddr}}</label>
                    <label>办公地址: {{enterprise.workAddr}}</label>
                </div>
            </div>
        </div>
        <pagination :totalPage="enterprises.length" :pageSize="pageSize" @sendPrevPage="sendPageChange" @sendCurrentPage="sendPageChange" @sendNextPage="sendPageChange"></pagination>
    </el-card>
</template>
<script>
/**
    @author 唐小新 1302947749@qq.com
 */
 /**
    模糊搜索企业列表
  */
export default {
    name: 'enterpriseList',
    data() {
        return {};
    },
    computed: {
        enterprises() {
            const enterprises = [{
                name: '杭州xxxx科技公司',
                header: require('../../../../../assets/img/u70.png'),
                code: 'aiwurh29847',
                registerAddr: '杭州市西湖区xxx办公楼',
                workAddr: '杭州市西湖区xxx办公楼'
            }, {
                name: '杭州xxxx科技公司',
                header: require('../../../../../assets/img/u70.png'),
                code: 'aiwurh29847',
                registerAddr: '杭州市西湖区xxx办公楼',
                workAddr: '杭州市西湖区xxx办公楼'
            }, {
                name: '杭州xxxx科技公司',
                header: require('../../../../../assets/img/u70.png'),
                code: 'aiwurh29847',
                registerAddr: '杭州市西湖区xxx办公楼',
                workAddr: '杭州市西湖区xxx办公楼'
            }];
            return enterprises;
        }
    },
    methods: {
        checkEnterprise() {

        },
        sendPageChange(val) {

        }
    }
}
</script>
<style lang="scss" scoped>
    .sort-tag{
        font-size: 1.1em;
        color: #888888;
        margin-bottom: 5px;
    }
    .enterprise-item{
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
                height: 80px;
                background-color: #409EFF;
                margin-right: 10px;
                border-radius: 3px;
            }
            .enterprise-header{
                margin-right: 1em;
                .el-image{
                    width: 5em;
                    height: 100%;
                    border: 1px solid #ACCBFF;
                    border-radius: 4px;
                    margin-bottom: -4px;
                }
            }
            .enterprise-attribute{
                label{
                    display: block;
                    width: 100%;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    margin: 0.3em 0;
                    font-size: small;
                    color: #555;
                    &:first-child{
                        font-size: 18px;
                        font-weight: 600;
                    }
                }
            }
        }
    }
</style>
