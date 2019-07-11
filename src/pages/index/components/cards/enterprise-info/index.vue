<template>
    <div>
        <enterprise-desc :enterprise="enterprise"></enterprise-desc>
        <el-tabs v-model="activeName" type="border-card">
            <el-tab-pane label="单位人员" name="routine">
                <keep-alive>
                    <enterprise-routine></enterprise-routine>
                </keep-alive>
            </el-tab-pane>
            <el-tab-pane label="涉案信息" name="case">
                <keep-alive>
                    <enterprise-case></enterprise-case>
                </keep-alive>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import enterpriseDesc from './enterpriseDesc';
import enterpriseRoutine from './routine';
import enterpriseCase from './case';
export default {
    data() {
        return {
            activeName: 'routine',
            enterprise: {}
        };
    },
    components: {
        enterpriseDesc,
        enterpriseRoutine,
        enterpriseCase
    }
}
</script>
