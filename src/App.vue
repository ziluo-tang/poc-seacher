<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "./assets/css/index.scss";
body {
    margin: 0;
    padding: 0;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    overflow: auto;
}
/*滚动条样式*/
::-webkit-scrollbar {/*滚动条整体样式*/
    width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
}
::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
}
::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
}

#app {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}

.el-submenu [class^=fa] {
    vertical-align: baseline;
    margin-right: 10px;
}

.el-menu-item [class^=fa] {
    vertical-align: baseline;
    margin-right: 10px;
}

.toolbar {
    background: #f2f2f2;
    padding: 10px;
    margin: 10px 0;
    .el-form-item {
        margin-bottom: 10px;
    }
}

</style>