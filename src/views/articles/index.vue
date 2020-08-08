<template>
  <el-card>
    <!-- 面包屑 -->
    <bread-crumb slot="header">
      <template slot="title">内容列表</template>
    </bread-crumb>
    <!-- 搜索栏工具栏 -->
    <el-form style="margin-left:30px">
      <el-form-item label="文章状态:">
        <el-radio-group>
          <el-radio>全部</el-radio>
          <el-radio>草稿</el-radio>
          <el-radio>待审核</el-radio>
          <el-radio>审核通过</el-radio>
          <el-radio>审核失败</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道列表">
        <el-select v-model="value" placeholder="请选择"></el-select>
      </el-form-item>
      <el-form-item label="时间选择">
        <el-date-picker
          v-model="value1"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
    </el-form>
    <!-- 内容结构 -->
    <div class="total-info">共找到59279条符合条件的内容</div>

    <div class="article-list">
      <!-- 循环项 -->
      <div class="article-item" v-for="(item, index) in list" :key="index">
        <!-- 左侧内容 -->
        <div class="left">
          <img :src="item.cover.images.length ? item.cover.images[0] : defaultImg" alt />
          <div class="info">
            <span class="title">{{item.title}}</span>
            <el-tag style="width:70px">{{item.status|statusText}}</el-tag>
            <span class="date">{{item.pubdate}}</span>
          </div>
        </div>
        <!-- 右侧内容 -->
        <div class="right">
          <span>
            <i class="el-icon-edit"></i>修改
          </span>
          <span>
            <i class="el-icon-delete"></i>删除
          </span>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      list: [], //定义一个空数组
      defaultImg: require("../../assets/image/avatar.jpg"), //图片地址转成 base64

      value: "",
      value1: "",
    };
  },
  methods: {
    //获取内容数据
    getArticles() {
      //调用接口
      this.$axios({
        url: "/mp/v1_0/articles",
        //   params:{response_type:'statistic'}
      }).then((result) => {
        this.list = result.data.results;
      });
    },
    //     getArticles () {
    //      this.$axios({
    //        url: '/articles'
    //      }).then(result => {
    //        this.list = result.data.results
    //      })
    //    }
  },

  created() {
    this.getArticles();
  },
  filters: {
    //过滤文章状态
    statusText(value) {
      switch (value) {
        case 0:
          return "草稿";
          break;
        case 1:
          return "待审核";
          break;
        case 2:
          return "审核通过";
          break;
        case 3:
          return "审核失败";
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style lang='less' scoped>
.total-info {
  border-bottom: 1px dashed #ccc;
  padding: 15px 0;
  color: #323745;
  font-size: 14px;
}
.article-list {
  .article-item {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid #f2f3f5;
    .left {
      display: flex;
      img {
        width: 150px;
        height: 100px;
        border-radius: 5px;
      }
      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 10px;
        .date {
          color: #999;
          font-size: 12px;
        }
        .title {
          color: #333;
          font-size: 14px;
        }
      }
    }
    .right {
      font-size: 14px;
      span {
        margin-right: 5px;
        cursor: pointer;
      }
    }
  }
}
</style>