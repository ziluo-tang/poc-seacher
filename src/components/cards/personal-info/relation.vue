<template>
    <el-card shadow="hover">
        <div class="sort-tag">关系图谱</div>
        <div ref="personnal-relation" class="personal-relation"></div>
    </el-card>
</template>
<script>
let echarts = require('echarts/lib/echarts');
require("echarts/lib/chart/graph");
export default {
    name: 'personalRelation',
    data() {
        return {
            personals: [{
                            name: '张爱丽',
                            symbol: require('../../../assets/img/u65.png'),
                            x: 300,
                            y: 300
                        }, {
                            name: '王一帆',
                            symbol: require('../../../assets/img/u70.png'),
                            x: 800,
                            y: 300
                        }, {
                            name: '张xx',
                            symbol: require('../../../assets/img/u65.png'),
                            x: 550,
                            y: 100
                        }, {
                            name: '李xx',
                            symbol: require('../../../assets/img/u65.png'),
                            x: 550,
                            y: 500
                        }],
            relations: [{
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
                        }]
        };
    },
    mounted() {
        let relationGraph = this.drawGraph();
        this.pubdata(relationGraph, this.personals);
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
        getImgData(imgSrc) {
            let fun = function (resolve, reject) {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                const img = new Image();
                img.crossOrigin = '';
                img.onload = function () {
                    let center = {
                        x: img.width / 2,
                        y: img.height / 2.5
                    }
                    var diameter = img.width;
                    canvas.width = diameter;
                    canvas.height = diameter;
                    context.clearRect(0, 0, diameter, diameter);
                    context.save();
                    context.beginPath();
                    let radius = img.width / 2;
                    context.arc(radius, radius, radius, 0, 2 * Math.PI); //画出圆
                    context.clip(); //裁剪上面的圆形
                    // 在刚刚裁剪的园上画图
                    context.drawImage(img, 0, 0, img.width, img.height, 0, 0, diameter, diameter);
                    context.restore(); // 还原状态
                    resolve(canvas.toDataURL('image/png', 1));
                }
                img.onerror = function(err) {
                    reject(new Error('Could not load image at ' + imgSrc));
                }
                img.src = imgSrc;
            }
            return new Promise(fun);
        },
        pubdata(chart, data){
            let picList = [];
            data.forEach(element => {
                picList.push(this.getImgData(element.symbol));
            });
            ;
            Promise.all(picList)
                .then(images => {
                    images.forEach((element, index) => {
                        data[index].symbol = `image://${element}`;
                    });
                    chart.setOption({
                        series: [{
                            data: data,
                            links: this.relations
                        }]
                    });
                })
                .catch(error => this.$message({message: error, type: 'warning' }));
        },
        drawGraph(){
            let relationGraph = echarts.init(this.$refs['personnal-relation']);
            relationGraph.setOption({
                title: {
                    show: false
                },
                tooltip: {},
                animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
                series: [{
                    type: 'graph',
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
                    lineStyle: {
                        normal: {
                            opacity: 0.9,
                            width: 1,
                            curveness: 0
                        }
                    }
                }]
            });
            return relationGraph;
        }
    }
}
</script>
<style lang="scss" scoped>
.el-card{
    width: 100%;
    .sort-tag{
        font-size: 1.1em;
        font-weight: 600;
        color: #409EFF;
        padding: 0 0.5em;
        border-left: 2px solid #409EFF;
    }
    .personal-relation{
        width: 100%;
        height: 400px;
        background-color: #F8FAFB;
        border-radius: 4px;
        margin-top: 20px; 
    }
}
</style>
