<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">发布文章</template>
    </bread-crumb>

    <el-form style="margin-left:10px" label-width="100px">
      <el-form-item label="标题">
        <el-input style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" :rows="2"></el-input>
      </el-form-item>
      <el-form-item label="封面">
          <el-radio-group>
              <el-radio>单图</el-radio>
              <el-radio>三图</el-radio>
              <el-radio>无图</el-radio>
              <el-radio>自动</el-radio>
          </el-radio-group>
      </el-form-item>
      <el-form-item label="频道">
          <el-select>
              <!-- :key 索引值  :value id  :label 名字-->
              <el-option v-for="item in channels" 
              :key="item.id" 
              :value="item.id" 
              :label="item.name"></el-option>
          </el-select>
      </el-form-item>
      <el-button type="primary">发表</el-button>
      <el-button>存入草稿</el-button>      
    </el-form>
  </el-card>
</template>

<script>
export default {
    data () {
        return {
            channels:[]
        }   
    },
    methods:{
        //获取频道列表
        getChannels() {
            this.$axios({
                url:'/mp/v1_0/channels'
            }).then(result => {
                this.channels = result.data.channels
            })
        }
    },
    created () {
        this.getChannels()
    }
};
</script>

<style>
</style>