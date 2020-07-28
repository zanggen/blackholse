// 引入路由实例
import router from '../router'
//注册beforeEach事件      要去哪,从哪里来,必须执行的函数
router.beforeEach(function (to, from, next) {
    // 如果要去的地址以/home为起始  就说明 需要判断当前是不是登陆  判断token
    // 因为/home 是我们根据用户是否为登陆 去判断要不要拦截的页面
    if(to.path.startsWith('/home')) {
        let token = window.localStorage.getItem('user-token') 
        if(token) {  //token 是true 说明 缓存里有token 反之 就是没有
            // 放行
            next()
        } else{  //缓存没有token   那么 回到登陆界面 
            next('/login')
        }
    } else{
        // 如果没有/home 可以认为 这是不需要判断 要不要拦截的页面 直接放行就可以
        next()
    }
})

export default router