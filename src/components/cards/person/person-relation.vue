<template>
    <el-row>
        <div class="sort-tag">人员关系</div>
        <el-col :span="24">
            <el-card class="box-card">
                <div id="personnel-relation" class="base-info">
                    
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>
<script>
let echarts = require('echarts/lib/echarts');
require("echarts/lib/chart/graph");
export default {
    props: ['relate'],
    data() {
        return {};
    },
    mounted() {
        this.drawGraph();
    },
    methods: {
        drawGraph(){
            let relationGraph = echarts.init(document.getElementById('personnel-relation'));
            relationGraph.setOption({
                title: {
                    text: 'Graph 简单示例',
                    show: false
                },
                tooltip: {},
                animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
                series : [
                    {
                        type: 'graph',
                        layout: 'none',
                        symbolSize: 50,
                        roam: true,
                        label: {
                            normal: {
                                show: true
                            }
                        },
                        edgeSymbol: ['circle', 'arrow'],
                        edgeSymbolSize: [4, 10],
                        edgeLabel: {
                            normal: {
                                textStyle: {
                                    fontSize: 20
                                }
                            }
                        },
                        data: [{
                            name: '节点1',
                            x: 300,
                            y: 300
                        }, {
                            name: '节点2',
                            x: 800,
                            y: 300
                        }, {
                            name: '节点3',
                            x: 550,
                            y: 100
                        }, {
                            name: '节点4',
                            x: 550,
                            y: 500
                        }],
                        // links: [],
                        links: [ {
                            source: '节点2',
                            target: '节点1'
                        }, {
                            source: '节点1',
                            target: '节点3'
                        }, {
                            source: '节点2',
                            target: '节点3'
                        }, {
                            source: '节点2',
                            target: '节点4'
                        }, {
                            source: '节点1',
                            target: '节点4'
                        }],
                        lineStyle: {
                            normal: {
                                opacity: 0.9,
                                width: 2,
                                curveness: 0
                            }
                        }
                    }
                ]
            });
        }
    }
}
</script>
<style lang="scss" scoped>
     .el-row {
        margin: 0 -10px 0 10px !important;
        .base-info{
            width: 100%;
            height: 400px;
        }
     }
</style>
