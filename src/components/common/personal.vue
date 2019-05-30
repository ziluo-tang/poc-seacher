<template>
    <div class="base-info">
        <div class="person-header">
            <el-image :src="person.header" :fit="scale-down">
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
    .base-info{
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 1em;
            padding-bottom: 1em;
            border-bottom: 1px dotted#888888;
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
</style>


