<template>
  <el-card>
    <!-- 插槽内容 => 标题 -->
    <bread-crumb slot="header">
      <template slot="title">评论列表</template>
    </bread-crumb>
    <!-- 表格 -->
    <el-table :data="list" style="width: 100%">
      <el-table-column  prop="name" label="标题" width="680"></el-table-column>
      <el-table-column prop="name" label="评论状态" ></el-table-column>
      <el-table-column prop="name" label="总评论数"></el-table-column>
      <el-table-column prop="name" label="粉丝评论数"></el-table-column>
      <el-table-column prop="name" label="操作"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list:[]
    }
  }
  
};
</script>

<style>
</style>