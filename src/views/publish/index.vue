<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">发布文章</template>
    </bread-crumb>
{{formData}}
    <el-form
    ref="publishForm"
      :model="formData"
      :rules="publishRules"
      style="margin-left:10px"
      label-width="100px"
    >
      <el-form-item label="标题" prop="title">
        <el-input style="width:400px" v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input type="textarea" :rows="2" v-model="formData.content"></el-input>
      </el-form-item>
      <el-form-item label="封面" >
        <el-radio-group v-model="formData.cover.type">
          <el-radio :label="1">单图</el-radio>
          <el-radio :label="3">三图</el-radio>
          <el-radio :label="0">无图</el-radio>
          <el-radio :label="-1">自动</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道" prop="channel">
        <el-select v-model="formData.channel">
          <!-- :key 索引值  :value id  :label 名字-->
          <el-option v-for="item in channels" :key="item.id" :value="item.id" :label="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-button type="primary" @click="publish">发表</el-button>
      <el-button>存入草稿</el-button>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        title: "", //标题
        content: "", //内容
        cover: {
          // 封面类型 -1:自动，0-无图，1-1张，3-3张
          type: 0,
          images: "",
        },
        channel: null, //频道
      },
      publishRules: {
        title: [
          {
            required: true, // required 意味必填
            message: "标题不能为空", // 如果没有满足
          },
        ],
        content: [
          {
            required: true, // required 意味必填
            message: "内容不能为空",
          },
        ],
        channel: [
          {
            required: true, // required 意味必填
            message: "频道不能为空",
          },
        ],
      },

      channels: [],
    };
  },
  methods: {
      //发表 
      publish () {
          this.$refs.publishForm.validate(isOk => {
              if(isOk) {
                  console.log("成功")
              } else {
                  console.log("失败")
              }
          })
      },
    //获取频道列表
    getChannels() {
      this.$axios({
        url: "/mp/v1_0/channels",
      }).then((result) => {
        this.channels = result.data.channels;
      });
    },
  },
  created() {
    this.getChannels();
  },
};
</script>

<style>
</style>