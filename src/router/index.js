import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Login from '../views/login'
// import Main from '../views/home/main'
import Main from '../views/home/main2'




Vue.use(VueRouter)

const routes = [
  {
    path: '/login',

    component: Login
  },
  {//设置一个默认
    path: '/',
    //硬定向到首页
    redirect: '/home'
  },
  {
    path: '/home',
    // name: 'Home',
    component: Home,
    // 设置二级路由
    children: [{
      path: '', //二级路由 默认加载页面 可以 写个/  或者什么都不写  而且必须是加载的 所以不用设置按需加载
      component: Main
    }
    ,{
      
      // 发布文章 
      path: 'publish', //二级路由 地址不能已/(斜杠)开头 , 因为这样会从根上计算路径
      component: () => import( '../views/publish')  //按需加载
    }
    ,{
      
      // 修改文章 
      path: 'publish/:articleId', //动态路由
      component: () => import( '../views/publish')  //按需加载
    }
    ,{
      // 评论列表' 
      path: 'comment', //二级路由 地址不能已/(斜杠)开头 , 因为这样会从根上计算路径
      component: () => import( '../views/comment')  //按需加载
    }
    ,{
      
      // 素材列表 
      path: 'material', //二级路由 地址不能已/(斜杠)开头 , 因为这样会从根上计算路径
      component: () => import( '../views/material')  //按需加载
    }
    ,{
      
      //内容列表
      path: 'articles', //二级路由 地址不能已/(斜杠)开头 , 因为这样会从根上计算路径
      component: () => import( '../views/articles')  //按需加载
    }
    ,{
      
      //  图文数据
      path: 'fansdata', //二级路由 地址不能已/(斜杠)开头 , 因为这样会从根上计算路径
      component: () => import( '../views/fansdata')  //按需加载
    }
    
  ]

  }
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
  routes
})

export default router
