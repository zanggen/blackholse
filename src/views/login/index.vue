<template>
  <div class="login">
    <el-card class="login-card">
      <div class="logo">
        <img src="../../assets/image/logo_index.png" alt />
      </div>
      <!-- 表单组件 -->
      <!-- 数据校验首先要给 el-form   绑定 :model属性 和 :rules属性 -->
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" style="margin-top:20px">
        <!-- prop 绑定需要校验的 字段名 不写loginForm.mobile 只写 mobile -->
        <el-form-item prop="mobile">
          <!-- 绑定手机号 -->
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <!-- 绑定验证码 -->
          <el-input v-model="loginForm.code" style="width:240px" placeholder="请输入验证码"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <!-- 绑定是否勾选协议 -->
          <el-checkbox v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click="login" type="primary" style="width:100%">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    // return 之前我们可以定义任意函数
    let validator = function (rule, value, callBack) {
      if (value) {
        callBack(); //如果value 为 true 直接通过 callBack() 就可以
      } else {
        callBack(new Error("您需要同意协议")); //如果value 不是true 就callBack(new Error("错误信息"))
      }
    };

    return {
      loginForm: {
        mobile: "", //手机号
        code: "", //验证码
        check: false, //是否勾选协议?
      },
      // 定义rules  校验规则  表单是根据规则去校验 没有规则 就没有校验
      // key(字段名) : value(数组对象=> 多个 => 一个字段 可能有一个或 多个检验规则)
      loginRules: {
        mobile: [
          //手机号  校验
          {
            required: true, // required 意味必填
            message: "手机号不能为空", // 如果没有满足要求就会显示message的内容
          },
          //上面的 没过 可定不会校验接下来的 所以下面的不用设置必填
          {
            pattern: /^1[3456789]\d{9}$/, // 手机号  正则表达式
            message: "手机号格式不正确",
          },
        ],
        code: [
          {
            //验证码校验
            required: true,
            message: "验证码不能为空",
          },
          {
            pattern: /^\d{6}$/, //验证码必须为6个数字 正则校验
            message: "验证码必须为6个数字",
          },
        ],
        check: [
          {
            // 原本 是  validator :  return  之前的 变量名  validator: validator   然后我们可以简写如下
            validator,
          },
        ],
      },
    };
  },
  methods: {
    login() {
      //通过el-form组件的 validate方法 校验整个表单的数据
      // 传入一个回调函数 isOk为ture 说明 整个校验规则成功了
      //如果false 说明有错误
      this.$refs.loginForm.validate(isOk => {
        if (isOk) {
          //请求
          //axios中 data中放置body参数  params是放置地址参数
          this.$axios({
            url: '/mp/v1_0/authorizations',
            method: 'post', 
            data: this.loginForm
          }).then(result => {
            this.$router.push('/home') //登陆成功 跳转到首页
          })
          .catch(err => {
            this.$message({
              message:'手机号或验证码错误',
              type:'warning'
            })
          })
        }
      });
    },
  },
};
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
