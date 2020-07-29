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
      <!-- 属性不给:  相当于字符串 -->
      <img class="head-img" :src="userInfo.photo?userInfo.photo : defaultImg" alt />
      <!-- 下拉组件  el-dropdown -->
      <!-- 给下拉组件 绑定 command 事件 给item 设置相应的 command值 -->
      <el-dropdown @command="handleCommand" trigger="click">
        <span class="el-dropdown-link">
          {{userInfo.name}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="account">个人信息</el-dropdown-item>
          <el-dropdown-item command="git">git地址</el-dropdown-item>
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
      defaultImg: require("../../assets/image/avatar.jpg"), //路径转换成 base64字符串
    };
  },
  methods: {
    //定义一个获取用户数据的方法
    getUserInfo() {
      // let token = window.localStorage.getItem("user-token") //获取token
      //axios 请求
      this.$axios({
        url: "/mp/v1_0/user/profile",
        //创建一个headers 对象 里面再写请求参数
        // headers:{'Authorization': `Bearer ${token}`  }
      }).then((result) => {
        
        console.log(result);
        this.userInfo = result.data;
      });
    },
    // 定义一个 下拉菜单跳转的方法
    handleCommand(command) {
      //判断 菜单
      if (command === "account") {
        //如果点击的是账户信息
      } else if (command === "git") {
        //如果是git
        //就跳转到 git 仓库
        window.location.href =
          "https://github.com/zanggen/blackholse/commits/master";
      } else if (command === "logout") {
        //如果是退出
        window.localStorage.clear(); //清空缓存 , 只能清空自己当前的缓存  == token 也就清空了
        this.$router.push("/login"); //跳转到 登陆页面
      }
    },
  },
  created() {
    this.getUserInfo(); //一进页面就获取数据
  },
};
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