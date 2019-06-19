import Vue from "vue"
import VueRouter from "vue-router"

// 引入组件

import notFound from '../page/404.vue'
import seacher from '../page/seacher.vue'
import extendApp from '../page/extendApp.vue'
import result from '../page/result.vue'
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    redirect: '/seacher',
    hidden: true
  },
  {
    path: '/seacher',
    component: seacher,
    name: 'seacher',
    hidden: true
  },
  {
    path: '/extendApp',
    component: extendApp,
    name: 'extendApp',
    hidden: true
  },
  {
    path: '/result',
    component: result,
    name: 'result',
    hidden: true
  },
  {
    path: '/404',
    component: notFound,
    name: 'notFound',
    hidden: true
  }
];
var router = new VueRouter({
    routes
})
export default router;