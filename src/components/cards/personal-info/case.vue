<template>
    <div>
        <el-card shadow="hover">
            <div class="sort-tag">风险情况</div>
            <div class="case-number">
                <label v-show="person.sfzdry">是否重点人员：{{person.sfzdry==0?'否':'是'}}</label>
                <label v-show="person.sfskry">是否涉恐人员：{{person.sfskry==0?'否':'是'}}</label>
                <label v-show="person.sfswry">是否涉稳人员：{{person.sfswry==0?'否':'是'}}</label>
                <label v-show="person.sfztry">是否在逃人员：{{person.sfztry==0?'否':'是'}}</label>
                <label v-show="person.sfztcxry">是否在逃撤销人员：{{person.sfztcxry==0?'否':'是'}}</label>
            </div>
        </el-card>
        <!-- <el-card shadow="hover">
            <div class="sort-tag">涉案特长</div>
            <div class="case-number">
                <label>涉案特长：</label>
                <label>特殊专长：</label>
            </div>
        </el-card> -->
        <!-- <el-card shadow="hover">
            <div class="sort-tag">涉及案件</div>
            <div>
                <div class="case-number">
                    <label>涉案数量：{{tableData.length}}</label>
                </div>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="地址">
                    </el-table-column>
                </el-table>
            </div>
        </el-card> -->
        <el-card shadow="hover">
            <div class="sort-tag">涉毒详情</div>
            <div>
                <div class="case-number">
                    <label v-show="person.sfsdry">是否涉毒人员：{{person.sfsdry==0?'否':'是'}}</label>
                    <label v-show="person.sdcs">涉毒次数：{{person.sdcs}}</label>
                    <label v-show="person.sfxdry">是否吸毒人员：{{person.sfxdry==0?'否':'是'}}</label>
                    <label v-show="person.xdcs">吸毒次数：{{person.xdcs}}</label>
                    <label v-show="person.sfrjds">是否入戒毒所：{{person.sfrjds==0?'否':'是'}}</label>
                    <label v-show="person.rjdscs">入戒毒所次数：{{person.rjdscs}}</label>
                </div>
                <!-- <el-table :data="tableData" style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="地址">
                    </el-table-column>
                </el-table> -->
            </div>
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">服刑情况</div>
            <div>
                <div class="case-number">
                    <label v-show="person.sfrkss">是否入看守所：{{person.sfrkss==0?'否':'是'}}</label>
                    <label v-show="person.rksscs">入看守所次数：{{person.rksscs}}</label>
                    <label v-show="person.sfrjls">是否入拘留所：{{person.sfrjls==0?'否':'是'}}</label>
                    <label v-show="person.rjlscs">入拘留所次数：{{person.rjlscs}}</label>
                    <label v-show="person.sfrjy">是否入监狱：{{person.sfrjy?'否':'是'}}</label>
                    <label v-show="person.rjycs">监狱次数：{{person.rjycs}}</label>
                </div>
                <!-- <el-table :data="tableData" style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="地址">
                    </el-table-column>
                </el-table> -->
            </div>
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">涉及事件</div>
            <div>
                <div class="case-number">
                    <label>是否重大刑事犯罪前科人员：{{person.sfzdxxfzqkry==0?'否':'是'}}</label>
                </div>
                <!-- <el-table :data="tableData" style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="地址">
                    </el-table-column>
                </el-table> -->
            </div>
        </el-card>
        <!-- <el-card shadow="hover">
            <div class="sort-tag">涉及线索</div>
            <div>
                <div class="case-number">
                    <label>涉及线索数量：{{tableData.length}}</label>
                </div>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="地址">
                    </el-table-column>
                </el-table>
            </div>
        </el-card> -->
        <!-- <el-card shadow="hover">
            <div class="sort-tag">涉及敏感信息</div>
            <div>
                <div class="case-number">
                    <label>涉及敏感信息数量：{{tableData.length}}</label>
                </div>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="地址">
                    </el-table-column>
                </el-table>
            </div>
        </el-card> -->
        <el-card shadow="hover">
            <div class="sort-tag">上访情况</div>
            <div>
                <div class="case-number">
                    <label v-show="person.sfzdsfry">是否上访人员：{{person.sfzdsfry==0?'否':'是'}}</label>
                    <label v-show="person.sfcs">上访次数：{{person.sfcs}}</label>
                </div>
                <!-- <el-table :data="tableData" style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="地址">
                    </el-table-column>
                </el-table> -->
            </div>
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">精神病人肇事肇祸</div>
            <div>
                <div class="case-number">
                    <label v-show="person.sfzszhjsbr">是否肇事肇祸精神病人：{{person.sfzszhjsbr==0?'否':'是'}}</label>
                    <label v-show="person.sfrakyy">是否入安康医院：{{person.sfrakyy==0?'否':'是'}}</label>
                    <label v-show="person.rakyycs">安康医院入院次数：{{person.rakyycs}}</label>
                </div>
                <!-- <el-table :data="tableData" style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="地址">
                    </el-table-column>
                </el-table> -->
            </div>
        </el-card>
        <el-card shadow="hover">
            <div class="sort-tag">收容教育</div>
            <div>
                <div class="case-number">
                    <label v-show="person.sfrsrjys">是否入收容教育所：{{person.sfrsrjys==0?'否':'是'}}</label>
                    <label v-show="person.rsrjyscs">收容教育次数：{{person.rsrjyscs}}</label>
                </div>
                <!-- <el-table :data="tableData" style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="地址">
                    </el-table-column>
                </el-table> -->
            </div>
        </el-card>
    </div>    
</template>
<script>
export default {
    props: ['person'],
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
        .case-number{
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;
            padding: 1em 0.8em;
            color: #606266;
            label{
                display: block;
                width: 33.3%;
            }
        }
    }
</style>
