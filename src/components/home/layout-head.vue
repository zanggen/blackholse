<template>
  <!-- 用el-row  el-col  -->
  <el-row class="layout-head" type="flex" justify="space-between">
    <!-- span是给 col 设置宽度  elmentui 将页面分24分  6就等于1/4  2等于 1/12 -->
    <!-- 左侧 -->
    <el-col class="left" :span="6">
      <i class="el-icon-s-unfold"></i>
      <span>怦怦信息技术(上海)有限公司</span>
    </el-col>

    <!-- 右侧 -->
    <el-col class="right" :span="3">
      <img class="head-img" src="../../assets/image/avatar.jpg" alt />
      <!-- 下拉组件  el-dropdown -->
      <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item >个人信息</el-dropdown-item>
        <el-dropdown-item>git地址</el-dropdown-item>
        <el-dropdown-item >退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.layout-head {
  padding: 8px 0;
  .left {
    display: flex;
    align-items: center;
    .el-icon-s-unfold {
      font-size: 20px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    .head-img {
      //图片圆形处理
      border-radius: 50%;
      margin-right: 8px;
      width: 40px;
      height: 40px;
    }
  }
}
</style>