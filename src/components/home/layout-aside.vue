<template>
  <div class="layout-aside">
      <div class="logo">
          <img src="../../assets/image/logo_admin.png" alt="">
      </div>
    <el-menu
     
      background-color="#353b4e"
      text-color="#adafb5"
      active-text-color="#ffd04b"
      router
    >
     
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
<!-- 内容管理 -->
<!-- el-submenu 是有折叠的菜单 -->
      <el-submenu index="1"> 
          <!-- 折叠菜单的名字 需要具名插槽 -->
          <template slot="title">
              <i class="el-icon-s-order"></i>
                <span >内容管理</span>
          </template>
          <!-- 这里在写 单菜单  el-menu-item -->
          <el-menu-item index="/home/publish">发布文章</el-menu-item>
          <el-menu-item index="/home/articles">内容列表</el-menu-item>
          <el-menu-item index="/home/comment">评论列表</el-menu-item>
      </el-submenu>
      
      <!-- 粉丝管理 -->
      <el-submenu index="2"> 
          <!-- 折叠菜单的名字 需要具名插槽 -->
          <template slot="title">
              <i class="el-icon-s-custom"></i>
                <span >粉丝管理</span>
          </template>
          <!-- 这里在写 单菜单  el-menu-item -->
          <el-menu-item index="/home/fansdata">图文数据</el-menu-item>
          <el-menu-item index="/home/fansinfo">粉丝概况</el-menu-item>
          <el-menu-item index="/home/fansimage">粉丝画像</el-menu-item>
          <el-menu-item index="/home/fanlist">粉丝列表</el-menu-item>
      </el-submenu>
      
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.layout-aside{ 
    width: 200px;
    height: 100vh;
    background:#353b4e ;
    
    .logo {
        
        text-align: center;
        background: #2e2f32;
        padding: 15px 0;
        img {
            height: 30px;
        }
    }

}
</style>