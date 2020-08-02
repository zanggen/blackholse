<template>
  <el-card>
    <!-- 插槽内容 => 标题 -->
    <bread-crumb slot="header">
      <template slot="title">评论列表</template>
    </bread-crumb>
    <!-- 表格 -->
    <el-table :data="list">
      <el-table-column prop="title" label="标题" width="680"></el-table-column>
      <el-table-column :formatter="formatter" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column width="220" label="操作">
        <template slot-scope="o">
          <!-- 用作用域插槽 从子组件 获取row -->
          <el-button size="small" type="text">修改评论</el-button>
          <el-button
            @click="openOrClose(o.row)"
            :style="{color: o.row.comment_status? '#409EFF' : '#E6A23C'}"
            size="small"
            type="text"
          >{{o.row.comment_status? '关闭评论 ': '打开评论'}}</el-button>
        </template>
      </el-table-column>
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
    //打开/关闭评论
    openOrClose(row) {
      let mess = row.comment_status ? "关闭" : "打开";
      this.$confirm(`确定要${mess}评论么? `, "提示").then(() => {
        //调用接口
        this.$axios({
          method:'put',
          url:'/mp/v1_0/comments/status',
          params:{article_id : row.id}, // 传article 参数
          data:{allow_comment: !row.comment_status} // 取反  因为当前如果是true 只能改为 false , 如果当前是false 只能改成 true
        }).then(result => {
          this.getComments()
        })
      })
      
    },

    formatter(row, column, cellValue, index) {
      // console.log(row)
      let mess = row.comment_status ? "正常" : "关闭";
      return mess;
    },
    // 定义获取评论方法
    getComments() {
      //query参数 相当于  get参数,路径参数,url参数
      //axios 分两种参数[body参数, 路径参数]     body参数放在 data里面     路径参数 放在 params 里面
      this.$axios({
        url: "/mp/v1_0/articles",
        params: { response_type: "comment" },
      }).then((result) => {
        // console.log(result);
        this.list = result.data.results;
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