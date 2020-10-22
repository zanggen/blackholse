import layoutAside from './home/layout-aside.vue' 
import layoutHead from './home/layout-head.vue' 
import breadCrumb from './common/bread-crumb.vue'
import svgDom from './animate/svgDom.vue'
//所有自定义组件的插件

export default {
    // 导出一个 install方法  => 传入Vue 对象
    install: function (Vue) {
        Vue.component('layout-aside',layoutAside) //左侧导航组件
        Vue.component('layout-head',layoutHead) //头部导航组件
        Vue.component('bread-crumb',breadCrumb) //注册面包屑组件
        Vue.component('svgDom', svgDom)//动画组件

    }
}