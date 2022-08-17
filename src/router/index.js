import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('../views/login/index.vue')
// home主页
const Home = () => import('../views/home/index.vue')
const homeDashboard =() => import('../views/home/dashboard.vue')
const homeIframe = () => import('../views/home/iframe.vue')
const homeTraffic =() => import('../views/home/traffic/index.vue')
const homeDumpTruck = () => import('../views/home/dumpTruck/index.vue')
const homeHazard = () => import('../views/home/hazardousVehicle/index.vue')
const homeGovernServices = () => import('../views/home/governServices/index.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      // 当 /user/:id 匹配成功
      // UserHome 将被渲染到 User 的 <router-view> 内部
      { path: '', component: homeDashboard, name: 'dashboard' },
      { path: 'iframe', component: homeIframe, name: 'iframe' },
      { path: 'traffic', component: homeTraffic, name: 'traffic'},
      { path: 'dumpTruck', component: homeDumpTruck, name: 'dumpTruck' },
      { path: 'hazardous', component: homeHazard, name: 'hazardous' },
      { path: 'governServices', component: homeGovernServices, name: 'governServices' }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  }
  // {
  //     path: '/',
  //     redirect: '/login'
  // }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
