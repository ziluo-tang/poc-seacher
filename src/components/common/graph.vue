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
    props: ['relation'],
    data() {
        return {};
    },
    mounted() {
        let relation = this.$props.relation;
        let categories = new Array();
        relation.nodes.forEach(element => {
            element.symbolSize = 80;
            categories.push(element.category);
        });
        relation.links.forEach(element => {
            element.value = 0;
            element.lineStyle = {
                width: 2
            };
            element.label = {
                show: true,
                fontSize: 12,
                formatter: function(param){
                    return param.data.name;
                }
            };
        });
        relation.categories = categories;
        console.log(relation);
        let relationGraph = this.drawGraph(relation);
        // this.pubdata(relationGraph, this.personals);
        window.onresize = function(){
            relationGraph.resize();
        }
    },
    computed: {
        result(){
            let { relation } = this.$store.state.search.result;
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
        drawGraph(graph){
            let relationGraph = echarts.init(this.$refs['personnal-relation']);
            relationGraph.setOption({
                title: {
                    show: false
                },
                tooltip: {},
                color: ['rgba(0,128,255,0.5)', 'rgba(64,0,128,0.5)', 'rgba(255,128,0,0.5)', 'rgba(255,128,192,0.5)'],
                animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
                series : [{
                    name: 'Les Miserables',
                    type: 'graph',
                    layout: 'force',
                    data: graph.nodes,
                    links: graph.links,
                    categories: graph.categories,
                    roam: true,
                    force: {
                        repulsion: 10000,
                        gravity: 0.01,
                        edgeLength: [1, 5]
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            color: '#ffffff',
                            fontSize: 14,
                            fontWeight: 'bolder'
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
