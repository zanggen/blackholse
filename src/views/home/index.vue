<template>
  <div>
    <!-- 最外层容器 -->
    <el-container>
      <!-- 左侧导航 -->
      <el-aside style="width:200px">
        <layout-aside></layout-aside>
      </el-aside>
     
      <el-container>
        <!-- 头部 -->
        <el-header>
       <layout-head></layout-head>
        </el-header>
        <!-- 主要区域 -->
        <el-main>主体</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
//引入组件
import layoutAside from '../../components/home/layout-aside'
import layoutHead from '../../components/home/layout-head'
export default {
  //注册组件
  components:{
    'layout-aside':layoutAside,
    'layout-head':layoutHead
  }

};
</script>

<style>
 
</style>