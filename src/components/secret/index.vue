<template>
    <div>
        <div class="sort-tag">{{confidential.name}}</div>
        <div class="secret-list">
            <ul>
                <li v-for="(item, index) in confidential.info" :key="index">
                    <span class="order">{{index+1}}</span>
                    <router-link :to="{ path: '/result', query: {keyword: item.title}}">
                        {{item.title}}
                    </router-link>
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

<style lang="scss">
    .sort-tag{
            line-height: 2;
            font-size: 1.1em;
            font-weight: 550;
            color: #555555;
        }
        .secret-list{
            margin: -15px 0 8px 0;
            ul{
                list-style-type: none;
                margin-left: -20px;
                li{
                    border-bottom: 1px solid #dddddd;
                    padding: 10px 0; 
                    .order{
                        padding: 0px 5px;
                        margin-right: 5px;
                        color: #efefef;
                        background-color: red;
                    }
                }
            }
        }
</style>