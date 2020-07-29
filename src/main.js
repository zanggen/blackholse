import Vue from 'vue'
import App from './App.vue'
import router from './router/permission'
import ElementUI from 'element-ui' //element-ui  组件
import Component from './components/index' //自定义组件       

import 'element-ui/lib/theme-chalk/index.css'//引入 样式
import './style/index.less' //引入初始化样式
import axios from './utils/axios.config' //引入 axios

Vue.use(ElementUI) //全局注册 任意位置都可以使用 
Vue.use(Component) //全局注册 自定义组件
Vue.use(axios) // 用vue.use 的方式 去执行axios 注册

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
