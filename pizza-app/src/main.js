import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to,from,savedPosition) {
    return {x:0, y:100}
  }
})

// 全局守卫
// router.beforeEach((to,from,next) =>{
  
//   // next();
//   if(to.path == '/login' || to.path == '/register') {
//     next();
//   }else{
//     alert("请登录");
//     next('/login');
//   }
// })

// 后置钩子
// router.afterEach((to,from) =>{
//   alert('after each')
// })


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
