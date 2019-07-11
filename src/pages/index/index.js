// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import store from './store/index';
import ElementUI from 'element-ui';
import '../../assets/iconfont/iconfont.css';
import 'element-ui/lib/theme-chalk/index.css';
import Router from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'font-awesome/css/font-awesome.min.css';
import router from "./router/index";
import animated from 'animate.css';



Vue.use(ElementUI);
Vue.use(Router);
Vue.use(VueAxios, axios);
Vue.use(animated);

Vue.config.productionTip = false
 /**
  * 判断当前是否登录，未登录不能跳转路由
  * 防止未登录状态下直接输入路由跳转
  */
/* eslint-disable no-new */
// router.beforeEach((to, from, next) => {
//     if (to.path == '/login') {
//         sessionStorage.removeItem('user');
//     }
//     let user = JSON.parse(sessionStorage.getItem('user'));
//     if (!user && to.path != '/login') {
//         next({
//             path: '/login'
//         });
//     } else {
//         next();
//     }
// });

// 引入路由
new Vue({
    el: '#app',
    store,
    router, // 注入到根实例中
    render: h => h(App)
});