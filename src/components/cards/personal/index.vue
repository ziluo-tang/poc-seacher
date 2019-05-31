<template>
    <el-card shadow="hover" :body-style="{ padding: '10px 20px'}">
        <div class="sort-tag">人员信息</div>
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
                    <p>                    
                        <label>{{person.name}}</label>
                        <label>({{person.IDcard || person.key}})</label>
                        <label>{{person.age}}</label>
                    </p>
                    <p>
                        <label>人员类型：</label>
                        <label>{{person.type}}</label>
                    </p>
                    <p>{{person.address}}</p>
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
                                IDcard: '31000000000000',
                                header: require('../../../assets/img/u70.png'),
                                age: '24',
                                address: '浙江省杭州市上城区公安局'
                            },
                            {
                                name: '张ss',
                                IDcard: '31000000000000',
                                header: require('../../../assets/img/u70.png'),
                                age: '24',
                                address: '浙江省杭州市上城区公安局'
                            },
                            {
                                name: '张xx',
                                IDcard: '31000000000000',
                                header: require('../../../assets/img/u70.png'),
                                age: '24',
                                address: '浙江省杭州市上城区公安局'
                            }
                    ]
                }
            };
            return personal;
        }
    },
    mounted(){
        console.log('personal');
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
        margin: 0 15px 1em 15px;
        padding-bottom: 1em;
        border-bottom: 1px dotted#888888;
        .base-info{
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            
            .person-header{
                margin-right: 1em;
                img{
                    width: 4em;
                }
            }
            p{
                max-width: 20em;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow:hidden;
                margin: 1em 0;
                font-size: small;
                color: #555;
            }
        }
    }
</style>