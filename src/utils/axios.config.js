// 处理axios 拦截器     请求拦截器   响应拦截器
import axios from 'axios'
// 引入router
import router from '../router/permission'
//单独引入Message
import{Message} from 'element-ui'
import jsonBigInt from 'json-bigint'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn'  //把基础地址给赋值 那以后写的时候就可以省略基础地址

axios.defaults.transformResponse = [function (data) {
    // data 是响应回来的(后台传过来的) 字符串
   
    return data ? jsonBigInt.parse(data) : {}

}]


// 请求拦截器
axios.interceptors.request.use(function (config) {
    // config是 axios的默认请求配置 和 传入的配置( axios里面 url:xxxx headers{} 等等 ) 结合出来的 
    // 必须将config return   不return 加载不了数据(url:xxx 这些不执行 加载不了)  
    //  return config = 加载数据之前 我们可以对config 进行一些操作
    let token = window.localStorage.getItem('user-token')
    config.headers['Authorization'] = `Bearer ${token}` //统一注入token
    return config
}, function () { });

//响应拦截器
axios.interceptors.response.use(function (response) {
    
    return response.data ? response.data : {}
    // 下面是 对异常数据 统一处理
}, function (error) {
    let status = error.response.status
    let message = ''
    switch (status) {
        case 400:
            message = "请求参数错误"
            break;
        case 401:
            alert('登陆时效过期,请重新登陆')
            window.localStorage.clear() //因为token有可能过期,清除垃圾token
            router.push('/login') //这不是在vue实例 所以用不了 this.$router.push
            break;
        case 403:
            message = "用户非实名认证用户，无权限登录"
            break;
        case 404:
            message = "手机号不正确"
            break;
        case 507:
            message = "服务器或数据库异常"
            break;


        default:
            message = '未知错误'
            break;
    }
    Message({type:'warning', message})
    return  new Promise(function () {}) // 返回一个 promise 表示错误已经被处理掉, 相当于强行截至的错误
    
})






export default {
    install(Vue) {
        Vue.prototype.$axios = axios  //给Vue对象的原型属性 赋值 那么所有的vue实例都拥有了$axios
    }
}






