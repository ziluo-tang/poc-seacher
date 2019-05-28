<template>
    <div>
        <div class="sort-tag">{{relate.name}}</div>
        <div class="relate-list">
            <router-link v-for="(item, index) in relate.info" :key="index" :to="{ path: '/result', query: {keyword: item.title}}">
                {{item.title}}
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    props: ['relate'],
    data(){
        return {};
    }    
}
</script>
<style lang="scss" scoped>
    .sort-tag{
        line-height: 2;
        font-size: 1.1em;
        font-weight: 550;
        color: #555555;
    }
    .relate-list{
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-content: center;
        a{
            width: 20%;
            line-height: 2em;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }
</style>
