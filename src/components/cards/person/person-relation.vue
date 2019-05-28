<template>
    <el-card class="box-card">
        <div id="personnal-relation" class="base-info"></div>
    </el-card>
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
            let relationGraph = echarts.init(document.getElementById('personnal-relation'));
            relationGraph.setOption({
                title: {
                    text: '',
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
                            name: '张爱丽',
                            x: 300,
                            y: 300
                        }, {
                            name: '王一帆',
                            x: 800,
                            y: 300
                        }, {
                            name: '张xx',
                            x: 550,
                            y: 100
                        }, {
                            name: '李xx',
                            x: 550,
                            y: 500
                        }],
                        // links: [],
                        links: [ {
                            source: '张爱丽',
                            target: '王一帆'
                        }, {
                            source: '张爱丽',
                            target: '张xx'
                        }, {
                            source: '王一帆',
                            target: '李xx'
                        }, {
                            source: '张爱丽',
                            target: '李xx'
                        }, {
                            source: '王一帆',
                            target: '张爱丽'
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
