import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {path:'/index', component:resolve=>require(['../home/index.vue'],resolve),
      children:[
        {path: '/', redirect:'/configuration'},
        {
          path:'/aside',component:resolve=>require(["../components/aside.vue"],resolve)
        },
        {
          path:"/configuration",
          component:resolve=>require(["../components/configuration.vue"],resolve),
        },
        {
          path:"/configShow",
          component:resolve=>require(["../components/configShow.vue"],resolve),
        }
      ]}
  ]
})
