// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './View.vue'
import router from './router/index'

Vue.config.productionTip = false
import axios from 'axios'
Vue.prototype.axios= axios
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
Vue.use(VueCodemirror)

Vue.prototype.$elementMessage = function (msg, t) {
  this.$message({
    message: msg,
    type: t
  });
};



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
