<template>
    <el-card shadow="hover">
        <div class="personal-item" v-for="(person, index) in result.data.list" :key="index">
            <div class="base-info">
                <div class="person-header">
                    <el-image :src="person.header">
                        <div slot="placeholder" class="image-slot">
                            加载中<span class="dot">...</span>
                        </div>
                    </el-image>
                </div>
                <div>
                    <p>{{person.name}}</p>
                    <p v-if="person.sexy || person.age">
                        <label>性别：{{person.sexy}}</label>
                        <label>年龄：{{person.age}}</label>
                    </p>
                    <p v-if="person.IDcard">身份证：{{person.IDcard || person.key}}</p>
                    <p v-if="person.address">现住址：{{person.address}}</p>
                </div>
            </div>
        </div>
        <pagination :totalPage="result.data.list.length" :pageSize="pageSize" @sendPrevPage="sendPageChange" @sendCurrentPage="sendPageChange" @sendNextPage="sendPageChange"></pagination>
    </el-card>
</template>

<script>
import pagination from '../../common/pagination';
export default {
    name: 'personal',
    data(){
        return {
            pageSize: 1
        };
    },
    components: {
        pagination
    },
    computed: {
        result(){
            // let {personal} = this.$store.state.search.result;
            let personal = {
                data: {
                    list: [
                            {
                                name: '张三',
                                sexy: '女',
                                age: '24',
                                IDcard: '31000000000000',
                                header: require('../../../assets/img/u70.png'),
                                address: '浙江省杭州市上城区公安局'
                            },
                            {
                                name: '张ss',
                                sexy: '女',
                                age: '24',
                                IDcard: '31000000000000',
                                header: require('../../../assets/img/u70.png'),
                                address: '浙江省杭州市上城区公安局'
                            },
                            {
                                name: '张xx',
                                sexy: '女',
                                age: '24',
                                IDcard: '31000000000000',
                                header: require('../../../assets/img/u70.png'),
                                address: '浙江省杭州市上城区公安局'
                            }
                    ]
                }
            };
            return personal;
        }
    },
    methods: {
        sendPageChange(val){
            this.$store.dispatch('PAGE_CHANGE', {page: val, size: this.pageSize, strategy: this.result.strategy});
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
            border-left: 2px solid #409EFF;
            .person-header{
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
                max-width: 20em;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow:hidden;
                margin: 0;
                padding: 0.2em;
                font-size: small;
                color: #555;
                &:first-child{
                    font-size: 18px;
                    font-weight: 600;
                }
                label:not(:first-child){
                    margin-left: 1em;
                }
            }
        }
    }
</style>