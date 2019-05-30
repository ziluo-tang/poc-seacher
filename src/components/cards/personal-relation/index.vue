<template>
    <el-card shadow="hover" :body-style="{ padding: '10px 20px'}">
        <div class="sort-tag">人员关系</div>
        <div id="personnal-relation" class="personal-relation"></div>
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
    .sort-tag{
        font-size: 1.1em;
        color: #888888;
        margin-bottom: 5px;
    }
    .personal-relation{
        width: 100%;
        height: 400px;
    }
</style>
