<template>
    <el-card shadow="hover">
        <!-- <div class="sort-tag">人员关系</div> -->
        <div ref="personnal-relation" class="personal-relation"></div>
    </el-card>
</template>
<script>
let echarts = require('echarts/lib/echarts');
require("echarts/lib/chart/graph");
export default {
    name: 'personal-relation',
    data() {
        return {};
    },
    mounted() {
        let relationGraph = this.drawGraph();
        window.onresize = function(){
            relationGraph.resize();
        }
    },
    computed: {
        result(){
            let {relation} = this.$store.state.search.result;
        }
    },
    methods: {
        drawGraph(){
            let relationGraph = echarts.init(this.$refs['personnal-relation']);
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
                        symbol: 'circle',
                        symbolSize: 50,
                        minRadius: 15,
                        maxRadius: 25,
                        roam: true,
                        label: {
                            normal: {
                                show: true,
                                position: 'bottom',
                                color: '#555555'
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
                            symbol: `image://${require('../../../assets/img/u65.png')}`,
                            x: 300,
                            y: 300
                        }, {
                            name: '王一帆',
                            symbol: `image://${require('../../../assets/img/u70.png')}`,
                            x: 800,
                            y: 300
                        }, {
                            name: '张xx',
                            symbol: `image://${require('../../../assets/img/u65.png')}`,
                            x: 550,
                            y: 100
                        }, {
                            name: '李xx',
                            symbol: `image://${require('../../../assets/img/u70.png')}`,
                            x: 550,
                            y: 500
                        }],
                        links: [{
                            source: '张爱丽',
                            target: '王一帆',
                            relation: '夫妻',
                            label: {
                                show: true,
                                fontSize: 12,
                                formatter: function(param){
                                    return param.data.relation;
                                }
                            }
                        }, {
                            source: '张爱丽',
                            target: '张xx',
                            relation: '债主',
                            label: {
                                show: true,
                                fontSize: 12,
                                formatter: function(param){
                                    return param.data.relation;
                                }
                            }
                        }, {
                            source: '王一帆',
                            target: '李xx',
                            relation: '仇人',
                            label: {
                                show: true,
                                fontSize: 12,
                                formatter: function(param){
                                    return param.data.relation;
                                }
                            }
                        }, {
                            source: '张爱丽',
                            target: '李xx',
                            relation: '仇人',
                            label: {
                                show: true,
                                fontSize: 12,
                                formatter: function(param){
                                    return param.data.relation;
                                }
                            }
                        }, {
                            source: '王一帆',
                            target: '张爱丽'
                        }],
                        lineStyle: {
                            normal: {
                                opacity: 0.9,
                                width: 1,
                                curveness: 0
                            }
                        }
                    }
                ]
            });
            return relationGraph;
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
