<template>
  <div>
    <!-- 最外层容器 -->
    <el-container >
      <!-- 左侧导航 -->
      <el-aside style="width:200px; background:#353b4e" >
        <layout-aside></layout-aside>
      </el-aside>
     
      <el-container>
        <!-- 头部 -->
        <el-header>
       <layout-head></layout-head>
        </el-header>
        <!-- 主要区域 -->
        <el-main style="margin:0;padding:0" >
          <!-- 放入容器 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>


export default {

 
  }


</script>

<style>
 
</style>