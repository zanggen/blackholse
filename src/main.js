import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui' //引入element-ui 
import 'element-ui/lib/theme-chalk/index.css'//引入 样式
import './style/index.less' //引入初始化样式
import axios from 'axios' //引入 axios
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'  //把基础地址给赋值 那以后写的时候就可以省略基础地址
Vue.prototype.$axios = axios  //给Vue对象的原型属性 赋值 那么所有的vue实例都拥有了$axios

Vue.use(ElementUI) //全局注册 任意位置都可以使用 

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
