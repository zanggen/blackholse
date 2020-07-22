<template>
  <div class="login" >
    <el-card class="login-card">
      <div class="logo">
        <img src="../../assets/image/logo_index.png" alt />
      </div>
      <!-- 表单组件 -->
      <el-form style="margin-top:20px">
        <el-form-item>
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="width:240px"></el-input>
          <el-button style="float:right" >发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.login {
  background: url("../../assets/image/login_bg.jpg");
  // 100vh就是占据当前可视屏幕的100%
  height: 100vh;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    height: 340px;
    width: 400px;
    .logo {
      text-align: center;
      img {
        height: 45px;
      }
    }
  }
}
</style>
