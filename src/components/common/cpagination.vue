<template>
    <div class="pagination-content" v-show="pages.length>1">
        <div class="pagination-container">
            <el-button icon="el-icon-arrow-left" size="mini" :disabled="prevDisabled" @click="pagePrevious"></el-button>
            <ul class="pager" ref="pager">
                <li v-for="page in pages" :key="page" @click="pageChange" :class="{active: currentPage==page}">{{page}}</li>
            </ul>
            <el-button icon="el-icon-arrow-right" size="mini" :disabled="nextDisabled" @click="pageNext"></el-button>
        </div>
    </div>
</template>
<script>
export default {
    props: ['prev', 'pageNum', 'next'],
    data() {
        return {
            currentPage: 1,
            prevDisabled: false,
            nextDisabled: false
        };
    },
    computed: {
        pages() {
            let pages = new Array();
            let prev = this.$props.prev;
            let pageNum = this.$props.pageNum;
            let next = this.$props.next;
            for(let page=pageNum-prev;page<=pageNum;page++){
                pages.push(page);
            }
            for(let page=pageNum+1;page<=pageNum+next;page++){
                pages.push(page);
            }
            if(this.currentPage!=pages[0]){
                this.prevDisabled = false;
            }
            if(this.currentPage!=pages[pages.length-1]){
                this.nextDisabled = false;
            }
            return pages;
        }
    },
    methods: {
        pageChange(event) {
            let pages = this.$refs.pager.childNodes;
            this.currentPage = event.target.innerHTML;
            if(pages[0].innerHTML==this.currentPage){
                this.prevDisabled = true;
            }else{
                this.prevDisabled = false;
            }
            if(pages[pages.length-1].innerHTML==this.currentPage){
                this.nextDisabled = true;
            }else{
                this.nextDisabled = false;
            }
            this.$emit("sendCurrentPage", this.currentPage);
            event.stopPropagation();
        },
        pagePrevious(event) {
            this.currentPage--;
            this.nextDisabled = false;
            let pages = this.$refs.pager.childNodes;
            if(pages[0].innerHTML==this.currentPage){
                this.prevDisabled = true;
            }
            this.$emit("sendPrevPage", this.currentPage);
        },
        pageNext(event) {
            this.currentPage++;
            this.prevDisabled = false;
            let pages = this.$refs.pager.childNodes;
            if(pages[pages.length-1].innerHTML==this.currentPage){
                this.nextDisabled = true;
            }
            this.$emit("sendNextPage", this.currentPage);
        }
    },
    watch: {
        prev(val){
            if(val===0){
                this.currentPage = this.pages[0];
                this.prevDisabled = true;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .pagination-content{
        margin: 15px 0;
        text-align: center;
        .pagination-container{
            white-space: nowrap;
            padding: 2px 5px;
            color: #303133;
            font-weight: 700;
            line-height: 1.95;
            .el-button{
                padding: 8px;
                min-width: 30px;
                font-size: 13px;
                height: 28px;
                background-color: #f4f4f5;
                color: #606266;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                text-align: center;
                border: none;
            }
            .el-icon-arrow-left, .el-icon-arrow-right{
                font-weight: 700;
            }
            .pager{
                display: inline-block;
                user-select: none;
                list-style: none;
                padding-inline-start: 0;
                margin-block-start: 0;
                margin-block-end: 0;
                li{
                    margin: 0 5px;
                    background-color: #f4f4f5;
                    color: #606266;
                    min-width: 30px;
                    border-radius: 2px;
                    vertical-align: top;
                    display: inline-block;
                    font-size: 13px;
                    height: 28px;
                    line-height: 28px;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    text-align: center;
                    padding: 0;
                }
                .active{
                    background-color: #409EFF;
                    color: #FFF;
                    cursor: default;
                }
            }
        }
    }
</style>
<style>
    .pagination-container .el-icon-arrow-left,
    .pagination-container .el-icon-arrow-right{
        font-weight: 600;
    }
    .pagination-container .is-disabled .el-icon-arrow-left,
    .pagination-container .is-disabled .el-icon-arrow-right{
        color: #cccccc;
    }
</style>


