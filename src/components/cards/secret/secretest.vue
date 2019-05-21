<template>
    <div>
        <div class="sort-tag">{{confidential.name}}</div>
        <div class="">
            <ul>
                <li v-for="(item, index) in confidential.info" :key="index">
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
    
</template>
<script>
export default {
    props: ['confidential'],
    data(){
        return {};
    }
}
</script>

<style scoped>
    .sort-tag{
        line-height: 2;
        font-size: 1.3em;
        color: #555555;
    }
    .box-card{
        margin-bottom: 8px;
    }
</style>