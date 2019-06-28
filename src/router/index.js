import Vue from "vue"
import VueRouter from "vue-router"

// 引入组件

import notFound from '../page/404.vue'
import seacher from '../page/seacher.vue'
import extendApp from '../page/extendApp.vue'
import result from '../page/result.vue'
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: '/seacher',
      hidden: true
    },
    {
      path: '/seacher',
      component: resolve => (require(["../page/seacher.vue"], resolve)),
      name: 'seacher',
      hidden: true
    },
    {
      path: '/extendApp',
      component: resolve => (require(['../page/extendApp.vue'], resolve)),
      name: 'extendApp',
      hidden: true
    },
    {
      path: '/result',
      component: resolve => (require(['../page/result.vue'], resolve)),
      name: 'result',
      hidden: true
    },
    {
      path: '/404',
      component: resolve => (require(['../page/result.vue'], resolve)),
      name: 'notFound',
      hidden: true
    }
  ]
});