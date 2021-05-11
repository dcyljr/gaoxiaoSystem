import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import NotFound from '@/views/404'
import Intro from '@/views/Intro'
import File from '@/views/File'
import Message from '@/views/Message'
import List from '@/views/SysMng/List'
import Recyclebin from '@/views/SysMng/Recycle-bin'
import Commission from '@/views/SysMng/Commission'
import Return from "@/views/SysMng/Return"
import Net from '@/views/SysMng/Net'
import Online from '@/views/SysMng/Online'
import Inline from '@/views/SysMng/Inline'
import Wechat from '@/views/SysMng/Wechat'
import Recommend from '@/views/SysMng/Recommend'
import OnPreach from '@/views/SysMng/On-Preach'
import InPreach from '@/views/SysMng/In-Preach'
import Cooperation from '@/views/SysMng/Cooperation'
import Salesman from '@/views/SysMng/Salesman'
import Contract from '@/views/SysMng/Contract'
import Place from '@/views/SysMng/Place'
import Company from '@/views/SysMng/Company'
import Form from '@/views/SysMng/Form'
import Setting from '@/views/SysMng/Setting'
import User from '@/views/SysMng/User'
import Menu from '@/views/SysMng/Menu'
import Dept from '@/views/SysMng/Dept'
import Role from '@/views/SysMng/Role'
import Log from '@/views/SysMng/Log'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  routes: [{
    path: '/',
    name: '首页',
    component: Home,
    children: [{
      path: '',
      component: Intro,
      name: '系统介绍'
    },
    {
      path: 'File',
      component: File,
      name: '文档'
    },
    {
      path: 'Message',
      component: Message,
      name: '消息中心'
    },
    {
      path: '/list',
      component: List,
      name: '订单列表'
    },
    {
      path: 'recycle-bin',
      component: Recyclebin,
      name: '订单回收站'
    },
    {
      path: 'commission',
      component: Commission,
      name: '销售提成'
    },
    {
      path: 'return',
      component: Return,
      name: '回款记录'
    },
    {
      path: 'net',
      component: Net,
      name: '网站'
    },
    {
      path: 'online',
      component: Online,
      name: '线上双选会'
    },
    {
      path: 'inline',
      component: Inline,
      name: '线下招聘会'
    },
    {
      path: 'wechat',
      component: Wechat,
      name: '微信'
    },
    {
      path: 'recommend',
      component: Recommend,
      name: '人才推荐'
    },
    {
      path: 'onpreach',
      component: OnPreach,
      name: '空中宣讲会'
    },
    {
      path: 'inpreach',
      component: InPreach,
      name: '现场宣讲会'
    },
    {
      path: 'cooperation',
      component: Cooperation,
      name: '合作单位信息查询'
    },
    {
      path: 'salesman',
      component: Salesman,
      name: '业务员管理'
    },
    {
      path: 'contract',
      component: Contract,
      name: '合同'
    },
    {
      path:'place',
      component:Place,
      name:'地区管理'
    },
    {
      path:'company',
      component:Company,
      name:'单位类型管理'
    },
    {
      path:'form',
      component:Form,
      name:'报表中心'
    },
    {
      path:'setting',
      component:Setting,
      name:'设置'
    },
    {
      path: '/user',
      component: User,
      name: '用户管理'
    },
    {
      path: '/dept',
      component: Dept,
      name: '机构管理'
    },
    {
      path: '/role',
      component: Role,
      name: '角色管理'
    },
    {
      path: '/menu',
      component: Menu,
      name: '菜单管理'
    },
    {
      path: '/log',
      component: Log,
      name: '日志管理'
    }
    ]
  },
  {
    path: '/Login',
    name: '登录',
    component: Login
  },
  {
    path: '/404',
    name: 'notFound',
    component: NotFound
  }
  ]
})

router.beforeEach((to, from, next) => {
  let user = sessionStorage.getItem('user');
  if (to.path == '/login') {
    if (user) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    if (!user) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  }
})

export default router
