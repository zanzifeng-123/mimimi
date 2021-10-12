import Vue from 'vue'
import VueRouter from 'vue-router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// import index from 'index.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue'),
    meta:{logined:true}
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user/user.vue'),
    meta:{logined:true},
    children: [
      {
        path: 'personal',
        nameL:'personal',
        component: () => import('../views/user/personal/personal.vue'),
      }
    ]
  },
  {
    path: '/buy',
    name: 'buy',
    component: () => import('@/views/buy/buy.vue')
  },
  {
    path: '/falshbuy',
    name: 'falshbuy',
    component: () => import('@/views/flash-buy/false-buy.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  nprogress.start();
  next();
})

router.afterEach(() => {
  nprogress.done();
})

export default router
