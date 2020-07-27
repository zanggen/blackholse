<template>
  <div>
    <!-- 最外层容器 -->
    <el-container >
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


export default {

 
  }


</script>

<style>
 
</style>