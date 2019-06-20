<template>
    <el-card shadow="hover">
        <div class="register-item" v-for="(register, index) in registers" :key="index" @click="checkRegister()">
            <div class="base-info">
                <div class="tag"></div>
                <div class="register-header">
                    <el-image :src="register.header">
                        <div slot="placeholder" class="image-slot">
                            加载中<span class="dot">...</span>
                        </div>
                    </el-image>
                </div>
                <div>
                    <p>{{register.master}}</p>
                    <p>
                        <label>户号: {{register.registerId}}</label>
                        <label>所属行政区划分: {{register.region}}</label>
                        <label>属性: {{register.attribute}}</label>
                        <label>所属派出所: {{register.policeStation}}</label>
                        <label>户籍地址: {{register.address}}</label>
                        <label>居（村）委会: {{register.country}}</label>
                    </p>
                </div>
            </div>
        </div>
        <pagination :totalPage="registers.length" :pageSize="pageSize" @sendPrevPage="sendPageChange" @sendCurrentPage="sendPageChange" @sendNextPage="sendPageChange"></pagination>
    </el-card>
</template>
<script>
/**
    @author 唐小新 1302947749@qq.com
 */
 /**
    模糊搜索户籍列表
  */
export default {
    name: 'registerList',
    data() {
        return {};
    },
    computed: {
        registers() {
            const registers = [{
                registerId: 'ZAS2y492742',
                attribute: '城镇户口',
                address: '杭州市西湖区xxx街道xxx号',
                region: '杭州市西湖区',
                policeStation: '杭州市西湖区派出所',
                country: 'xxx居委会',
                master: '张xx',
                header: require('../../../assets/img/u70.png')
            }, {
                registerId: 'ZAS2y492742',
                attribute: '城镇户口',
                address: '杭州市西湖区xxx街道xxx号',
                region: '杭州市西湖区',
                policeStation: '杭州市西湖区派出所',
                country: 'xxx居委会',
                master: '张xx',
                header: require('../../../assets/img/u70.png')
            }, {
                registerId: 'ZAS2y492742',
                attribute: '城镇户口',
                address: '杭州市西湖区xxx街道xxx号',
                region: '杭州市西湖区',
                policeStation: '杭州市西湖区派出所',
                country: 'xxx居委会',
                master: '张xx',
                header: require('../../../assets/img/u70.png')
            }];
            return registers;
        }
    },
    methods: {
        checkRegister() {

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
    .register-item{
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
            .register-header{
                margin-right: 1em;
                .el-image{
                    width: 5em;
                    height: 100%;
                    border: 1px solid #ACCBFF;
                    border-radius: 4px;
                    margin-bottom: -4px;
                }
            }
            p{
                width: 100%;
                margin: 0;
                padding: 0.15em;
                font-size: small;
                color: #555;
                &:first-child{
                    font-size: 18px;
                    font-weight: 600;
                }
                &:nth-child(2){
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: flex-start;
                    align-items: center;
                    label{
                        display: block;
                        width: 50%;
                         white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow:hidden;
                    }
                }
            }
        }
    }
</style>
