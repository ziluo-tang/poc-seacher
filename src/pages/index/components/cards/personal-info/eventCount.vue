<template>
    <div>
        <el-card shadow="hover">
            <div class="sort-tag">事件统计</div>
            <div class="identity">
                <label v-show="eventcount.tldp_cnt_7">近7天铁路订票次数：{{eventcount.tldp_cnt_7}}</label>
                <label v-show="eventcount.tldp_cnt_30">近30天铁路订票次数：{{eventcount.tldp_cnt_30}}</label>
                <label v-show="eventcount.fjlg_cnt_7">近7天飞机离港次数：{{eventcount.fjlg_cnt_7}}</label>
                <label v-show="eventcount.fjlg_cnt_30">近30天飞机离港次数：{{eventcount.fjlg_cnt_30}}</label>
                <label v-show="eventcount.jdzs_cnt_7">近7天酒店住宿次数：{{eventcount.jdzs_cnt_7}}</label>
                <label v-show="eventcount.jdzs_cnt_30">近30天酒店住宿次数：{{eventcount.jdzs_cnt_30}}</label>
                <label v-show="eventcount.wbsw_cnt_7">近7天网吧上网次数：{{eventcount.wbsw_cnt_7}}</label>
                <label v-show="eventcount.wbsw_cnt_30">近30天网吧上网次数：{{eventcount.wbsw_cnt_30}}</label>
                <label v-show="eventcount.kydp_cnt_7">近7天客运订票次数统计：{{eventcount.kydp_cnt_7}}</label>
                <label v-show="eventcount.kydp_cnt_30">近30天客运订票次数统计：{{eventcount.kydp_cnt_30}}</label>
                <label v-show="eventcount.blxw_cnt_180">近180天不良行为次数统计：{{eventcount.blxw_cnt_180}}</label>
                <label v-show="eventcount.blxw_cnt_30">近30天不良行为次数统计：{{eventcount.blxw_cnt_30}}</label>
                <label v-show="eventcount.crj_cnt_180">近180天出入境次数统计：{{eventcount.crj_cnt_180}}</label>
                <label v-show="eventcount.crj_cnt_30">近30天出入境次数统计：{{eventcount.crj_cnt_30}}</label>
                <label v-show="eventcount.jkd_cnt_7">近7天寄递次数统计：{{eventcount.jkd_cnt_7}}</label>
                <label v-show="eventcount.jkd_cnt_30">近30天寄递次数统计：{{eventcount.jkd_cnt_30}}</label>
                <label v-show="eventcount.yykb_cnt_180">近180天就医次数统计：{{eventcount.yykb_cnt_180}}</label>
                <label v-show="eventcount.yykb_cnt_30">近30天就医次数统计：{{eventcount.yykb_cnt_30}}</label>
                <label v-show="eventcount.bgl_cnt_180">近180天列管次数统计：{{eventcount.bgl_cnt_180}}</label>
                <label v-show="eventcount.bgl_cnt_30">近30天被管理次数统计：{{eventcount.bgl_cnt_30}}</label>
                <label v-show="eventcount.zjbl_cnt_180">近180天证件办理次数统计：{{eventcount.zjbl_cnt_180}}</label>
                <label v-show="eventcount.zjbl_cnt_30">近30天证件办理次数统计：{{eventcount.zjbl_cnt_30}}</label>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    props: ['eventcount'],
    data() {
        return {};
    }
}
</script>

<style lang="scss" scoped>
    .el-card{
         &:not(:last-child){
             margin-bottom: 10px;
         }
         .sort-tag{
            font-size: 1.1em;
            font-weight: 600;
            color: #409EFF;
            padding: 0 0.5em;
            border-left: 2px solid #409EFF;
        }
         .identity{
            padding: 1em 0.8em;
            color: #606266;
            label{
                display: block;
                width: 100%;
                margin: 5px 0;
            }
        }
    }
    
</style>

