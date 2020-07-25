import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui' //引入element-ui 
import 'element-ui/lib/theme-chalk/index.css'//引入 样式
import './style/index.less' //引入初始化样式

Vue.use(ElementUI) //全局注册 任意位置都可以使用 

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
