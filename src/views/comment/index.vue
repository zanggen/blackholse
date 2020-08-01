<template>
  <el-card>
    <!-- 插槽内容 => 标题 -->
    <bread-crumb slot="header">
      <template slot="title">评论列表</template>
    </bread-crumb>
    <!-- 表格 -->
    <el-table :data="list" >
      <el-table-column prop="title" label="标题" width="680"></el-table-column>
      <el-table-column prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column  label="操作"></el-table-column>

    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    // 定义获取评论方法
    getComments() {
      //query参数 相当于  get参数,路径参数,url参数
      //axios 分两种参数[body参数, 路径参数]     body参数放在 data里面     路径参数 放在 params 里面
      this.$axios({
        url: "/mp/v1_0/articles",
        params: { response_type: "comment" },
      }).then((result) => {
        console.log(result);
        this.list = result.data.results
      });
    },
  },
  created() {
    //调用
    this.getComments();
  },
};
</script>

<style>
</style>