import Vue from 'vue'
// 1引入安装好的 Vue-router
import Router from 'vue-router'
// 2引入定义好的 。vue后缀类型的文件
import Login from './views/Login'
import Home from './views/Home'
import WelCome from './views/Home/WelCome'
import Users from './views/Home/Users'
import Rights from './views/Home/power/rights'
import Roles from './views/Home/power/roles'
import Goods from './views/Home/goods'
import Params from './views/Home/params/'
import List from './views/Home/goods/list'
import Add from './views/Home/goods/add'
import Order from './views/Home/order/index'
Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [{
      path: '/welcome',
      component: WelCome
    },
    {
      path: '/users',
      component: Users
    },
    {
      path: '/rights',
      component: Rights
    },
    {
      path: '/roles',
      component: Roles
    },
    {
      path: '/categories',
      component: Goods
    },
    {
      path: '/params',
      component: Params
    },
    {
      path: '/goods',
      component: List
    },
    {
      path: '/goods/add',
      component: Add
    },
    {
      path: '/orders',
      component: Order
    }
    ]
  }]
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
