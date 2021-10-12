import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
router.beforeEach((to,from,next)=>{
  if(to.meta.logined){
    if(sessionStorage.login==1){/* 判断是否已登录 */
      next()
    }else{/* 如没登录跳转登录页面 */
      next({
        path:'/login'
      })
    }
  }else{/* 如果没有限制直接跳转 */
    next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
