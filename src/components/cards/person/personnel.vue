<template>
    <el-card class="box-card">
        <div class="base-info">
            <div class="person-header">
                <img :src="person.header"/>
            </div>
            <div>
                <p>
                    <label>{{person.name}}</label>
                    <span>({{person.IDcard}})</span>
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
                width: 5em;
                height: 5em;
                margin-right: 1em;
                img{
                    width: 5em;
                }
            }
            p{
                max-width: 20em;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow:hidden;
                margin-bottom: 0.3em;
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
</style>


