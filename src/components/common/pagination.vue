<template>
  <div class="pagination-content">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      @prev-click="handlePrevClick"
      @next-click="handleNextClick"
      :current-page="currentPage"
      :page-size="pageSize"
      layout="prev, pager, next"
      :total="totalPage"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  props: {
    totalPage: {
      type: Number,
      default: 200
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 1
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("sendPageSize", val);
    },
    handleCurrentChange(val) {
      this.$emit("sendCurrentPage", val);
    },
    handlePrevClick(val) {
      this.$emit("sendPrevPage", val);
    },
    handleNextClick(val) {
      this.$emit("sendNextPage", val);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/css/them.scss";
  .pagination-content{
    margin: 10px 0;
    text-align: center;
  }
</style>