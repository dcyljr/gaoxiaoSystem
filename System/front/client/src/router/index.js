import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Notfound from '../views/404.vue'
import Home from '../views/Home.vue'
import InfoShow from '../views/InfoShow'
import OrderList from '../views/OrderList'
import ContractList from '../views/ContractList'
import Plane from '../views/Plane'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/infoshow',
        name: 'infoshow',
        component: InfoShow
      },
      {
        path: '/orderlist',
        name: 'orderlist',
        component: OrderList
      },
      {
        path: '/contractlist',
        name: 'contractlist',
        component: ContractList
      },
      {
        path: '/plane',
        name: 'plane',
        component: Plane
      }
    ]
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '*',
    name: '/404',
    component: Notfound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.eleToken ? true : false;
  if (to.path == '/login' || to.path == '/register') {
    next();
  } else {
    isLogin ? next() : next('/login');
  }
})

export default router
