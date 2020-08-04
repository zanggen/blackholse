<template>
  <el-card class="material">
    <bread-crumb slot="header">
      <template slot="title">素材管理</template>
    </bread-crumb>

    <el-tabs v-model="activeName" @tab-click="changeTab">
      <el-tab-pane label="全部" name="all">
        <!-- 全部素材 显示的内容 -->
        <div class="card-list">
          <el-card
            :body-style="{padding:'0px'}"
            class="img-card"
            v-for="item in list"
            :key="item.id"
          >
            <img :src="item.url" alt />
            <el-row align="middle" class="operate" type="flex" justify="space-around">
              <i :style="{color: item.is_collected? 'red' : ''}" class="el-icon-star-on"></i>
              <i class="el-icon-delete-solid"></i>
            </el-row>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="收藏" name="collect">
        <!-- 收藏素材 显示的内容 -->
        <div class="card-list">
          <el-card
            :body-style="{padding:'0px'}"
            class="img-card"
            v-for="item in list"
            :key="item.id"
          >
            <img :src="item.url" alt />
            <el-row align="middle" class="operate" type="flex" justify="space-around">
              <i :style="{color: item.is_collected? 'red' : ''}" class="el-icon-star-on"></i>
              <i class="el-icon-delete-solid"></i>
            </el-row>
          </el-card>
        </div>
      </el-tab-pane>
    </el-tabs>
    <!-- 分页 -->
    <el-row type="flex" justify="center" style="margin-top:10px">
      <el-pagination
        :current-page="page.page"
        :page-size="page.pageSize"
         :total="page.total" 
        @current-change="changePage"
        style="margin:10px"
        background
        layout="prev, pager, next"
      ></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      activeName: "all",
      list: [],
      page: {
        page: 1, //当前页
        pageSize: 10, //当前每页条数
        total: 0, //总条数
      },
    };
  },
  methods: {
       //页面改变
    changePage(newPage) {
      // alert(newPage + '-----' + this.page.page)
      this.page.page = newPage // 
      // 调用接口 拉取数据
     this.getMaterial() // 拉取数据  刷新页面
    
    },
    //注册切换tab方法
    changeTab() {
      //this.activeName 是最新标签
      //加载不同类型的数据
      // all =>  加载所有数据
      //collect => 加载收藏的数据
      this.getMaterial(); // 加载数据
    },
    //加载数据
    getMaterial() {
      //调用接口
      this.$axios({
        url: "/mp/v1_0/user/images",
        params: { collect: this.activeName === "collect",page:this.page.page, per_page:this.page.pageSize }, // false 为 显示全部内容  true 显示 收藏
      }).then((result) => {
        console.log(result);
        this.list = result.data.results;
         this.page.total = result.data.total_count
      });
    },
  },
  created() {
    this.getMaterial(); //接收数据
  },
};
</script>

<style lang='less' scpoed>
.material {
  .card-list {
    display: flex;
    flex-wrap: wrap;
    .img-card {
      width: 150px;
      height: 150px;
      border-radius: 10px;
      margin: 40px;
      position: relative;
      .operate {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 20px;
        background: #f4f5f6;
      }
      img {
        width: 150px;
        height: 150px;
      }
    }
  }
}
</style>