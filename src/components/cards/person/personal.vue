<template>
    <el-card class="box-card">
        <div class="base-info">
            <div class="person-header">
                <img :src="person.header"/>
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
        <slot></slot>
    </el-card>
</template>

<script>
export default {
    props: ['person'],
    data(){
        return {};
    }
}
</script>

<style lang="scss" scoped>
    .box-card{
        margin-bottom: 8px;
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
                margin-top: 0;
                margin-bottom: 0.4em;
                // &:last-child {
                //     margin-bottom: 0;
                // }
            }
        }
    }
</style>


