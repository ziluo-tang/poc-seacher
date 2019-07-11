import Vue from "vue"
import VueRouter from "vue-router"
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

export default new VueRouter({
  // mode:'history',//默认是hash模式
  // scrollBehavior(to,from,savePosition){ // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
  //   console.log(to) // to：要进入的目标路由对象，到哪里去
  //   console.log(from) // from：离开的路由对象，哪里来
  //   console.log(savePosition) // savePosition：会记录滚动条的坐标，点击前进/后退的时候记录值{x:?,y:?}
  //   if(savePosition) {
  //     return savePosition;
  //   }else{
  //     return {x:0,y:0}
  //   }
  // },
  routes: [
    {
      path: "/",
      redirect: '/seacher',
      hidden: true
    },
    // {
    //   path: '/relationship',
    //   component: resolve => (require(["../components/cards/personal-relation/relationship.vue"], resolve)),
    //   name: 'relationship',
    //   // hidden: true
    // },
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
